<template>
    <div class="container mx-auto">
        <div class="my-16" id="character">
            <h1 class="mx-4 text-2xl font-bold">选你的 Character</h1>
            <div class="flex items-center w-9/12 mx-auto my-4">
                <img
                    @click="character = 'blue'"
                    @mouseover="blueHover = true"
                    @mouseleave="blueHover = false"
                    class="flex-1 h-48"
                    :src="(blueHover) ? blueCharacterHover : blueCharacter"
                >
                <img
                    @click="character = 'pink'"
                    @mouseover="pinkHover = true"
                    @mouseleave="pinkHover = false"
                    class="flex-1 h-48"
                    :src="(pinkHover) ? pinkCharacterHover : pinkCharacter"
                >
            </div>
            <h2>
                <span class="font-light">你的 character：</span>
                <span class="font-normal">{{ characterChinese }}</span>
            </h2>
        </div>
        <div class="my-16" id="name">
            <h1 class="mx-4 text-2xl font-bold">你的名字</h1>
            <input class="input-name text-xl my-4" type="text" v-model="name">
            <p class="my-2 font-light">
                <span :style="'visibility: ' + ((name.length > 0) ? 'visible' : 'hidden')">你叫</span>
                <span class="text-lg font-normal">{{ name }}</span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            blueCharacter: require("../assets/img/characters/blue.svg"),
            pinkCharacter: require("../assets/img/characters/pink.svg"),
            blueCharacterHover: require("../assets/img/characters/blue-surp.svg"),
            pinkCharacterHover: require("../assets/img/characters/pink-surp.svg"),
            blueHover: false,
            pinkHover: false,
            character: ""
        };
    },
    computed: {
        characterChinese() {
            if (this.character == "blue") {
                return "蓝色";
            } else if (this.character == "pink") {
                return "粉红色";
            }
        }
    }
};
</script>

<style lang="scss" scoped>
</style>



