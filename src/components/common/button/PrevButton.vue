<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

const PrevButton = defineComponent({
  name: "PrevButton",
  components: {},
  methods: {},
  props: {},
  setup() {
    const router = useRouter();
    const goBack = () => {
      router.go(-1);
    };
    return { goBack };
  },
});
export default PrevButton;
</script>
<template>
  <button class="btn_prev" @click="goBack" type="button">
    <img src="@/assets/icon/ico-prev.png" />
    <span class="blind">이전</span>
  </button>
</template>
