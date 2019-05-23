<template>
    <div id="app" class="flex items-center h-screen">
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>

<script>
import { log } from "util";
export default {
    mounted() {
        // Load data from data.json
        var data = require("@/assets/data.json");
        this.$store.state.data = data;
    }
};
</script>
