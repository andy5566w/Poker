<template>
  <Popup ref="popupRef">
    <div class="container bg-gray-500 p-5 rounded-lg">
      <div class="columns">
        <div class="column">
          <div class="label">請輸入email</div>
          <input type="email" class="input" v-model="email" />
          <div v-if="isEmailValid" :class="style.error">信箱格式錯誤</div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="label">請輸入玩家名稱</div>
          <input type="text" class="input" v-model="name" />
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
          <div class="label">請再次輸入密碼</div>
          <input type="password" class="input" v-model="secondPassword" />
          <div v-if="isPasswordCorrespond" :class="style.error">密碼不一致</div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <button @click="handleSignUp" class="button is-primary is-pulled">Submit</button>
        </div>
      </div>
    </div>
  </Popup>
</template>

<script setup>
import style from '../Popup.module.scss'
import Popup from '../Popup.vue'
import Swal from 'sweetalert2'
import axios from 'axios'
import useFirebase from '../../../js/useFirebase'
import { ref, computed } from '@vue/reactivity'

const email = ref('')
const name = ref('player')
const password = ref('')
const secondPassword = ref('')
const { addDocument } = useFirebase()
const popupRef = ref(null)

const handleSignUp = async () => {
  try {
    const result = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
        import.meta.env.VITE_apiKey
      }`,
      { email: email.value, password: password.value, returnSecureToken: true }
    )
    if (result.status === 200) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Welcome~~',
        showConfirmButton: false,
        timer: 1500
      })
      await addDocument('users', result.data.email, {
        email: result.data.email,
        name: name.value
      })
      console.log(popupRef.value)
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Something shit happen`
      })
    }
  } catch (err) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${err.response.data.error.message}，please try again!`
    })
  }
}

const isPasswordCorrespond = computed(() => {
  if (secondPassword.value === '' && password.value === '') return false
  return secondPassword.value !== password.value
})
const isEmailValid = computed(() => {
  if (email.value === '') return false
  return !email.value.match(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
})
</script>

<style lang="scss" scoped>
</style>