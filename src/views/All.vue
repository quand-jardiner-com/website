<template>
  <div>
    <ul class="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
      <li v-for="plant in plants">
        <Card :name="plant.name" :img="'https://icons-quand-jardiner.netlify.app/'+plant.url+'.png'"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import plants from '../assets/plant'

export default {
  name: 'Home',
  data() {
    return {
      plants: plants,
    }
  },
  components: {
    Card
  },
  computed:{

  }
}
</script>


<style>

</style>