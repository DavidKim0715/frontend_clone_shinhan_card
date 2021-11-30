<template>
  <section>
    <h2>Login</h2>
    <form class="login_wrap" @submit.prevent="submitLogin">
      <LoginInput @user-info="getUserInfo"/>
      <div class="btn_login_register_wrap" >
        <CommonButton
          msg="로그인"
          type="submit"
        />
        <CommonButton
          msg="가입하기"
        />
      </div>
    </form>
  </section>
</template>

<script>

import { computed, defineComponent, reactive, toRefs, watch } from "vue";
import { createNamespacedHelpers } from 'vuex';
const { mapGetters, mapActions } = createNamespacedHelpers("auth");

import LoginInput from "../../components/common/input/LoginInput";
import CommonButton from "../../components/common/button/CommonButton";


const SignInPage = defineComponent({
  name: "SignInPage",
  components : { CommonButton, LoginInput  },
  props :{},
  computed: {
    ...mapGetters({
      getLoginStatus : 'getLoginStatus'
    }),
  },
  methods :{
    ...mapActions({
      actionLogin : 'LOGIN',
    }),
  },
  setup(props){
    //variables
    let userInfo = null

    const getUserInfo = (info) =>{
      userInfo = info
    }
    const submitLogin = async () =>{
      await this.actionLogin(userInfo)
      if(this.getLoginStatus === 'success'){
        window.alert('로그인에 성공하셨습니다')
      }else{
        window.alert('로그인에 실패하셨습니다')
      }
    }

    //life-cycle
    return { userInfo, getUserInfo, submitLogin}
  }
})
export default SignInPage
</script>
