import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Item'

Vue.use(Router)

export default new Router({

    routes : [
    {
        name: 'Item',
        path: '/items',
        component: Item
    },

    {
        path: '/items/new',
        name: 'NewItem',
        component: NewItem
  }
]
})

