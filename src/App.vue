<script setup>
import Header from "./views/Header.vue";
import SideBar from "./views/SideBar.vue";
</script>

<template>
  <Header />
  <SideBar />
  <Suspense>
    <template #default>
      <router-view />
    </template>
    <template #fallback>
      <span>
        <ion-icon name="reload-outline"></ion-icon>
      </span>
    </template>
  </Suspense>
</template>

<style lang="scss">
#app {
  min-height: 100vh;
  overflow: hidden;
  &.blur {
    filter: blur(20px);
  }
}
</style>
