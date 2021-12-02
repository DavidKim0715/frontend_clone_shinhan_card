<template>
  <section class="main_content">
    <main-search-bar />
    <main-carousel />
  </section>
  <section>
    <main-quick-menu />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainSearchBar from "@/components/common/bar/MainSearchBar.vue";
import MainCarousel from "@/components/common/bar/MainCarousel.vue";
import MainQuickMenu from "@/components/common/bar/MainQuickMenu.vue";
// interface Pagination {
//   currentPage: number
//   totalPage: number
// }
// const state = reactive<Pagination>({
//   currentPage: 1,
//   totalPage: 0
// })

const HomePage = defineComponent({
  name: "HomePage",
  components: {
    MainQuickMenu,
    MainCarousel,
    MainSearchBar,
  },
});
export default HomePage;
</script>
