<script setup>
import Layout from "./views/Layout.vue";
import Header from "./views/Header.vue";
import SideBar from "./views/SideBar.vue";
</script>

<template>
  <Header />
  <SideBar />
  <Layout />
</template>

<style>
:root {
  --header-heigh: 3rem;
  --layout-heigh: calc(100vh - var(--header-heigh));
  --primary-color: #74b3ff;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  min-height: 100vh;
}
</style>
