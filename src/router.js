import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', name: 'home', component: Home},
        {path: '/Material/:id', name: 'Material', component: ()=> import('./views/Material.vue')},
        {path: '/Cate/:id', name: 'Cate', component: ()=> import('./views/Cate.vue')},
        {path: '/Result', name: 'Result', component: ()=> import('./views/Result.vue')}
    ]
})
