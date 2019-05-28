<template>
    <div class="flex flex-col">
        <div class="mx-auto my-6">
            <img :src="getCharacterImage()" class="h-48" alt>
        </div>
        <div class="flex my-6">
            <h3 class="font-bold text-2xl">
                你
                <span v-if="isPassed === false" class="text-primary">不</span>
                上完
                <span class="text-primary">{{ getCurrentGradeChinese() }}</span>了
            </h3>
        </div>
        <h5 class="text-xl my-6">
            <span>你得了</span>
            <span class="font-bold">{{ currentScore }}</span>
            <span>分</span>
        </h5>
        <div class="my-6">
            <button-next @next="next()" :button-title="getButtonText()"></button-next>
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
            isPassed: null,
            currentScore: null,
            isGraduated: null
        };
    },
    methods: {
        getCurrentGradeChinese() {
            let currentGrade = this.$store.state.currentGrade;
            return this.$store.state.gradesChinese[currentGrade - 7];
        },
        getNextGradeChinese() {
            let currentGrade = this.$store.state.currentGrade;
            return this.$store.state.gradesChinese[currentGrade + 1 - 7];
        },
        getCharacterImage() {
            let character = this.$store.state.character.name;
            if (this.isPassed) {
                return require("../assets/img/characters/" +
                    character +
                    "-stand" +
                    ".svg");
            } else {
                return require("../assets/img/characters/" +
                    character +
                    "-sad" +
                    ".svg");
            }
        },
        getButtonText() {
            let vm = this;

            if (this.isPassed) {
                if (this.isGraduated) {
                    return "毕业";
                } else {
                    return "开始上" + vm.getNextGradeChinese() + "年级";
                }
            } else {
                return "复读上" + vm.getCurrentGradeChinese() + "年级";
            }
        },
        next() {
            if (this.isPassed) {
                if (this.isGraduated) {
                    router.push("/end-game");
                } else {
                    this.$store.state.currentGrade += 1;
                    router.push("/schedule");
                }
            } else {
                router.push("/schedule");
            }
        }
    },
    mounted() {
        // Determine whether the user passed or not
        let requiredScore = this.$store.state.requiredScores[
            this.$store.state.currentGrade - 7
        ];
        let currentScore = this.$store.state.currentScore;
        this.isPassed = currentScore >= requiredScore;

        // Add to the list of scores if user passed
        if (this.isPassed) {
            this.$store.state.scores.push(currentScore);
        }

        // Clear current grade's score
        this.currentScore = currentScore;
        this.$store.state.currentScore = null;

        // Determine whether to send to the graduate screen or not
        this.isGraduated = this.$store.state.currentGrade === 12;
    }
};
</script>
