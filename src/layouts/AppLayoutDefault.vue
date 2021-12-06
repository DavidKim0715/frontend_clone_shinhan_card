<template>
  <header class="headerBg">
    <main-header />
    <main-search-bar />
    <main-carousel />
  </header>
  <main>
    <slot />
  </main>
  <footer-collection />
</template>

<script lang="ts">
import FooterCollection from "@/components/common/layout/FooterCollection.vue";
import MainHeader from "@/components/common/layout/MainHeader.vue";
import MainCarousel from "@/components/common/bar/MainCarousel.vue";
import MainSearchBar from "@/components/common/bar/MainSearchBar.vue";
import { defineComponent } from "vue";
const AppLayoutDefault = defineComponent({
  name: "AppLayoutDefault",
  components: {
    MainSearchBar,
    MainCarousel,
    MainHeader,
    FooterCollection,
  },
  setup(){
    return{}
  }
})
export default AppLayoutDefault
</script>
