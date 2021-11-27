<template>
  <div :class="style.container">
    <span @click="handleClose" :class="style.closeIcon">
      <ion-icon name="close-circle-outline"></ion-icon>
    </span>
    <slot :handleClose="handleClose" />
  </div>
</template>

<script setup>
import style from "./Popup.module.scss";
import {
  onMounted,
  onUnmounted,
  defineProps,
  defineEmits,
} from "@vue/runtime-core";
const app = document.querySelector("#app");
const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: { type: Boolean, required: true },
});

const handleClose = () => {
  emit("update:modelValue", false);
};

onMounted(() => {
  app.classList.add("blur");
});

onUnmounted(() => {
  app.classList.remove("blur");
});
</script>

<style lang="scss" scoped></style>
