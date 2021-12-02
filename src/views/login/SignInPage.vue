<template>
  <section>
    <form class="login_wrap" @submit.prevent="submitLogin">
      <login-field @user-info="getUserInfo" />
    </form>
  </section>
</template>

<script>
import { computed, defineComponent, reactive, toRefs, watch } from "vue";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("auth");

import LoginField from "@/components/common/input/LoginField";

const SignInPage = defineComponent({
  name: "SignInPage",
  components: { LoginField },
  props: {},
  computed: {
    ...mapGetters({
      getLoginStatus: "getLoginStatus",
    }),
  },
  methods: {
    ...mapActions({
      actionLogin: "LOGIN",
    }),
  },
  setup(props) {
    //variables
    let userInfo = null;

    const getUserInfo = (info) => {
      userInfo = info;
    };
    const submitLogin = async () => {
      await this.actionLogin(userInfo);
      if (this.getLoginStatus === "success") {
        window.alert("로그인에 성공하셨습니다");
      } else {
        window.alert("로그인에 실패하셨습니다");
      }
    };

    //life-cycle
    return { userInfo, getUserInfo, submitLogin };
  },
});
export default SignInPage;
</script>
