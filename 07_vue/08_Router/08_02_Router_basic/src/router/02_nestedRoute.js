import HomeView from '../views/01_router/HomeView.vue';
import RootRouter from '@/views/02_nestedRoute/RootRouter.vue';
import NestedHome from '@/views/02_nestedRoute/NestedHome.vue';
import NestedView from '@/views/02_nestedRoute/NestedView.vue';
import HiddenView from '@/views/02_nestedRoute/HiddenView.vue';
import { createWebHashHistory } from 'vue-router';
import router from './01_router';

const router = createRouter({
    history : createWebHistory(import.meta.env.BASE_URL),
    routes :[
        {
            path: '/',
            name: 'home',
            compount :HomeView
        },
        {
            path :'/nested',
            name : 'nested',
            component : RootRouter,
            children :[
                {
                    path : "",
                    component : NestedHome
                },
                {
                    path : 'view',
                    component :NestedView
                },{
                    path :'hidden',
                    name :'hidden',
                    component : HiddenView
                }
            ]
        }
    ]
});

export default router;