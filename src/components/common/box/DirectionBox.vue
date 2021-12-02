<script lang="ts">
import { computed, defineComponent } from "vue";
const DirectionBox = defineComponent({
  name: "DirectionBox",
  components: {},
  props: {},
  emits: {},
  setup(props) {
    //variables
    const event = computed(() => {
      return 0;
    });
    //methods

    //computed

    //life-cycle
    return {}; // template에 사용될 getter
  },
});
export default DirectionBox;
</script>
<template>
  <div class="swiper_direction_wrapper">
    <button type="button" class="swiper_btn_prev" role="button">
      <!--  이미지 삭제 예정    -->
      <img src="@/assets/icon/ico-prev.png"/>
    </button>
    <button type="button" class="swiper_btn_next" role="button">
      <!--  이미지 삭제 예정    -->
      <img src="@/assets/icon/ico-prev.png" />
    </button>
  </div>
</template>
