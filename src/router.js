import index from "./views/index.vue"
import notFound from "./views/404.vue"

const routes = [
    {
        path:"/",
        redirect:"/index"
    },
    {
        path:"/index",
        component: index
    },
    {
        path:"*",
        component: notFound
    }
];
export default routes;
