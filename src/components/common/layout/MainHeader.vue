<template>
  <header-top />
  <header-body />
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import HeaderTop from "@/components/common/layout/HeaderTop.vue";
import HeaderBody from "@/components/common/layout/HeaderBody.vue";

const MainHeader = defineComponent({
  name: "MainHeader",
  components: { HeaderBody, HeaderTop },
  props: {},
  emits: {},
  setup(props) {
    //variables

    //methods

    //computed

    //life-cycle
    return {}
  },
});
export default MainHeader;
</script>
