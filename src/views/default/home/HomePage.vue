<template>
  <section>
    <main-quick-menu />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainQuickMenu from "@/components/common/tab/MainQuickMenu.vue";
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
  },
});
export default HomePage;
</script>
