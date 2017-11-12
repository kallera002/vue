<template>
  <div>
    <h1>Register</h1>

    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="Email address"
    >

    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password "
    >
    <br>
      <div v-html="error" class="error"/>
    <br>

    <button @click="register">
      Register
    </button>
  </div>
</template>

<script>
import AuthenticationService from '@/service/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error{
  color:red;
}
</style>
