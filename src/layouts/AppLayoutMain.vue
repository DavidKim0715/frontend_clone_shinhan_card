<template>
  <header>
    <header-top />
    <header-body />
  </header>
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
const AppLayoutMain = defineComponent({
  name : 'AppLayoutMain',
  components : {
    FooterCollection,
    HeaderBody,
    HeaderTop,
  },
  setup(){

    return{}
  }
})
export default AppLayoutMain
</script>
