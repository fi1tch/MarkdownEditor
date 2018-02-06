import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './src/App.vue';
import NewItem from './src//components/NewItem.vue';


const routes = [
    {
        name: 'NewItem',
        path: '/add',
        component: NewItem
    }
];

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');