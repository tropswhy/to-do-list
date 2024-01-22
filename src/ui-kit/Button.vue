<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
.btn {
    width: 100px;
    height: 50px;
    padding: 0 10px;
    background-color: $secondary-color;
    border-radius: $border-medium;
    transition-duration: 500ms;
    &:hover {
        background-color: $accent-color;
        box-shadow: 0 0 10px $accent-color;
    }
}
</style>
