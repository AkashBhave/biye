<template>
    <div>
        <div class="my-8" id="character">
            <h1 class="mx-4 text-3xl font-bold">选你的角色</h1>
            <h3 class="text-xl mx-2">
                <span
                    :style="'color: ' + charactersColor[characterIndex]"
                >{{ charactersChinese[characterIndex] }}</span>
            </h3>
            <div class="flex my-4">
                <img
                    v-for="(c, index) in characters"
                    :key="index"
                    @click="characterIndex = index"
                    @mouseover="setCharacterHover(index, true)"
                    @mouseleave="setCharacterHover(index, false)"
                    class="flex-1 h-48 mx-6"
                    :src="getCharacterImage(index)"
                >
            </div>
        </div>
        <div class="my-8" id="name">
            <h1 class="mx-4 text-3xl font-bold">你的名字</h1>
            <input class="input-name text-xl my-4" type="text" v-model="name">
        </div>
        <div class="my-8" id="next">
            <button-next @next="next()" button-title="下一个"></button-next>
        </div>
    </div>
</template>

<script>
import router from "@/router";
import ButtonNext from "@/components/ButtonNext";

export default {
    components: {
        ButtonNext
    },
    data() {
        return {
            name: "",
            characterIndex: -1,
            characters: ["blue", "pink"],
            charactersChinese: ["蓝色", "粉红色"],
            charactersColor: ["#a4c4ec", "#f4b0c6"],
            charactersHover: [false, false],
            blueImg: require("../assets/img/characters/blue.svg")
        };
    },
    methods: {
        getCharacterImage(index) {
            let currentHover = this.charactersHover[index];
            let currentCharacter = this.characters[index];

            if (currentHover) {
                return require("../assets/img/characters/" +
                    currentCharacter +
                    "-surp.svg");
            } else {
                return require("../assets/img/characters/" +
                    currentCharacter +
                    ".svg");
            }
        },
        setCharacterHover(index, isHover) {
            this.$set(this.charactersHover, index, isHover);
        },
        check() {
            if (this.characterIndex < 0) {
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
                // Add data to store
                let characterIndex = this.characterIndex;
                this.$store.state.name = this.name;
                this.$store.state.character.name = this.characters[
                    characterIndex
                ];
                this.$store.state.character.chineseName = this.charactersChinese[
                    characterIndex
                ];
                this.$store.state.character.color = this.charactersColor[
                    characterIndex
                ];

                this.$store.state.currentGrade = 7;

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
        },
        characterColor() {}
    }
};
</script>

<style lang="scss" scoped>
#character img:hover {
    cursor: pointer;
}
</style>



