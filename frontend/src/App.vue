<template>
  <div class="">
    <div class="slogan text-center bg-white py-2">
      <h1 class="text-3xl">NameGator</h1>
      <br />
      <h6 class="text-sm text-gray-500">Gerador de nomes utilizando Vue.js, GraphQL e Node</h6>
    </div>
    <div class="main">
      <domain-list></domain-list>
    </div>
  </div>
</template>

<script lang="ts">
import DomainList from './components/DomainList.vue'

export default {
  name: 'App',
  components: {
    DomainList
  },
}
</script>

<style scoped>
.slogan {
  margin-top: 30px;
  margin-bottom: 30px;
}

.main {
  height: 100vh;
  padding: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
