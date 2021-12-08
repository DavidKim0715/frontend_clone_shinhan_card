<template>
  <div class="top_inner">
    <header-user-menu :items="userCategory"/>
    <header-user-menu :items="loginCategory"/>
  </div>
</template>
<script lang="ts">
import {computed, defineComponent, reactive} from "vue";
import HeaderUserMenu from "@/components/common/bar/HeaderUserMenu.vue";

const HeaderTop = defineComponent({
  name: "HeaderTop",
  components: {HeaderUserMenu},
  props: {},
  emits: {},
  setup(props) {
    //variables
    const userCategory = [
      {
        idx: 0,
        name : '개인',
        url : '/'
      },
      {
        idx: 1,
        name : '법인',
        url : '/'
      },
      {
        idx: 2,
        name : '가맹점',
        url : '/'
      }
    ]
    const loginCategory = [
      {
        idx: 0,
        name : '로그인',
        url : '/signIn'
      },
      {
        idx: 1,
        name : '회원가입',
        url : '/signUp'
      },
      {
        idx: 2,
        name : '아이디찾기',
        url : '/'
      }
    ]
    //methods

    //computed

    //life-cycle
    return {userCategory, loginCategory};
  },
});
export default HeaderTop;
</script>

