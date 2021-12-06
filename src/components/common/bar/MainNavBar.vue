<template>
  <nav>
    <ul class="nav-box">
      <li class="nav-item">
        <router-link class="nav-link" to="/myInfo">마이</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/benefit">혜택</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/finance">금융</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/card">카드</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/convenience">편의</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/digital">디지털</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/life">라이프</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/topsClub">Tops Club</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/cS">고객센터</router-link>
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
