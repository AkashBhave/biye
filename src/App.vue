<template>
    <div id="app" class="flex flex-col h-screen">
        <the-header></the-header>
        <transition name="fade" mode="out-in" class="w-auto">
            <div class="w-full flex flex-grow items-center p-4" id="page">
                <router-view class="mx-auto"/>
            </div>
        </transition>
    </div>
</template>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>

<script>
import TheHeader from "@/components/TheHeader";

export default {
    components: {
        TheHeader
    },
    mounted() {
        // Load data from data.json
        var data = require("@/assets/data.json");
        this.$store.state.data = data;
    }
};
</script>
