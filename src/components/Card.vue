<template>
  <div class="space-y-6">
      <img class="mx-auto h-40 w-40 rounded-full border-2 border-green-600 p-10" :src="img" alt="">
      <div class="space-y-2">
        <div class="text-lg leading-6 font-medium space-y-1">
          <h3 class="text-green-600 text-lg font-family: Roboto-sans-serif font-medium text-center">{{ name }}</h3>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    name: String,
    img: String
  }
}
</script>
