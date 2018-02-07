import Vue from 'vue'
import Router from 'vue-router'
import Posts from '@/components/Item'


const routes = [
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
];

