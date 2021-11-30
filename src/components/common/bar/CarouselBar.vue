<template>
  <template
    v-for="(item, idx) in items"
    :key="idx"
  >
    <router-link :to="item.url">
      <img alt="item.desc" :src="item.src"/>
    </router-link>
  </template>
  <DirectionBox />
</template>

<script>
import { defineComponent, reactive } from "vue";
import DirectionBox from "../box/DirectionBox";

const CarouselBar = defineComponent({
  name: "CarouselBar",
  components : { DirectionBox },
  props:{
    items : Object
  },
  setup(props){
    const it = [
      {
        idx : 1,
        src : '',
        desc: '',
        url:''
      },
      {
        idx : 2,
        src : '',
        desc: '',
        url:''
      },
      {
        idx : 3,
        src : '',
        desc: '',
        url:''
      },
      {
        idx : 4,
        src : '',
        desc: '',
        url:''
      },
    ]

    return {it}
  }
})
export default CarouselBar
</script>
