<template>
  <div>
    <div v-if="this.plants.length === 0" class="flex justify-center">
      <div class="rounded-md bg-blue-50 p-4 w-100">
        <div class="flex">
          <div class="flex-shrink-0">
            <svg class="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
            </svg>
          </div>
          <div class="ml-3 flex-1 md:flex md:justify-between">
            <p class="text-sm text-blue-700">
              Ho non ! Il n'y a pas de récolte pour le moment, continue d'arroser ton jardin ! 🌦
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <ul class="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
        <li v-for="plant in this.plants">
          <Card :name="plant.name" :img="'https://icons-quand-jardiner.netlify.app/'+plant.url+'.png'"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import {filteredPlant} from "@/mixins/filteredPlant";

export default {
  name: 'Reclte',
  data() {
    return {
      plants: filteredPlant.filter("harvest")
    }
  },
  components: {
    Card
  }
}

</script>