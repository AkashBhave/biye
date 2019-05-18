import Vue from "vue";
import Router from "vue-router";

// Views
import Intro from "@/views/Intro.vue";
import Start from "@/views/Start.vue";
import Credits from "@/views/Credits.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "intro",
            component: Intro
        },
        {
            path: "/start",
            name: "start",
            component: Start
        },
        {
            path: "/credits",
            name: "credits",
            component: Credits
        }
    ]
});
