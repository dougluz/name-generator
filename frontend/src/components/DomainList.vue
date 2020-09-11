<template>
  <div class="">
    <div class="container mx-auto">
      <div class="grid md:grid-cols-2 sm:grid-cols-1 p-3 gap-4">
        <div>
          <AppItemList title="Prefixos" @addItem="addPrefix" @deleteItem="deletePrefix" :items="state.prefixes" />
        </div>
        <div>
          <AppItemList title="Sufixos" @addItem="addSufix" @deleteItem="deleteSufix" :items="state.sufixes" />
        </div>
      </div> 
      <div class="grid md:grid-cols-1 sm:grid-cols-1 p-3 gap-4">
        <div>
          <h5>Dominios <span class="bg-blue-700 rounded-md text-white px-1">{{ domains.length }}</span></h5>
          <div class="bg-white rounded-lg p-3 shadow m-1">
            <ul class="divide-y divide-gray-400">
              <li class="py-1" v-for="domain in domains" :key="domain.name">
                <div class="grid grid-cols-2">
                  <div class="">
                    {{ domain.name }}
                  </div>
                  <div class="text-right">
                    <a :href="domain.checkout" target="_blank" class="bg-green-700 rounded px-1 text-white hover:scale-110 transition ease-in-out duration-150 transform">
                      <span class="fa fa-shopping-cart"></span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import 'font-awesome/css/font-awesome.css'
import { Domain } from '../@types/domains'
import { reactive, toRef, onMounted, computed } from 'vue'
import AppItemList from './AppItemList.vue'

export default {
  name: 'DomainList',
  components: {
    AppItemList
  },
  setup() {
    const state = reactive({
      prefixes: ['Air', 'Jet', 'Flight'],
      sufixes: ['Hub', 'Station', 'Mart'],
    })
    
    function addPrefix(prefix: string) {
      state.prefixes.push(prefix)
    }

    function deletePrefix(prefix: string) {
      state.prefixes.splice(state.prefixes.indexOf(prefix), 1)
    }

    function addSufix(sufix: string) {
      state.sufixes.push(sufix)
    }

    function deleteSufix(sufix: string) {
      state.sufixes.splice(state.sufixes.indexOf(sufix), 1)
    }

    const domains = computed((): Array<Domain> => {
      const domains = []
      state.prefixes.forEach(prefix => {
        state.sufixes.forEach(sufix => {
          const name = prefix + sufix
          const checkout = `https://checkout.hostgator.com.br/?a=add&sld=${ name.toLowerCase() }&tld=.com.br`
          domains.push({
            name,
            checkout
          })
        })
      })
      return domains
    })

    return { state, addPrefix, addSufix, deletePrefix, deleteSufix, domains }
  }
}
</script>

<style scoped>
</style>
