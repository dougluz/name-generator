<template>
  <div class="">
    <div class="slogan text-center">
      <h1>NameGator</h1>
      <br />
      <h6 class="text-secondary">Gerador de nomes utilizando Vue.js, GraphQL e Node</h6>
    </div>
    <div class="main">
      <div class="container">
        <div class="row">
          <div class="col-md">
            <h5>Prefixos <span class="badge badge-info">0</span></h5>
            <div class="card">
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item" v-for="prefix in state.prefixes" :key="prefix">
                    {{ prefix }}
                  </li>
                </ul>
                <br />
                <input class="form-control" type="text" placeholder="Digite o Prefixo">
              </div>
            </div>
          </div>
          <div class="col-md">
            <h5>Sufixos <span class="badge badge-info">0</span></h5>
            <div class="card">
              <div class="card-body">
                <ul class="list-group">
                  <li class="list-group-item" v-for="sufix in state.sufixes" :key="sufix">
                    {{ sufix }}
                  </li>
                </ul>
                <br />
                <input class="form-control" type="text" placeholder="Digite o Sufixo">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import { reactive } from 'vue'

export default {
  name: 'App',
  setup() {
    const state = reactive({
      prefixes: ['Air', 'Jet', 'Flight'],
      sufixes: ['Hub', 'Station', 'Mart']
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
  padding: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
