<template>
  <div :class="style.container">
    <span @click="handleClick" :class="style.closeIcon"
      ><ion-icon name="close-circle-outline"></ion-icon
    ></span>
    <div class="container bg-gray-500 p-5 rounded-lg">
      <div class="columns">
        <div class="column">
          <div class="label">請輸入玩家</div>
          <input type="text" class="input" v-model="title" />
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div ref="contenteditable" contenteditable @input="handleInput"></div>
        </div>
        <div class="column" v-html="html"></div>
      </div>

      <div class="columns">
        <div class="column">
          <button @click="save" class="button is-primary is-pulled">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import style from "./Popup.module.scss";
import { onMounted, onUnmounted, defineProps, defineEmits } from "@vue/runtime-core";
const app = document.querySelector("#app");

const props = defineProps({
  modelValue: { type: Boolean, required: true },
});

const emit = defineEmits(["update:modelValue"]);

const handleClick = () => {
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
