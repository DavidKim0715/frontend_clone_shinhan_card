<template>
  <div class="bx_direction_wrapper">
    <a class="bx_prev">Prev</a>
    <a class="bx_next">Next</a>
  </div>
</template>

<script>

import { computed, defineComponent } from "vue";

const DirectionBox = defineComponent({
  name: "DirectionBox",
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
export default DirectionBox
</script>
