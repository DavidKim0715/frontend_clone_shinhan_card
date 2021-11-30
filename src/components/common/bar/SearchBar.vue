<script lang="ts">
import { defineComponent } from "vue";

const SearchBar = defineComponent({
  name: "SearchBar",
  components : {

  },
  setup(){

    return {}
  }
})
export default SearchBar
</script>
<template>
  <div class="main_search">
    <form>
      <label>
        <input
          autocomplete="off"
          class=""
          type="text"
          maxlength="200"
          placeholder="'신한플레이'를 검색해보세요"
        />
      </label>
    </form>
    <button class="search_btn" type="button">
      <!--    <img />-->
    </button>
  </div>
</template>



