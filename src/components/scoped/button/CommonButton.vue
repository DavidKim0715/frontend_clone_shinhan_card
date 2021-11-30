<template>
  <button
    :type="type"
    class="btn_normal"
  >
    <span class="btn_text">{{msg}}</span>
  </button>
</template>

<script>

import { computed, defineComponent, reactive, toRefs } from "vue";

const CommonButton = defineComponent({
  name: "CommonButton",
  components : {  },
  props :{
    msg : String,
    type : String
  },
  emits : {},
  setup(props){
    //variables
    const event = computed(()=>{
      return 0
    })
    //methods

    //computed

    //life-cycle
    return {} // template에 사용될 getter
  }
})
export default CommonButton
</script>

<style scoped>

</style>
