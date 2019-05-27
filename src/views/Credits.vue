<template>
    <div class="flex flex-col">
        <div class="flex flex-col my-6">
            <h1 class="font-bold text-3xl">创作者</h1>
            <div class="flex-1 mt-4">
                <h3 class="text-2xl font-bold">
                    Akash Bhave（巴昊天）
                    <p class="text-xl font-normal">Game Design and Development</p>
                </h3>
            </div>
            <div class="flex-1 mt-4">
                <h3 class="text-2xl font-bold">
                    Rose Du
                    <p class="text-xl font-normal">Question Creation</p>
                </h3>
            </div>
        </div>
        <div class="flex flex-col my-6">
            <h1 class="font-bold text-3xl">License</h1>
            <div class="flex-1 mt-4">
                <h3 class="text-2xl font-bold">MIT License</h3>
                <a
                    href="https://github.com/AkashBhave/biye/blob/master/LICENSE"
                    class="text-xl font-normal text-primary underline"
                >LICENSE</a>
            </div>
        </div>
        <div class="flex-1 my-6">
            <button-next @next="back()" button-title="回去"></button-next>
        </div>
    </div>
</template>

<script>
import ButtonNext from "@/components/ButtonNext";

import router from "@/router";

export default {
    components: {
        ButtonNext
    },
    methods: {
        back() {
            router.push("/");
        }
    }
};
</script>
