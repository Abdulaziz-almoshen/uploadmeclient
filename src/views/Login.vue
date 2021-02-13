<template>
  <div class="bg-gray-100">
      <form action="" @submit.prevent="login">

    <div
      class="border-gray-300 border-0 leading-6 m-3 relative w-auto"
      style="quotes: auto; overflow-wrap: break-word;"
    >
      <label
        htmlfor="grid-password"
        class="border-solid box-border cursor-default block font-bold text-xs mb-3 py-2  text-gray-700 uppercase"
        style="line-height: 1.33333; quotes: auto; overflow-wrap: break-word;"
      >
        Email </label
      ><input
        type="email"
        v-model="form.email"
        placeholder="Email"
        class="bg-white rounded border-solid box-border cursor-text text-sm m-0 overflow-visible p-3 w-full shadow-xs text-gray-700 transition-all ease-linear"
        style="font-family: inherit; line-height: inherit; transition-duration: 0.15s; quotes: auto; overflow-wrap: break-word;"
      />
    </div>
    <div
      class="border-gray-300 border-0 leading-6 m-3 relative w-auto"
      style="quotes: auto; overflow-wrap: break-word;"
    >
      <label
        htmlfor="grid-password"
        class="border-solid box-border cursor-default block font-bold text-xs mb-3 py-2  text-gray-700 uppercase"
        style="line-height: 1.33333; quotes: auto; overflow-wrap: break-word;"
      >
        Password </label
      ><input
        type="password"
        v-model="form.password"
        placeholder="Password"
        class="bg-white rounded border-solid box-border cursor-text text-sm m-0 overflow-visible p-3 w-full shadow-xs text-gray-700 transition-all ease-linear"
        style="font-family: inherit; line-height: inherit; transition-duration: 0.15s; quotes: auto; overflow-wrap: break-word;"
      />
    </div>
    <div
      class="border-gray-300 border-0 leading-6"
      style="quotes: auto; overflow-wrap: break-word;"
    >
      <label
        class="border-solid box-border cursor-pointer inline-flex items-center text-gray-800"
        style="quotes: auto; overflow-wrap: break-word;"
        ><input
          id="customCheckLogin"
          type="checkbox"
          class="appearance-none bg-white border-gray-300 rounded border cursor-default inline-block flex-shrink-0 h-5 my-0 mr-0 ml-1 overflow-visible p-0 select-none align-middle w-5 transition-all ease-linear focus:border-blue-400 focus:shadow-xs"
          style="font-family: inherit; font-size: 100%; line-height: inherit; background-origin: border-box; transition-duration: 0.15s; quotes: auto; overflow-wrap: break-word;"
        /><span
          class="border-gray-300 border-0 cursor-pointer font-semibold text-sm ml-2 text-gray-700"
          style="line-height: 1.42857; quotes: auto; overflow-wrap: break-word;"
        >
          Remember me
        </span></label
      >
      
      <p class="m-2 text-gray-400 text-sm"> Not joined yet ? <a class="text-black" href="#">Sign Up</a></p>
    </div>
    <div
      class="border-gray-300 border-0 leading-6 mt-6 text-center"
      style="quotes: auto; overflow-wrap: break-word;"
    >
      <button
        type="submit"
        @click.prevent="login"
        class="bg-purple-700 bg-none rounded border-solid box-border cursor-pointer font-bold text-sm mt-0 ml-0 mr-1 mb-1 overflow-visible py-3 px-6 shadow-xs text-white uppercase w-full transition-all ease-linear hover:shadow-xs"
        style="font-family: inherit; line-height: inherit; appearance: button; outline: 0px; transition-duration: 0.15s; quotes: auto; overflow-wrap: break-word;"
      >
        Sign In
      </button>
    </div>

      </form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {mapActions,mapGetters} from 'vuex'

export default {
   data() {
       return {
           form:{
               email:'',
               password:''
           }
       }
   },

    computed:{
        ...mapGetters({
            user:'auth/user'
            }),
    },
  methods: {
      ...mapActions({
          loginAction: 'auth/signIn',

      }),
      async login(){
          await this.loginAction(this.form)
          this.$router.replace({name:'home'})
      }
  }
}
</script>
