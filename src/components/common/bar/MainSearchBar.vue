<script lang="ts">
import { defineComponent } from "vue";
import SearchButton from "@/components/common/button/SearchButton.vue";

const MainSearchBar = defineComponent({
  name: "MainSearchBar",
  components: {
    SearchButton,
  },
  setup() {
    return {};
  },
});
export default MainSearchBar;
</script>
<template>
  <div class="main_search_wrap">
    <form>
      <input
        autocomplete="off"
        class="main_search"
        maxlength="200"
        placeholder="'신한플레이'를 검색해보세요"
        type="text"
      />
    </form>
    <search-button />
  </div>
</template>
