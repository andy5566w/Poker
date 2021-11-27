<template>
  <header :class="style.header">
    <ion-icon :class="style.icon" name="caret-forward-outline"></ion-icon>
    <button @click="isPopup = true" class="button is-primary mr-2">
      Sign Up
    </button>
  </header>

  <teleport to="#popup" v-if="isPopup">
    <Popup v-model="isPopup" />
  </teleport>
</template>

<script setup>
import Popup from "../components/Popup/Popup.vue";
import { ref } from "@vue/reactivity";
import style from "./Header.module.scss";
const isPopup = ref(false);
</script>
