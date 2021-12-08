<template>
  <nav>
    <ul class="nav-box">
      <li v-for="(item) in items" :key="item.idx" >
        <router-link :to="item.url">
          {{item.name}}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import {defineComponent, toRefs} from "vue";
const HeaderUserMenu = defineComponent({
  name: "HeaderUserMenu",
  props: {
    items : {
      type : Array
    }
  },
  setup(props, context){
    let {items} = toRefs(props)
    return items
  }
});
export default HeaderUserMenu;
</script>
