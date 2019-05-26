<template>
    <div>
        <div class="my-8">
            <img class="h-64 mx-auto" src="@/assets/img/logo/logo.png" alt>
            <h1 class="text-5xl font-bold">B&igrave; Y&egrave;</h1>
            <p>A choose-your-own-adventure Chinese review game.</p>
        </div>
        <div class="my-8">
            <button
                @click="navigateStart()"
                class="btn btn-primary text-light px-6 py-3 mx-4 text-3xl"
            >开始</button>
            <button
                @click="navigateCredits()"
                class="btn btn-primary text-light px-6 py-3 mx-4 text-3xl"
            >片头</button>
        </div>
    </div>
</template>

<script>
import router from "@/router";

export default {
    methods: {
        navigateStart() {
            router.push("start");
        },
        navigateCredits() {
            router.push("credits");
        }
    }
};
</script>
