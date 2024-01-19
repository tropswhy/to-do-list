import { defineStore } from 'pinia'

export const useMyStore = defineStore('myStore', {
    state: () => ({
        list: [
            {
                id: 1,
                title: "Обоссать кому-нибудь ебало"
            },
            {
                id: 2,
                title: "Сделать тудудудудудудуд"
            },
            {
                id: 3,
                title: "дудудудудудуду"
            },
        ],
    }),

    actions: {
        addDo(title){
            this.list = [...this.list, {
                id: Date.now(),
                title: title
            }]
        }
    },
})
