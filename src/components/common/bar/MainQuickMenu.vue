<script lang="ts">
import { defineComponent } from "vue";

const MainQuickMenu = defineComponent({
  name: "MainQuickMenu",
  components: {

  },
  setup() {
    return {};
  },
});
export default MainQuickMenu;
</script>
<template>
  <nav>
    <ul class="main_quick_menu">
<!--      <template v-for="(item, idx) in items" :key="idx">-->
<!--        <li>-->
<!--          <router-link to="/" class="">-->
<!--            <strong class="icon_name">{{items.msg}}</strong>-->
<!--          </router-link>-->
<!--        </li>-->
<!--      </template>-->
      <li>
        <router-link to="/" class="">
          <strong class="icon_name">월별명세서</strong>
        </router-link>
      </li>
      <li>
        <router-link to="/" class="">
          <strong class="icon_name">이용내역</strong>
        </router-link>
      </li>
      <li>
        <router-link to="/" class="">
          <strong class="icon_name">다음달결제예정</strong>
        </router-link>
      </li>
      <li>
        <router-link to="/" class="">
          <strong class="icon_name">내가받은혜택</strong>
        </router-link>
      </li>
      <li>
        <router-link to="/" class="">
          <strong class="icon_name">이용한도</strong>
        </router-link>
      </li>
      <li>
        <router-link to="/" class="">
          <strong class="icon_name">이용금액결제</strong>
        </router-link>
      </li>
      <li>
        <router-link to="/" class="">
          <strong class="icon_name">전자민원접수</strong>
        </router-link>
      </li>
      <li>
        <router-link to="/" class="">
          <strong class="icon_name">카드신청</strong>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
