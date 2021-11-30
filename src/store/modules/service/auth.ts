import axios from "axios";
import jwtHelper from "@/utils/jwtHelper";

const host = "http://localhost:3000";

const auth = {
  namespaced: true,
  state: {
    authData: {
      token: "",
      refreshToken: "",
      tokenExpTm: "",
      email: "",
      password: "",
      username: "",
    },
    loginStatus: "",
  },
  getters: {
    //login 관련
    getLoginStatus(state : any){
      return state.loginStatus
    },
    isTokenActive(state : any){
      return state.authData.tokenExp? jwtHelper.isTokenAlive(state.authData.tokenExpTm) : false
    },
    getAuthData(state : any){
      return state.authData
    }
  },
  mutations: {
    setToken(state: any, data: any) {
      localStorage.setItem("access_token", data.accessToken)
      localStorage.setItem("refresh_token", data.refreshToken)

      const jwtDecodeVal = jwtHelper.jwtDecrypt(data.access_token)
      const newTokenData = {
        token: data.access_token,
        refreshToken : data.refresh_token,
        tokenExpTm: jwtDecodeVal.exp,
        email: jwtDecodeVal.email,
        password : jwtDecodeVal.password,
        username: jwtDecodeVal.username
      }
      state.authData = newTokenData
    },
    setLoginstatus(state : any, value : string){
      state.loginStatus = value
    }
  },
  actions: {
    async LOGIN({ commit } : {commit : any}, payload: any) {
      const res = await axios
        .post(`http://${host}/auth/login`, payload)
        .catch((err : any)=>{
          console.log(err)
      })
      if(res && res.data){
        commit("setToken", res.data)
        commit("setLoginStatus", "success")
      }else{
        commit("setLoginStatus", "failed")
      }
    }
  },
};
export default auth;
