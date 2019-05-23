<template>
    <div class="container mx-auto">
        <div class="flex">
            <div id="left-box" class="box flex-1">
                <div>Content 1</div>
            </div>
            <div id="right-box" class="box flex-1">
                <div>Content 2</div>
            </div>
        </div>
    </div>
</template>

<script>
import dragula from "dragula";

export default {
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
