<template>
  <router-link to="/">
    <img src="@/assets/image/image__logo.png" class="swiper_banner_img"/>
  </router-link>
<!--  <template v-for="(item, idx) in items" :key="idx">-->
<!--    <router-link :to="item.url">-->
<!--      <img alt="item.desc" class='swiper_banner_img' :src="item.src" />-->
<!--    </router-link>-->
<!--  </template>-->
  <direction-box />
</template>

<script>
import { defineComponent } from "vue";
import DirectionBox from "@/components/common/box/DirectionBox";

const MainCarousel = defineComponent({
  name: "MainCarousel",
  components: { DirectionBox  },
  props: {
    items: Object,
  },
  setup(props) {
    return {};
  },
});
export default MainCarousel;
</script>
