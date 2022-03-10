<template>
<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  <!-- <img class="w-full" :src="imageUrl" :alt="title"> -->
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 text-black">{{title}}</div>
    <p class="text-gray-700 text-base">
      {{description}}
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <router-link :to="{name:'DetailProject',params: { id: id }}" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Read more</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'itemProject',
  props: {
    id: Number,
    imageUrl: String,
    title: String,
    description: String,
  },
};
</script>
