<template>
  <header :class="style.header">
    <ion-icon :class="style.icon" name="caret-forward-outline"></ion-icon>
    <div>
      <button @click="isLogin = true" class="button is-primary mr-2">
        Sing in
      </button>
      <button @click="isPopup = true" class="button is-primary mr-2">
        Sign Up
      </button>
    </div>
  </header>

  <teleport to="#popup" v-if="isPopup">
    <SignUp v-model="isPopup" />
  </teleport>

  <teleport to="#popup" v-if="isLogin">
    <SingIn v-model="isLogin" />
  </teleport>
</template>

<script setup>
import SignUp from "../components/Popup/Signup/SignUp.vue";
import SingIn from '../components/Popup/SignIn/SignIn.vue'
import { ref } from "@vue/reactivity";
import style from "./Header.module.scss";
const isPopup = ref(false);
const isLogin = ref(false)
</script>
