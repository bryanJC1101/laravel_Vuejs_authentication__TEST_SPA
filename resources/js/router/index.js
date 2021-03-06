import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

import App from "../App";
import Login from "../views/Login";
import Register from "../views/Register";
import Dashboard from "../views/Dashboard";
import Profile from "../views/Profile";
import { CHECK_AUTH } from "../store/actions.type";

Vue.use(VueRouter);

const router = new VueRouter({
    // mode: 'history',
    routes: [
        {
            path: "/",
            redirect: "/home",
            component: App,
            children: [
                {
                    path: "/home",
                    name: "Home",
                    component: Dashboard,
                    meta: {
                        requiresAuth: true,
                        hideForAuth: false
                    }
                },
                // {
                //     path: "/profile",
                //     name: "Profile",
                //     component: Profile,
                //     meta: {
                //         requiresAuth: true,
                //         hideForAuth: false
                //     }
                // },
                {
                    path: "/home/:id",
                    name: "Profile",
                    component: Profile,
                    meta: {
                        requiresAuth: true,
                        hideForAuth: false
                    }
                }
            ]
        },
        {
            path: "/login",
            name: "login",
            component: Login,
            meta: {
                requiresAuth: false,
                hideForAuth: true
            }
        },
        {
            path: "/register",
            name: "register",
            component: Register,
            meta: {
                requiresAuth: false,
                hideForAuth: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next("/login");
    } else if (to.meta.hideForAuth && store.getters.isAuthenticated) {
        next("/");
    } else {
        next();
    }
});

router.beforeEach((to, from, next) =>
    Promise.all([store.dispatch(CHECK_AUTH)]).then(next)
);

export default router;
