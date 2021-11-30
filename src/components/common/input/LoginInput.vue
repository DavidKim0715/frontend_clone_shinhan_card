<template>
  <ul class="id_pw_wrap" @change="$emit('user-info',user)">
    <li>
      <label class="id_label">email</label>
      <input
        class="id_line"
        placeholder="email"
        type="email"
        v-model="user.email"
        required
      />
    </li>
    <li>
      <label class="pwd_label">password</label>
      <input
        class="pw_line"
        placeholder="password"
        type="password"
        v-model="user.pwd"
        required
      />
    </li>
  </ul>
</template>

<script>
import { computed, defineComponent, onMounted, onUpdated, reactive, watch } from "vue";

const LoginInput = defineComponent({
  name: "LoginInput",
  components : {  },
  props :{},
  setup(props,){
    //variables
    const user= reactive({email : '', pwd: '' })

    const onEmail = computed(()=> this.user.email)
    const onPwd = computed(()=> this.user.pwd)
    //methods

    //life-cycle

    return { user, onEmail, onPwd} // template에 사용될 getter
  }
})
export default LoginInput
</script>
