<script lang="ts">
import { computed, defineComponent } from "vue";
import MenuButton from "@/components/common/button/MenuButton.vue";
import PrevButton from "@/components/common/button/PrevButton.vue";
import SearchButton from "@/components/common/button/SearchButton.vue";

const MobileHeader = defineComponent({
  name: "MobileHeader",
  components: { SearchButton, PrevButton, MenuButton },
  props: {},
  emits: {},
  setup(props) {
    //variables

    //methods

    //computed

    //life-cycle
    return {};
  },
});
export default MobileHeader;
</script>
<template>
  <div class="mobile_inner">
    <prev-button />
    <h3 style="min-width: 700px">로그인</h3>
    <search-button />
    <menu-button />
  </div>
</template>
