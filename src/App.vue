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
