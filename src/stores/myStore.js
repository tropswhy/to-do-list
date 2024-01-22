import { defineStore } from 'pinia'

export const useMyStore = defineStore('myStore', {
    state: () => ({
        list: [
            {
                id: 1,
                title: 'Сделать to do list',
                count: 0,
            },
            {
                id: 2,
                title: 'Подготовиться к экзамену по ТОЭ',
                count: 0,
            },
            {
                id: 3,
                title: 'Сделать курсач по ТАУ',
                count: 0,
            },
        ],
    }),

    actions: {
        addDo(title) {
            if (title.replaceAll(' ', '') !== '') {
                this.list = [
                    ...this.list,
                    {
                        id: Date.now(),
                        title: title,
                        count: 0,
                    },
                ]
            } else {
                alert('Вы оставили поле ввода пустым')
            }
        },

        findById(id) {
            let ind = -1
            this.list.map((item, index) =>
                item.id == id ? (ind = index) : (ind = ind)
            )
            if (ind == -1) return undefined
            return this.list[ind]
        },

        removeDo(id) {
            this.findById(id).count += 1
            if (this.findById(id).count > 1)
                this.list = this.list.filter((item) => item.id !== id)
        },
    },
})
