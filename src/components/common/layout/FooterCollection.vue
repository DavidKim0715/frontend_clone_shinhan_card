<script lang="ts">
import { defineComponent } from "vue";

const FooterCollection = defineComponent({
  name: "FooterCollection",
  components: {},
  setup() {
    return {};
  },
});
export default FooterCollection;
</script>
<template>
  <footer class="footer_wrap">
    <ul class="tel_link_box">
    </ul>
    <ul class="customer_link_box">
      <router-link to="/">
        <li>회사소개</li>
      </router-link>
      <router-link to="/">
        <li>지배구조</li>
      </router-link>
      <router-link to="/">
        <li>투자정보</li>
      </router-link>
      <router-link to="/">
        <li>이용약관</li>
      </router-link>
      <router-link to="/">
        <li>고객권리 안내문</li>
      </router-link>
      <router-link to="/">
        <li>개인정보처리방침</li>
      </router-link>
      <router-link to="/">
        <li>위치기반서비스 이용약관</li>
      </router-link>
      <router-link to="/">
        <li>유료상품 이용현황</li>
      </router-link>
      <router-link to="/">
        <li>소비자보호포털</li>
      </router-link>
      <router-link to="/">
        <li>전자민원접수</li>
      </router-link>
      <router-link to="/">
        <li>사이버신문고</li>
      </router-link>
    </ul>
    <ul class="share_family_wrap"></ul>
  </footer>
</template>
