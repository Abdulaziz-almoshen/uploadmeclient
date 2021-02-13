<template>
<div>
    <div class=" flex flex-col md:pr-10 mb-8  pr-0 w-full md:w-auto md:text-left text-center">
      <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">upload new files here </h2>
      <AppUploader></AppUploader>
    </div>
    <div>
        <template v-if="files.length">
        <AppFileList v-for="file in files" :key="file.uuis" :file="file"/>
        </template>
        <p class="text-gray-900" v-else>no files uploaded yet</p>
    </div>
</div>
  
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import AppFileList from  '../components/AppFilesList';
import AppUploader from '../components/AppUploader';
export default {
    components: {AppFileList,AppUploader},
    computed:{
        ...mapGetters({
            files: 'files/files'
        })
    },
    methods: {
        ...mapActions({
            getFile: 'files/getFiles'
        })
    }, 
    mounted(){
        console.log('fuck')
        this.getFile()
    }
}
</script>

<style>

</style>