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
        noticeDetailData: null,
        bidDetailData: null,
        bidUpdateData: null,
        pwdOrInfo: ''
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
        },
        setBidDetailData(state, data){
            state.bidDetailData = data;
        },
        setBidUpdateData(state, data){
            state.bidUpdateData = data;
        },
        updatePwdOrInfo(state, data){
            state.pwdOrInfo = data;
        }
    },
    getters: {
        CONSTANTS: state => {
            return state.constants
        }
    }
});
