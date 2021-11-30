<template>
  <section>
    <h2>홈페이지입니다</h2>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref,
  reactive,
  computed,
  toRefs,
  watch,
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted } from "vue";
import { useStore } from "vuex";
interface Pagination {
  currentPage: number
  totalPage: number
}
const state = reactive<Pagination>({
  currentPage: 1,
  totalPage: 0
})

const HomePage = defineComponent({
  name : 'HomePage',
  components:{
  },
})
export default HomePage
</script>
