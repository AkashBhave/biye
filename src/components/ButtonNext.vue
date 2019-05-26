<template>
    <div>
        <button @click="next()" class="btn btn-primary px-6 py-3 text-light">{{ buttonTitle }}</button>
    </div>
</template>

<script>
export default {
    props: ["buttonTitle"],
    methods: {
        next(event) {
            this.$emit("next");
        }
    }
};
</script>


<style lang="scss" scoped>
</style>