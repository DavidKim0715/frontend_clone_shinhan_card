<template>
  <header class="headerBg" :class="isActive">
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
import { computed, defineComponent } from "vue";
const AppLayoutDefault = defineComponent({
  name: "AppLayoutDefault",
  components: {
    MainSearchBar,
    MainCarousel,
    MainHeader,
    FooterCollection,
  },
  setup(){
    let idx = 0
    const isActive = computed(()=>{
      return`bg_${(++idx)%7}`
    })
    return{isActive}
  }
})
export default AppLayoutDefault
</script>
