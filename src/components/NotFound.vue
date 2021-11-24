<template>
  <div class="notFound">
    <span>
      <ion-icon name="ban-outline" class="bg-red"></ion-icon>
    </span>
    The path({{ $route.params.catchAll }}) do not exist
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.notFound {
  font-size: 10rem;
  span {
    color: red;
  }
}
</style>
