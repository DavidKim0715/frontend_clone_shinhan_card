<template>
  <div class="swiper_direction_wrapper">
    <button type="button" class="swiper_btn_prev" role="button">

    </button>
    <button type="button" class="swiper_btn_next" role="button">

    </button>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
const DirectionBox = defineComponent({
  name: "DirectionBox",
  components: {},
  props: {
    data : Object
  },
  emits: {},
  setup(props) {

    //variables

    //methods

    //computed

    //life-cycle
    return {}; // template에 사용될 getter
  },
});
export default DirectionBox;
</script>

