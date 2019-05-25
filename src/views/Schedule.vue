<template>
    <div class="flex w-full">
        <div id="left-box" class="flex-grow">
            <p>TO HERE</p>
            <div class="box h-64"></div>
        </div>
        <div id="right-box" class="flex-grow">
            <p>FROM HERE</p>
            <div class="box h-64">
                <div
                    class="mx-auto w-1/3 bg-secondary"
                    v-for="subject in getSubjects()"
                    :key="subject"
                >{{ subject }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import dragula from "dragula";

export default {
    methods: {
        getSubjects() {
            let currentGrade = this.$store.state.currentGrade;

            let subjectsFull = this.$store.state.data.questions[
                currentGrade - 7
            ].subjects;

            let subjects = [];
            for (var subjectIndex in subjectsFull) {
                subjects.push(subjectsFull[subjectIndex].chineseName);
            }

            return subjects;
        }
    },
    mounted() {
        var boxArray = document.getElementsByClassName("box");
        var boxes = Array.prototype.slice.call(boxArray);
        dragula({ containers: boxes });
    }
};
</script>

<style lang="scss" scoped>
@import "node_modules/dragula/dist/dragula";
</style>
