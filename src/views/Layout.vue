<template>
  <div :class="style.layout">layout</div>
</template>

<script>
import style from "./Layout.module.scss";
import { getDocument } from "../js/index";
export default {
  async setup() {
    const data = await getDocument("cities", "BJ");
    console.log(data.data());

    await new Promise((res) => setTimeout(res, 125000));
    return { style };
  },
};
</script>

<style lang="scss" scoped></style>
