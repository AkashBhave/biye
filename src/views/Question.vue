<template>
    <div class="flex flex-col w-full">
        <div class="flex mx-auto my-6">
            <h1 class="text-3xl font-bold">第{{ currentSubject + 1 }}个问题</h1>
        </div>
        <div class="mx-auto my-4">
            <img class="h-24" :src="getCharacterImage()" alt>
        </div>

        <div v-if="getCurrentQuestion().passage" class="mx-auto my-6">
            <h3 class="block font-bold text-2xl">Passage</h3>
            <p class="block mt-2">{{ getCurrentQuestion().passage }}</p>
        </div>
        <div class="mx-auto my-6">
            <h3 class="block font-bold text-2xl">问题</h3>
            <p class="block mt-2">{{ getCurrentQuestion().question }}</p>
        </div>
        <div class="flex flex-col my-6">
            <h3 class="flex-1 font-bold text-2xl">答案</h3>
            <div class="flex-1 flex w-1/2 mx-auto mt-2">
                <div
                    v-for="(answer, index) in getCurrentQuestion().answers"
                    class="flex-1"
                    :key="answer"
                    @click="currentResponseIndex = index"
                >
                    <button
                        :class="((currentResponseIndex === index) ? 'btn-tertiary text-light' : 'btn-secondary text-dark') + 
                        ' ' + ((responseIsCorrect === null) ? '' : 'btn-disabled')"
                        class="btn py-2 px-4 mx-4"
                        :disabled="responseIsCorrect !== null"
                    >{{ answer }}</button>
                </div>
            </div>
            <h5
                class="flex-1 font-bold text-xl mt-4"
                v-if="responseIsCorrect != null"
            >{{ (responseIsCorrect) ? "CORRECT" : "INCORRECT" }}</h5>
        </div>
        <div class="flex mx-auto my-6">
            <button-next
                @next="handleNext()"
                :buttonTitle="(responseIsCorrect != null) ? '下一个' : 'Submit'"
            ></button-next>
        </div>
    </div>
</template>

<script>
import ButtonNext from "@/components/ButtonNext";

export default {
    components: {
        ButtonNext
    },
    data() {
        return {
            currentSubject: 0,
            currentResponseIndex: -1,
            characterImageExt: "",
            responseIsCorrect: null
        };
    },
    methods: {
        getCurrentSubject() {
            let currentGrade = this.$store.state.currentGrade;
            let subjects = this.$store.state.data.questions[currentGrade - 7]
                .subjects;

            for (var subjectIndex in subjects) {
                if (
                    subjects[subjectIndex].chineseName ===
                    this.$store.state.classes[this.currentSubject]
                ) {
                    return subjects[subjectIndex];
                }
            }
        },
        getCurrentQuestion() {
            let currentSubject = this.getCurrentSubject();
            let questionIndex = Math.floor(
                Math.random() * currentSubject.questions.length
            );

            return currentSubject.questions[questionIndex];
        },
        getCharacterImage() {
            let character = this.$store.state.character.name;
            return require("../assets/img/characters/" +
                character +
                this.characterImageExt +
                ".svg");
        },
        handleNext() {
            this.responseIsCorrect != null ? this.next() : this.submit();
        },
        submit() {
            let vm = this;

            if (!this.currentResponseIndex < 0) {
                alert("Please select an answer");
            } else {
                let correctResponse = this.getCurrentQuestion().answerIndex;
                if (correctResponse === this.currentResponseIndex) {
                    vm.characterImageExt = "-stand";
                    vm.responseIsCorrect = true;
                } else {
                    vm.characterImageExt = "-sad";
                    vm.responseIsCorrect = false;
                }
            }
        },
        next() {
            this.currentResponseIndex = -1;
            this.characterImageExt = "";
            this.responseIsCorrect = null;

            if (this.currentSubject + 1 === this.$store.state.classes.length) {
                this.currentSubject = 0;
                alert("END OF GRADE");
            } else {
                this.currentSubject += 1;
            }
        }
    }
};
</script>

<style lang="scss">
</style>
