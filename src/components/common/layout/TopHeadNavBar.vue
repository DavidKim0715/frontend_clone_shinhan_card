<script lang="ts">
import { computed, defineComponent, toRefs } from "vue";
import MenuButton from "@/components/common/button/MenuButton.vue";
import PrevButton from "@/components/common/button/PrevButton.vue";
import SearchButton from "@/components/common/button/SearchButton.vue";

const TopHeadNavBar = defineComponent({
  name: "TopHeadNavBar",
  components: {},
  props: {
    data: Object,
  },
  emits: {},
  setup(props) {
    //variables
    const items = toRefs(props);
    //methods

    //computed

    //life-cycle
    return { items };
  },
});
export default TopHeadNavBar;
</script>
<template>
  <ul class="top_inside">
    <template v-for="(item, idx) in items" :key="idx">
      <router-link to="item.url">
        <li>{{ item }}</li>
      </router-link>
    </template>
  </ul>
</template>
