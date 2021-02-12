<template>
  <div class="w-full md:w-8/12 lg:w-6/12 mx:w-auto px-6 mt-6 md:mt-20">
    <header class="flex flex-wrap md:flex-nowrap items-center justify-between mb-6 -mx-3 -mt-3 ">
      <app-nav/>
    </header>
  <router-view/>    
  </div>
</template>

<script>
import AppNav from './components/AppNav'
export default {
  components:{AppNav}
}
</script>


