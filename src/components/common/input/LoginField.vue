<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  onUpdated,
  reactive,
  watch,
} from "vue";
import {IUserLogin} from "@/config/rootInterface";

const LoginField = defineComponent({
  name: "LoginField",
  components: {},
  props: {},
  setup(props) {
    //variables
    const focusOnEmail = false;
    const focusOnPwd = false;
    const user: IUserLogin = reactive({ email: "", pwd: "" });

    const onEmail = computed(() => user.email);
    const onPwd = computed(() => user.pwd);

    //life-cycle

    return { user, onEmail, onPwd, focusOnEmail, focusOnPwd }; // template에 사용될 getter
  },
});
export default LoginField;
</script>

<template>
  <ul class="id_pw_wrap" @change="$emit('user-info', user)">
    <li>
      <label class="interaction id_label" :class="{ is_focus: focusOnEmail }">
        이메일을 입력하세요.
      </label>
      <input
        @blur="focusOnEmail = false"
        class="id_line"
        :class="{ is_focus: focusOnEmail }"
        @focus="focusOnEmail = true"
        minlength="8"
        maxlength="16"
        type="email"
        v-model="user.email"
        required
      />
    </li>
    <li>
      <label class="pwd_label">비밀번호를 입력하세요.</label>
      <input
        @blur="focusOnPwd = false"
        class="pw_line"
        @focus="focusOnPwd = true"
        type="isValidId"
        minlength="8"
        maxlength="20"
        v-model="user.pwd"
        required
      />
    </li>
  </ul>
</template>
