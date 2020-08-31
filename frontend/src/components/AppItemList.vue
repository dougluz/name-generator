<template>
  <h5>{{ title }} <span class="bg-blue-700 rounded-md text-white px-1">{{ items.length }}</span></h5>
  <div class="bg-white rounded-lg p-3 shadow m-1">
    <div class="card-body">
      <ul class="divide-y divide-gray-400">
        <li class="py-1" v-for="item in items" :key="item">
          <div class="grid grid-cols-2">
            <div class="">
              {{ item }}
            </div>
            <div class="text-right">
              <button @click="deleteItem(item)" class="bg-red-600 rounded text-white px-1">
                <span class="fa fa-trash"></span>
              </button>
            </div>
          </div>
        </li>
      </ul>
      <br />
      <div class="flex flex-wrap items-stretch w-full mb-4 relative">
        <input v-model="state.item" @keyup.enter="addItem(state.item)" type="text" class="flex-shrink flex-grow flex-auto leading-normal w-px border h-10 border-grey-light rounded rounded-r-none px-3 relative" :placeholder="`Insira o item`">
        <div class="flex -mr-px">
          <button @click="addItem(state.item)" class="flex items-center leading-normal bg-blue-700 rounded rounded-l-none border border-l-0 border-grey-light px-3 whitespace-no-wrap text-white text-sm"><span class="fa fa-plus"></span></button>
        </div>	
      </div>	
    </div>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue'
export default {
  name: 'AppItemList',
  props: {
    items: Array,
    title: String
  },
  emits: ['addItem', 'deleteItem'],
  setup(_, context) {
    const state = reactive({
      item: ''
    })

    function deleteItem(item: string) {
      context.emit('deleteItem', item)
    }

    function addItem(item: string) {
      context.emit('addItem', item)
      state.item = ''
    }

    return { state, deleteItem, addItem }
  }

}
</script>
