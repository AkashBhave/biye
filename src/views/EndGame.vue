<template>
    <div class="flex flex-col w-3/4">
        <div class="flex">
            <div class="flex flex-1 flex-col">
                <div class="flex-1 my-6 mx-auto">
                    <img :src="getCharacterImage()" class="h-64" alt>
                </div>
                <div class="flex-1 my-4">
                    <h1 class="text-3xl font-bold mx-auto">你毕业了！</h1>
                </div>
            </div>
            <div class="flex flex-1 flex-col mx-auto">
                <div class="flex-1 my-6 text-center">
                    <h3 class="flex-1 text-2xl font-bold">你的成绩单</h3>
                    <table
                        cellpadding="10"
                        class="mx-auto border-2 border-primary border-solid mt-2"
                    >
                        <tr class="border-2 border-primary border-solid">
                            <th class="px-8">年级</th>
                            <th class="px-8">你的积分</th>
                            <th class="px-8">要求得分</th>
                        </tr>
                        <tr v-for="(score, index) in $store.state.scores" :key="index">
                            <td>{{ $store.state.gradesChinese[index] }}</td>
                            <td>{{ score }}</td>
                            <td>{{ $store.state.requiredScores[index] }}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <h3 class="text-2xl mt-6">你要上寄宿学校还是走读学校？</h3>
        <div class="flex-1 flex w-1/3 mx-auto mb-6 mt-2">
            <div
                v-for="(answer, index) in getCollegeQuestion().answers"
                class="mx-auto"
                :key="answer"
                @click="currentResponseIndex = index"
            >
                <button
                    :class="((currentResponseIndex === index) ? 'btn-tertiary text-light' : 'btn-secondary text-dark')"
                    class="btn py-2 px-4 mx-4 my-2"
                >{{ answer }}</button>
            </div>
        </div>
        <div class="flex-1 my-6">
            <button-next button-title="完打游戏" @next="exit()"></button-next>
        </div>
    </div>
</template>

<script>
import router from "@/router";

import ButtonNext from "@/components/ButtonNext";

export default {
    components: {
        ButtonNext
    },
    data() {
        return {
            currentResponseIndex: null
        };
    },
    methods: {
        getCharacterImage() {
            let character = this.$store.state.character.name;
            return require("../assets/img/characters/" +
                character +
                "-stand" +
                ".svg");
        },
        getCollegeQuestion() {
            return {
                answers: ["寄宿学校", "走读学校"]
            };
        },
        exit() {
            router.push("/");
            // Clear modifications to store by force reloading the page
            router.go();
        }
    },
    mounted() {
        // Determine whether the user passed or not
        let requiredScore = this.$store.state.requiredScores[
            this.$store.state.currentGrade - 7
        ];
        let currentScore = this.$store.state.currentScore;
        this.isPassed = currentScore >= requiredScore;

        // Clear current grade's score
        this.currentScore = currentScore;
        this.$store.state.currentScore = null;
    }
};
</script>
