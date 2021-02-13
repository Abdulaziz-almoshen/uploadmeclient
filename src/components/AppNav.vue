<template>
  <ul class="flex items-center">
        <li>
            <router-link :to="{ name: 'home'}"  class="text-sm inline-block p-3 text-gray-800">Home</router-link>
        </li>
         <li>
            <router-link :to="{name: 'upload'}" href=""  class="text-sm inline-block p-3 text-gray-800">Your files</router-link>
        </li>
      </ul>

      <template v-if="!authenticated">
        <ul class="flex items-center">
         <li>
              <a href=""  class="text-sm inline-block p-3 text-gray-800">Account</a>
          </li>
          <li>
              <router-link :to="{ name: 'login'}" class="text-sm inline-block p-3 text-gray-800"> Sign in </router-link>
          </li>
        </ul>
      </template>
      <template v-if="authenticated">
        <ul class="flex items-center">
         <li>
              <a href=""  class="text-sm inline-block p-3 text-gray-800">Your accounts</a>
          </li>
          <li>
              <a href="#" @click.prevent="logout" class="text-sm inline-block p-3 text-gray-800"> Sign out </a>
          </li>
        </ul>
      </template>

</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {

  computed:{
    ...mapGetters({
      authenticated: 'auth/authenticated'
    })
  }, 
  methods:{
    ...mapActions({
      logoutAction: 'auth/logout'
    }),
    logout(){
      this.logoutAction()
    }
  }

}
</script>

<style>

</style>