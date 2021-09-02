/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(ViewRouter);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('header-component', require('./components/HeaderComponent.vue').default);

const Costumer = require('./pages/Costumer.vue');
const DataTransaksi = require('./pages/DataTransaksi.vue');
const Product = require('./pages/Product.vue');

const routes = [
    {
        path : '/costumer',
        component : Costumer
    },
    {
        path : '/datatransaksi',
        component : DataTransaksi
    },
    {
        path : '/product',
        component : Product
    }
]

const router = new VueRouter({
    routes 
})


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

new Vue({
    el:'#app',
    data: {
        title: 'App Inventory'
    },
    router
});
