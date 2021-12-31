<template>
  <Popup>
    <div class="container bg-gray-500 p-5 rounded-lg">
      <div class="columns">
        <div class="column">
          <div class="label">請輸入email</div>
          <input type="email" class="input" v-model="email" />
          <div v-if="isEmailValid" class="has-text-danger">信箱格式錯誤</div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="label">請輸入密碼</div>
          <input type="password" class="input" v-model="password" />
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <button @click="handleSignUp" class="button is-primary is-pulled">
            Submit
          </button>
        </div>
      </div>
    </div>
  </Popup>
</template>

<script setup>
import Popup from "../Popup.vue";
import { ref } from 'vue'
import { computed } from "@vue/reactivity";
import useFirebase from '../../../js/useFirebase'

const password = ref('')
const email = ref('')
const {firebaseSignIn} = useFirebase()



const handleSignUp = () => {
  if (email.value && password.value) {
    firebaseSignIn(email,password)
  }
}

const isEmailValid = computed(() => {
  if (email.value === "") return false;
  return !email.value.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
});

</script>

<style scoped>

</style>