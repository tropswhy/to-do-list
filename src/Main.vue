<script setup>
import { ref } from 'vue'
import Input from './ui-kit/Input.vue'
import { useMyStore } from './stores/myStore.js'

const value = ref('') // ref - референс для реактивности

const myStore = useMyStore()

const changeHandler = (event) => {
    value.value = event.target.value
}
</script>

<template>
    <main class="flex flex-col items-center justify-center mt-32 space-y-8">
        <!-- <input class="input" 
        placeholder="Введите что-нибудь"
        v-model="value"/>  v-model - двустороннее связывавание
        <p>{{ value }}</p> -->
        <div class="flex space-x-4">
            <Input
                placeholder="ВведитеетидевВ"
                type="text"
                v-on:keydown.enter="myStore.addDo(value)"
                @input="changeHandler"/>
            <button
                @click="myStore.addDo(value)"
                class="btn">
                Гена на!
            </button>
        </div>
        <div
            v-for="item in myStore.list"
            class="element"
            :key="item.id">
            {{ item.title }}
        </div>
    </main>
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
.element {
    width: 500px;
    text-align: center;
    padding: 5px 10px;
    color: $text-color;
    background-color: $secondary-color;
    border-radius: $border-medium;
}
</style>
