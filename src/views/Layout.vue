<template>
  <div :class="style.layout">
    <span>{{ isPopup }}</span>
    <button @click="isPopup = true">Test popup</button>
    <img
      src="https://images.unsplash.com/photo-1637633202454-9290de952bab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=738&q=80"
      alt=""
    />
  </div>

  <teleport to="#popup" v-if="isPopup">
    <Popup v-model="isPopup" />
  </teleport>
</template>

<script>
import style from "./Layout.module.scss";
import { getDocument } from "../js/index";
import Popup from "../components/Popup/Popup.vue";
import { ref } from "@vue/reactivity";
export default {
  components: { Popup },
  async setup() {
    const isPopup = ref(false);
    // const data = await getDocument("cities", "BJ");
    // console.log(data.data());
    return { style, isPopup };
  },
};
</script>

<style lang="scss" scoped></style>
