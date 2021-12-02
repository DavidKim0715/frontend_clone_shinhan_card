<script lang="ts">
import { defineComponent } from "vue";
import MobileHeader from "@/components/common/layout/MobileHeader.vue";
const AppLayoutMobile = defineComponent({
  name: "AppLayoutMobile",
  components: { MobileHeader },
  setup() {
    return {};
  },
});
export default AppLayoutMobile;
</script>
<template>
  <header>
    <MobileHeader />
  </header>
  <slot />
</template>
