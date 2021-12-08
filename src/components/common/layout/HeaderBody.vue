<template>
  <div class="body_inner">
    <h1>
      <router-link to="/">
        <img
          src="@/assets/shinhancard_logo.png"
          alt="ShinhanCard"
        />
      </router-link>
    </h1>
    <main-nav-bar />
    <menu-button />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import MenuButton from "@/components/common/button/MenuButton.vue";
import MainNavBar from "@/components/common/bar/MainNavBar.vue";

const HeaderBody = defineComponent({
  name: "HeaderBody",
  components: { MainNavBar, MenuButton },
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
export default HeaderBody;
</script>
