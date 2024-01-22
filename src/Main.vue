<script setup>
import { ref } from 'vue'
import Input from './ui-kit/Input.vue'
import Button from './ui-kit/Button.vue'
import Element from './components/Element.vue'
import { useMyStore } from './stores/myStore.js'

const value = ref('') // ref - референс для реактивности

const myStore = useMyStore()

const changeHandler = (event) => {
    value.value = event.target.value
}

const clickHandler = () => {
    myStore.addDo(value.value)
    value.value = ''
}
</script>

<template>
    <main class="flex flex-col items-center justify-center mt-32 space-y-5">
        <!-- <input class="input" 
        placeholder="Введите что-нибудь"
        v-model="value"/>  v-model - двустороннее связывавание
        <p>{{ value }}</p> -->
        <div class="flex space-x-4 mb-6">
            <Input
                placeholder="Введите дело"
                type="text"
                :value="value"
                v-model="value"
                v-on:keydown.enter="clickHandler"
                />
            <Button
                @click="clickHandler"
                class="btn">
                Добавить
            </Button>
        </div>
        
        <div
            v-for="item in myStore.list"
            @click="myStore.removeDo(item.id)"
            :key="item.id">
            
            <Element :variant="(item.count < 1) ? 'primary' : 'sex'">
                {{ item.title }}
            </Element>
        </div>
    </main>
</template>

<style lang="scss" scoped>
</style>
