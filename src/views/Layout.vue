<template>
  <div :class="style.layout">layout</div>
</template>

<script>
import style from "./Layout.module.scss";
import { getDocument } from "../js/index";
export default {
  async setup() {
    console.log("hjkl.,mnhjuiol");
    const data = await getDocument("cities", "BJ");
    console.log(data.data());
    return { style };
  },
};
</script>

<style lang="scss" scoped></style>
