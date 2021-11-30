<script lang="ts">
import { computed, defineComponent } from "vue";
import MenuButton from "@/components/common/button/MenuButton.vue";

const MobileHeader = defineComponent({
  name: "MobileHeader",
  components : { MenuButton  },
  props :{},
  emits : {},
  setup(props){
    //variables

    //methods

    //computed

    //life-cycle
    return {}
  }
})
export default MobileHeader
</script>
<template>
  <div class="mobile_inner">
    <menu-button />
  </div>
</template>
