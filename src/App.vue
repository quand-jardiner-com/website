<template>
  <div id="app">
    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div class="space-y-12">
          <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl mb-5">
            <h2 class="text-7xl font-extralight tracking-tight sm:text-7xl text-green-600">Quand faut-il jardiner ?</h2>
          </div>
            <span class="relative z-0 inline-flex shadow-sm rounded-md">
              <router-link to="/" type="button" class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                Tout
              </router-link>
              <router-link to="/Semis" type="button" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                Semis
              </router-link>
              <router-link to="/Recolte" type="button" class="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
                Recolte
              </router-link>
            </span>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
}
</style>
