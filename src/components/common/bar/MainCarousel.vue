<template>
  <router-link v-for="item in items" :key="item.idx" :to="item.url">
    <img :alt="item.desc" class='swiper_banner_img' :src="item.src"/>
  </router-link>
  <direction-box :data="items" />
</template>

<script lang="ts">
import {defineComponent} from "vue";
import DirectionBox from "@/components/common/box/DirectionBox.vue";


const MainCarousel = defineComponent({
  name: "MainCarousel",
  components: {DirectionBox   },

  setup(props) {
    const items =[
      {idx : 0, src : require("@/assets/logo.png"), desc : '설명1', url: '/signIn'},
      {idx : 1, src :  require("@/assets/logo.png"), desc : '설명2', url: '/finance'},
    ]
    return {items}
  },
});
export default MainCarousel;
</script>
