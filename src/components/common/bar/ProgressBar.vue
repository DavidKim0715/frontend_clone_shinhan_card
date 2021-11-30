<template>

</template>

<script>

import { computed, defineComponent, reactive, toRefs } from "vue";

const ProgressBar = defineComponent({
  name: "ProgressBar",
  components : {  },
  props :{},
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
export default ProgressBar
</script>
