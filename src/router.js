import Vue from "vue";
import Router from "vue-router";

// Views
import Intro from "@/views/Intro";
import Start from "@/views/Start";
import Credits from "@/views/Credits";
import Schedule from "@/views/Schedule";
import Question from "@/views/Question";

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
        },
        {
            path: "/schedule",
            name: "schedule",
            component: Schedule
        },
        {
            path: "/question",
            name: "question",
            component: Question
        }
    ]
});
