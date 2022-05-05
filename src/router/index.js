import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Blog from '../views/Blog.vue'
import Courses from '../views/Courses.vue'
import Create from '../views/Create.vue'
import Edit from '../views/Edit.vue'
import Login from '../views/login/Login.vue'
import Register from '../views/login/Register.vue'





const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ('../views/AboutView.vue')
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog,

        },

        {
            path: '/create',
            name: 'create',
            component: Create,

        },





        {
            path: '/courses/:id',
            name: 'courses',
            component: Courses
        },


        {
            path: '/edit/:id',
            name: 'edit',
            component: Edit
        },


        //Login
        {
            path: '/login',
            name: 'login',
            component: Login
        },

        //register
        {
            path: '/register',
            name: 'register',
            component: Register
        },

    ]
})

export default router