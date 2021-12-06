<template>
  <nav>
    <ul class="nav-box">
      <li class="nav-item">
        <router-link class="nav-link" to="/myInfo">마이</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/">혜택</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/">금융</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/">카드</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/">편의</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/">디지털</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/">라이프</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/">Tops Club</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/">고객센터</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
const MainNavBar = defineComponent({
  name: "MainNavBar",
});
export default MainNavBar;
</script>
