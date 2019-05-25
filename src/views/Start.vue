<template>
    <div>
        <div class="my-8" id="character">
            <h1 class="mx-4 text-3xl font-bold">选你的角色</h1>
            <h3 class="text-xl mx-2">
                <span v-if="character === 'blue'" style="color: #a4c4ec">蓝色</span>
                <span v-else-if="character === 'pink'" style="color: #f4b0c6">粉红色</span>
            </h3>
            <div class="flex my-4">
                <img
                    @click="character = 'blue'"
                    @mouseover="blueHover = true"
                    @mouseleave="blueHover = false"
                    class="flex-1 h-48 mx-6"
                    :src="(blueHover) ? blueCharacterHover : blueCharacter"
                >
                <img
                    @click="character = 'pink'"
                    @mouseover="pinkHover = true"
                    @mouseleave="pinkHover = false"
                    class="flex-1 h-48 mx-6"
                    :src="(pinkHover) ? pinkCharacterHover : pinkCharacter"
                >
            </div>
        </div>
        <div class="my-8" id="name">
            <h1 class="mx-4 text-3xl font-bold">你的名字</h1>
            <input class="input-name text-xl my-4" type="text" v-model="name">
        </div>
        <div class="my-8" id="next">
            <button @click="next()" class="btn btn-next px-6 py-3 text-light">下一个</button>
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
            character: ""
        };
    },
    methods: {
        check() {
            if (this.character.length <= 0) {
                alert("Please select a character");
                return false;
            }
            if (this.name.length <= 0) {
                alert("Please choose your name");
                return false;
            }

            return true;
        },
        next() {
            if (this.check()) {
                this.$store.state.character = this.character;
                this.$store.state.name = this.name;

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



