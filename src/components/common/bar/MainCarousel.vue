<template>
<!--  <router-link to="/">-->
<!--    <img src="@/assets/logo.png" class="swiper_banner_img"/>-->
<!--  </router-link>-->
  <template v-for="(item, idx) in items" :key="idx">
    <router-link :to="item.url">
      <img alt="item.desc" class='swiper_banner_img' :src="item.src" />
    </router-link>
  </template>
  <direction-box />
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import DirectionBox from "@/components/common/box/DirectionBox";
import { ICarousel } from "@/config/rootInterface";


const MainCarousel = defineComponent({
  name: "MainCarousel",
  components: { DirectionBox  },
  setup(props) {
    const items = reactive<ICarousel>([])
    return {items}
  },
});
export default MainCarousel;
</script>
