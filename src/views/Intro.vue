<template>
    <div class="container mx-auto">
        <div>
            <img class="h-64 mx-auto" src="@/assets/img/logo/logo.png" alt>
            <h1 class="text-5xl font-bold">B&igrave; Y&egrave;</h1>
            <p>A choose-your-own-adventure Chinese review game.</p>
        </div>
        <div class="my-8">
            <button @click="toStart()" class="btn btn-play text-light px-6 py-3 mx-4 text-3xl">开始</button>
            <button @click="toCredits()" class="btn btn-play text-light px-6 py-3 mx-4 text-3xl">片头</button>
        </div>
    </div>
</template>

<script>
import router from "@/router";

export default {
    methods: {
        toStart() {
            router.push("start");
        },
        toCredits() {
            router.push("credits");
        }
    }
};
</script>
