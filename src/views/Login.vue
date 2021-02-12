<template>
  <div class="bg-green-400">
      <form action="" @submit.prevent="login">

          <button type="submit">login</button>
      </form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapActions} from 'vuex'

export default {
  methods: {
      ...mapActions({
          loginAction: 'auth/signIn'
      }),
      login(){
          this.loginAction({email:'ezekiel.collier@example.net', password: 'password' })
      }
  }
}
</script>
