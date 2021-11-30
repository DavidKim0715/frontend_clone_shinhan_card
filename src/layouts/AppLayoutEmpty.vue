<template>
  <header>
    <HeaderTop />
  </header>
  <slot />
</template>
<script lang="ts">
import HeaderTop from "@/components/common/layout/HeaderTop";
import { defineComponent } from "vue";
const AppLayoutEmpty = defineComponent({
  name: "AppLayoutEmpty",
  components : { HeaderTop },
  setup(){
    return {}
  }
})
export default AppLayoutEmpty
</script>
