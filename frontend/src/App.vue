<template>
  <div class="">
    <div class="slogan text-center">
      <h1 class="text-3xl">NameGator</h1>
      <br />
      <h6 class="text-sm text-gray-500">Gerador de nomes utilizando Vue.js, GraphQL e Node</h6>
    </div>
    <div class="main">
      <div class="container mx-auto">
        <div class="grid md:grid-cols-2 sm:grid-cols-1 p-3 gap-4">
          <div>
            <h5>Prefixos <span class="bg-green-600 rounded-md text-white px-1">{{ state.prefixes.length }}</span></h5>
            <div class="bg-white rounded-lg p-3 shadow m-1">
              <div class="card-body">
                <ul class="divide-y divide-gray-400">
                  <li class="py-1" v-for="prefix in state.prefixes" :key="prefix">
                    {{ prefix }}
                  </li>
                </ul>
                <br />
                <div class="flex flex-wrap items-stretch w-full mb-4 relative">
                  <div class="flex -mr-px">
                    <input type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow" placeholder="Username">
                  </div>	
                  <span class="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">@</span>
                </div>	
                <input class="w-full p-2 border-2 rounded-md border-gray-400" type="text" placeholder="Digite o Prefixo">
              </div>
            </div>
          </div>
          <div>
            <h5>Sufixos <span class="bg-green-600 rounded-md text-white px-1">{{ state.sufixes.length }}</span></h5>
            <div class="bg-white rounded-lg p-3 shadow m-1">
              <ul class="divide-y divide-gray-400">
                <li class="py-1" v-for="sufix in state.sufixes" :key="sufix">
                  {{ sufix }}
                </li>
              </ul>
              <br />
              <input class="w-full p-2 border-2 rounded-md border-gray-400" type="text" placeholder="Digite o Sufixo">
            </div>
          </div>
        </div> 
        <div class="grid md:grid-cols-1 sm:grid-cols-1 p-3 gap-4">
          <div>
            <h5>Dominios <span class="bg-green-600 rounded-md text-white px-1">{{ state.domains.length }}</span></h5>
            <div class="bg-white rounded-lg p-3 shadow m-1">
              <ul class="divide-y divide-gray-400">
                <li class="py-1" v-for="domain in state.domains" :key="domain">
                  {{ domain }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import 'font-awesome/css/font-awesome.css'
import { reactive } from 'vue'

export default {
  name: 'App',
  setup() {
    const state = reactive({
      prefixes: ['Air', 'Jet', 'Flight'],
      sufixes: ['Hub', 'Station', 'Mart'],
      domains: ['AirHub', 'AirStation', 'AirMart', 'JetHub', 'JetStation', 'JetMart', 'FlightHub', 'FlightStation', 'FlightMart']
    })

    return { state }
  }
}
</script>

<style scoped>
.slogan {
  margin-top: 30px;
  margin-bottom: 30px;
}

.main {
  background-color: #f1f1f1;
  height: 100vh;
  padding: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
