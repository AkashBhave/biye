import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        character: {
            name: "",
            chineseName: "",
            color: ""
        },
        name: "",
        currentGrade: 7,
        currentScore: null,
        scores: [],
        classes: []
    },
    mutations: {},
    actions: {}
});
