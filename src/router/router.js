import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Posts from '../components/Posts.vue'
import Post from '../components/Post.vue'
import Sidebar from '../components/Sidebar.vue'
import Login from  '../components/login.vue'
import Protected from  '../components/protected.vue'
import {authStore} from '../store/store.js'

const routes = [
    {
        path: '/', components: {
            default: Home,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/login', components: {
            default: Login,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/about', components: {
            default: About,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/contact', components: {
            default: Contact,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/posts', components: {
            default: Posts,
            LeftSideBar: Sidebar
        }
    },
    {
        path: '/posts/:id', components: {
            default: Post,
            LeftSideBar: Sidebar
        },
        name: 'post',
    },
    {
        path: '/protected', components: {
            default: Protected,
            LeftSideBar: Sidebar
        },
        meta:{
            requiresAuth: true
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if(to.meta.requiresAuth && !authStore.isAuthinticated){
        next('/login')
    }else{
        next()
    }
})


export default router
