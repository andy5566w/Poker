<template>
  <div :class="style.layout"></div>
</template>

<script>
import style from "./Layout.module.scss";
export default {
  async setup() {
    return { style };
  },
};
</script>

<style lang="scss" scoped></style>
