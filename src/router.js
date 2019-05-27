import Vue from "vue";
import Router from "vue-router";

// Views
import Intro from "@/views/Intro";
import Start from "@/views/Start";
import Credits from "@/views/Credits";
import Schedule from "@/views/Schedule";
import Question from "@/views/Question";
import EndGrade from "@/views/EndGrade";
import EndGame from "@/views/EndGame";

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
        },
        {
            path: "/end-grade",
            name: "end-grade",
            component: EndGrade
        },
        {
            path: "/end-game",
            name: "end-game",
            component: EndGame
        }
    ]
});
