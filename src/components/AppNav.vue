<template>
  <ul class="flex items-center">
        <li>
            <router-link :to="{ name: 'home'}"  class="text-sm inline-block p-3 text-gray-800">Home</router-link>
        </li>
         <li>
            <a href=""  class="text-sm inline-block p-3 text-gray-800">Your files</a>
        </li>
      </ul>

      <ul class="flex items-center">
       <li>
            <a href=""  class="text-sm inline-block p-3 text-gray-800">Your accounts</a>
        </li>
        <li>
            <router-link :to="{ name: 'login'}" class="text-sm inline-block p-3 text-gray-800"> Sign in </router-link>
        </li>
      </ul>
</template>

<script>
export default {

}
</script>

<style>

</style>