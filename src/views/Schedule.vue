<template>
    <div class="flex flex-col w-full">
        <div class="flex mx-auto my-8">
            <h1 class="mx-4 text-3xl font-bold">选你的时间表</h1>
        </div>
        <div class="flex my-8">
            <div class="flex-grow">
                <h3 class="text-xl">
                    你的时间表
                    <span
                        :class="(classes.length != numClasses) ? 'text-primary' : ''"
                        class="font-bold"
                    >({{ classes.length }}/{{ numClasses }})</span>
                </h3>
                <div id="right-box" class="box"></div>
            </div>
            <div class="flex-grow">
                <h3 class="text-xl">你可以学：</h3>
                <div id="left-box" class="box">
                    <div
                        class="block mx-auto w-1/3 py-2 my-4 btn btn-secondary"
                        v-for="subject in getSubjects()"
                        :key="subject"
                    >{{ subject }}</div>
                </div>
            </div>
        </div>
        <div class="flex mx-auto my-8">
            <button-next @next="next()" buttonTitle="下一个"></button-next>
        </div>
    </div>
</template>

<script>
import router from "@/router";
import dragula from "dragula";

import ButtonNext from "@/components/ButtonNext";

export default {
    components: {
        ButtonNext
    },
    data() {
        return {
            classes: [],
            numClasses: 4
        };
    },
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
        },
        check() {
            if (this.classes.length != this.numClasses) {
                alert("Please select " + this.numClasses + " classes");
                return false;
            }

            return true;
        },
        next() {
            if (this.check()) {
                this.$store.state.classes = this.classes;

                router.push("question");
            }
        }
    },
    mounted() {
        let vm = this;

        let boxArray = document.getElementsByClassName("box");
        let boxes = Array.prototype.slice.call(boxArray);
        // Initialize dragula
        let drake = dragula({ containers: boxes });

        // Set on-drop functionality
        drake.on("drop", function(el, target, source, sibling) {
            if (target.id === "right-box") {
                vm.classes.push(el.innerHTML);
            } else if (target.id === "left-box") {
                vm.classes.pop(el.innerHTML);
            }
        });
    }
};
</script>

<style lang="scss" scoped>
@import "node_modules/dragula/dist/dragula";

.box {
    min-height: 10em;
}
</style>
