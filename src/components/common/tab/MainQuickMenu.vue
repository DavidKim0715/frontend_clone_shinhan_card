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
  <nav class="ly_inner" >
    <ul class="icon_list">
      <li>
        <router-link to="/" class="icon_box my_page_1">
          <strong class="icon_name" >월별명세서</strong>
        </router-link>
      </li>
      <li>
        <router-link to="/" class="icon_box my_page_2">
          <strong class="icon_name">이용내역</strong>
        </router-link>
      </li>
      <li>
        <router-link to="/" class="icon_box my_page_3">
          <strong class="icon_name">다음달결제예정</strong>
        </router-link>
      </li>
      <li>
        <router-link to="/" class="icon_box my_page_4">
          <strong class="icon_name">내가받은혜택</strong>
        </router-link>
      </li>
      <li>
        <router-link to="/" class="icon_box my_page_5">
          <strong class="icon_name">이용한도</strong>
        </router-link>
      </li>
      <li>
        <router-link to="/" class="icon_box my_page_6">
          <strong class="icon_name">이용금액결제</strong>
        </router-link>
      </li>
      <li>
        <router-link to="/" class="icon_box my_page_7">
          <strong class="icon_name">전자민원접수</strong>
        </router-link>
      </li>
      <li>
        <router-link to="/" class="icon_box my_page_8">
          <strong class="icon_name">카드신청</strong>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
