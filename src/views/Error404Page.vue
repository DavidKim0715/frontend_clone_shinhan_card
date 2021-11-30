<template>
  <router-link to="/">
    <strong>
      <mark>oops... blackout</mark>
    </strong>
  </router-link>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";

const Error404Page = defineComponent({
  name: "Error404Page",
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
    return {}
  }
})
export default Error404Page
</script>
