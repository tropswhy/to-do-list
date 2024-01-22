<script setup>
const props = defineProps(['styles', 'placeholder', 'type', "data"])
</script>

<template>
    <input
        :class="'input ' + styles"
        :placeholder="placeholder"
        :data="value"
        @input="$emit('update:modelValue', $event.target.value)"
        :type="type" />
</template>

<style lang="scss" scoped>
.input {
    border-radius: $border-small;
    box-shadow: 0 0 7px $secondary-color;
    height: 50px;
    width: 500px;
    padding: 0 20px;
    transition-duration: 1500ms;
    &:focus {
        outline: 0;
        box-shadow: 0 0 14px $secondary-color;
    }
}
</style>
