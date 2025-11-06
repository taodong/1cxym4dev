import "./scss/style.scss"
import {createApp} from "vue"
import {createRouter, createWebHistory} from "vue-router"
import App from "/src/vue/stack/App.vue"
import HomePage from "/src/vue/content/pages/HomePage.vue"
import LicensePage from "/src/vue/content/pages/LicensePage.vue"
import PolicyPage from "/src/vue/content/pages/PolicyPage.vue"
import KnowledgePage from "./vue/content/pages/KnowledgePage.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
            props: {
                label: "Home",
                faIcon: "fa-solid fa-home",
                inPageNavbar: true,
                shouldAlwaysPreload: true,
                breadcrumbs: []
            }
        },

        {
            path: "/privacy-policy",
            name: "policy",
            component: PolicyPage,
            props: {
                label: "Privacy Policy",
                faIcon: "fa-solid fa-hammer",
                inPageNavbar: false,
                shouldAlwaysPreload: false,
                breadcrumbs: [
                    "/"
                ]
            }
        },

        {
            path: "/terms-of-service",
            name: "license",
            component: LicensePage,
            props: {
                label: "Terms of Service",
                faIcon: "fa-solid fa-copy",
                inPageNavbar: false,
                shouldAlwaysPreload: false,
                breadcrumbs: [
                    "/"
                ]
            }
        },

        {
            path: "/knowledge",
            name: "knowledge",
            component: KnowledgePage,
            props: {
                label: "Knowledge Base",
                faIcon: "fa-solid fa-book-open",
                inPageNavbar: false,
                shouldAlwaysPreload: false,
                breadcrumbs: [
                    "/"
                ]
            }
        },

        {
            path: "/:pathMatch(.*)*",
            redirect: "/"
        }
    ]
})

createApp(App).use(router).mount("#app")