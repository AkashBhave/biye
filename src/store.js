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
        currentGrade: null,
        gradesChinese: ["初一", "初二", "初三", "高一", "高二", "高三"],
        currentScore: null,
        scores: [],
        requiredScores: [10, 15, 20, 25, 30, 35, 40],
        classes: []
    },
    mutations: {},
    actions: {}
});
