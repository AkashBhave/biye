<template>
    <div class="container mx-auto">
        <div class="flex">
            <div id="left-box" class="container flex-1">
                <div class="box h-64"></div>
            </div>
            <div id="right-box" class="container flex-1">
                <div class="box h-64">
                    <div
                        class="subject btn text-dark font-bold py-2 px-4 my-2 w-4/12 mx-auto"
                        v-for="subject in getSubjects()"
                        :key="subject"
                    >{{ subject }}</div>
                </div>
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

.box .subject {
    display: block;
    border: 1px solid black;
}
</style>
