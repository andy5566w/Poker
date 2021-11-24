<script setup>
import Layout from "./views/Layout.vue";
import Header from "./views/Header.vue";
import SideBar from "./views/SideBar.vue";
</script>

<template>
  <Header />
  <SideBar />
  <Suspense>
    <template #default>
      <Layout />
    </template>
    <template #fallback>
      <span><ion-icon name="reload-outline"></ion-icon></span>
    </template>
  </Suspense>
</template>

<style>
#app {
  min-height: 100vh;
}
</style>
