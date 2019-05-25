<template>
    <div id="app" class="flex flex-col h-screen">
        <Header></Header>
        <transition name="fade" mode="out-in">
            <div class="flex flex-grow items-center mx-auto p-4" id="page">
                <router-view/>
            </div>
        </transition>
    </div>
</template>

<style lang="scss">
@import "@/assets/scss/style.scss";
</style>

<script>
import Header from "@/components/Header";

export default {
    components: {
        Header
    },
    mounted() {
        // Load data from data.json
        var data = require("@/assets/data.json");
        this.$store.state.data = data;
    }
};
</script>
