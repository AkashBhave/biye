<template>
    <div
        id="header"
        class="flex-grow-0 text-light bg-tertiary flex items-center justify-between px-2"
    >
        <p>毕业</p>
        <div>
            <span
                v-if="$store.state.currentGrade != null"
            >{{ $store.state.gradesChinese[$store.state.currentGrade - 7] }}年级&nbsp;</span>
            <span v-if="$store.state.currentScore != null">/&nbsp;{{ $store.state.currentScore }}积分</span>
        </div>
        <div v-if="$store.state.name">
            <span
                :style="'color: ' + $store.state.character.color"
            >{{ $store.state.character.chineseName }}</span>
            <span>&nbsp;/&nbsp;</span>
            <span>{{ $store.state.name }}</span>
        </div>
    </div>
</template>
  


<style lang="scss" scoped>
#header {
    min-height: 50px;
}
</style>

