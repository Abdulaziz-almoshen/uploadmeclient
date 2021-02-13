<template>
    <h1 class="md:text-3xl text-2xl font-medium title-font text-gray-900">Uploader</h1>
    <input type="file" name="file" ref="file">
 
</template>

<script>
import * as FilePond from 'filepond';
export default {

mounted(){
    const pond = FilePond.create(this.$refs.file);
}

}
</script>

<style>

</style>