import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import constants from "./constants";

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        loginInfo: {
            custType: '',
            custCode: '',
            custName: '',
            userId: '',
            userName: '',
            userAuth: '',
            token: ''
        },
        searchParams: {},
        isLoading: false,
        oauthNew: '',
        constants: constants,
        openDt:'',
        noticeDetailData: null
    },
    mutations: {
        searchParams(state, params) {
            state.searchParams = params
        },
        login(state, loginInfo) {
            state.loginInfo = loginInfo;
        },
        logout(state) {
            state.loginInfo = null;
            state.loginCctr = null;
        },
        loading(state) {
            state.isLoading = true;
        },
        finish(state) {
            state.isLoading = false;
        },
        setNoticeDetailData(state, data) {
            state.noticeDetailData = data;
        }
    },
    getters: {
        CONSTANTS: state => {
            return state.constants
        }
    }
});
