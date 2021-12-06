<template>
  <main-header />
  <main>
    <slot />
  </main>
  <footer-collection />
</template>

<script lang="ts">
import HeaderTop from "@/components/common/layout/HeaderTop.vue";
import HeaderBody from "@/components/common/layout/HeaderBody.vue";
import FooterCollection from "@/components/common/layout/FooterCollection.vue";
import { defineComponent } from "vue";
import MainHeader from "@/components/common/layout/MainHeader.vue";
const AppLayoutMain = defineComponent({
  name: "AppLayoutMain",
  components: {
    MainHeader,
    FooterCollection,
  },
  setup() {
    return {};
  },
});
export default AppLayoutMain;
</script>
