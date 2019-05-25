<template>
    <div id="header" class="text-light bg-tertiary flex items-center justify-between h-12 px-2">
        <p>毕业</p>
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
</style>

