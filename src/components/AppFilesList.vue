<template>
      <div class="flex justify-between items-cente border-b-2 border-purple-100">
          <div class="text-sm truncate overflow-ellipsis w-6/12">
          {{file.name}}
          </div>
          <div class="-mr-3 flex items-center inline-block text-sm  p-3 font-medium">
              <a class="mr-3 text-pink-700" href="#">Delete</a>
              <a class="text-blue-700" href="#">Share link</a>
          </div>

        </div>
</template>

<script>
export default {
  props: {
    file: {
      type: Object,
      required: false,
    },
  },
};
</script>

<style>
</style>