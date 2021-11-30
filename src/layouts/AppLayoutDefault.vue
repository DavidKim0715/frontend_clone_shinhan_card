<template>
  <header>
    <header-top />
    <header-body />
  </header>
  <search-bar />
  <main>
    <slot />
  </main>
  <footer-collection />
</template>

<script lang="ts">
import HeaderTop from "@/components/common/layout/HeaderTop.vue";
import HeaderBody from "@/components/common/layout/HeaderBody.vue";
import SearchBar from "@/components/common/bar/SearchBar.vue";
import FooterCollection from "@/components/common/layout/FooterCollection.vue";
export default {
  name : 'AppLayoutDefault',
  components : {
    FooterCollection,
    SearchBar,
    HeaderBody,
    HeaderTop,
  }
}
</script>
