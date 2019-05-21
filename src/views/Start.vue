<template>
    <div class="container mx-auto">
        <transition name="fade">
            <div
                v-if="!check()"
                class="bg-secondary border-l-4 border-primary text-tertiary my-8 p-4"
                role="alert"
            >
                <p class="font-bold">Warning</p>
                <p>{{ error }}</p>
            </div>
        </transition>
        <div class="my-16" id="character">
            <h1 class="mx-4 text-2xl font-bold">选你的 Character</h1>
            <div class="flex flex-initial w-6/12 mx-auto my-8">
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
                <span class="font-light">你的 Character：</span>
                <span class="font-normal">{{ characterChinese }}</span>
            </h2>
        </div>
        <div class id="name">
            <h1 class="mx-4 text-2xl font-bold">你的名字</h1>
            <input class="input-name text-xl my-4" type="text" v-model="name">
        </div>
        <div class="my-16" id="next">
            <button @click="next()" class="btn btn-next px-6 py-3 text-light">下一次</button>
        </div>
    </div>
</template>

<script>
import router from "@/router";

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
            character: "",
            error: ""
        };
    },
    methods: {
        setState() {},
        check() {
            if (this.character.length === 0) {
                this.error = "Please select a character";
                return false;
            }

            if (this.name.length === 0) {
                this.error = "Please choose your name";
                return false;
            }

            return true;
        },
        next() {
            if (this.check()) {
                // Set state
                this.$store.state.character = this.character;
                this.$store.state.name = this.name;

                // Change view
                router.push("schedule");
            }
        }
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
#character img:hover {
    cursor: pointer;
}
</style>



