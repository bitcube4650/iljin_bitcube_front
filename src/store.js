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
        loginCctr: {
            cctrCd: '',
            cctrNm: '',
        },
        searchForm: {},
        isLoading: false,
        oauthNew: '',
        constants: constants,
        openDt:''
    },
    mutations: {
        searchForm(state, search) {
            state.searchForm = search
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
        register(state, oauthNew) {
            state.oauthNew = oauthNew;
        },
        updateLoginCctr(state, loginCctr) {
            state.loginCctr = loginCctr
        },
        updateOpenDt(state, openDt){
            this.state.openDt = openDt
        }
    },
    getters: {
        CONSTANTS: state => {
            return state.constants
        }
    }
});
