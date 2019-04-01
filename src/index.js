import Vue from "vue"
import VueRouter from 'vue-router'

import routes from './router'
import store from "./store"
import App from "./app"

import "./assert/css/normalize.css"
import "./assert/css/common.css"

Vue.use(VueRouter)

Vue.config.debug = true;

// Router
const router = new VueRouter({
    mode:"hash",
    routes
});

router.beforeEach((to,fo,nx) => {
    window.scrollTo(0, 0)
    nx()
});

router.afterEach((to,fo) => {

});
// router.start(App, '#app');

new Vue({
    el: "#app",
    render: h => h(App),
    store,
    router
})