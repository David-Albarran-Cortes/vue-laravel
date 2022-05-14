import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Blog from "../views/Blog.vue";
import Courses from "../views/Courses.vue";
import Create from "../views/Create.vue";
import Edit from "../views/Edit.vue";
import Login from "../views/login/Login.vue";
import Register from "../views/login/Register.vue";
import Dashboard from "../views/dashboard/Dashboard.vue";




const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: "/",
            name: "home",
            component: Blog,
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import ("../views/AboutView.vue"),
        },
        {
            path: "/blog",
            name: "blog",
            component: Blog,
        },

        {
            path: "/create",
            name: "create",
            component: Create,
            meta: {
                requiresAuth: true,
            },
        },

        {
            path: "/courses/:id",
            name: "courses",
            component: Courses,
        },

        {
            path: "/edit/:id",
            name: "edit",
            component: Edit,
            meta: {
                requiresAuth: true,
            },
        },

        //Login
        {
            path: "/login",
            name: "login",
            component: Login,
            beforeEnter: (to, from, next) => {
                if (localStorage.getItem("auth")) {
                    next("/dashboard");
                } else [next()];
            },
        },

        //register
        {
            path: "/register",
            name: "register",
            component: Register,
        },

        {
            path: "/dashboard",
            name: "dashboard",
            component: Dashboard,
            meta: {
                requiresAuth: true,
            },
        },
    ],
    linkActiveClass: "active-link"
});

router.beforeEach((to, from, next) => {
    const protectedRoute = to.matched.some(record => record.meta.requiresAuth)

    if (protectedRoute && !localStorage.getItem("auth")) {
        next('/login');
    } else {
        next();
    }

})



export default router;