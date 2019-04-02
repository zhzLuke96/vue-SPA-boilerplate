
const routes = [
    {
        path:"/",
        redirect:"/index"
    },
    {
        path:"/index",
        component: () => import(/* webpackChunkName: "route1" */ './views/index.vue')
    },
    {
        path:"/axios",
        component: () => import(/* webpackChunkName: "route1" */ './views/axios.vue')
    },
    {
        path:"*",
        component: () => import(/* webpackChunkName: "route1" */ './views/404.vue')
    }
];
export default routes;
