<script setup>
    const props = defineProps({
        variant: 'primary'
    })
</script>

<template>
    <div :class="'element text-center ' + variant">
        <slot>
        </slot>
    </div>
</template>

<style lang="scss" scoped>
.element {
    width: 500px;
    text-align: center;
    padding: 5px 10px;
    color: $text-color;
    border-radius: $border-medium;
    transition-duration: 1000ms;
    cursor: pointer;
}
.primary {
    background-color: $secondary-color;
    
    &:hover {
        background-color: $accent-color;
        box-shadow: 0 0 10px $accent-color;
    }
}

.sex {
    background-color: green;
    transform: rotateX(360deg); //rotateY(360deg) rotateZ(360deg);
    &:hover {
        background-color: rgb(7, 172, 7);
        box-shadow: 0 0 10px greenyellow;
    }
}
</style>
