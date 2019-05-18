import Vue from "vue";
import Router from "vue-router";

// Views
import Play from "./views/Play.vue";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "play",
            component: Play
        }
    ]
});
