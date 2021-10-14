<template>
  <div class="container">
    <h1>Rick and Marty</h1>
    <FilterByStatus/>
    <FilterByName/>
    <ListCharacters/>
  </div>
</template>

<script>
import M from 'materialize-css'

import FilterByStatus from './components/FilterByStatus.vue'
import FilterByName from './components/FilterByName.vue'
import ListCharacters from './components/ListCharacters.vue'
export default {
  name: 'App',
  components: {
    ListCharacters,
    FilterByStatus,
    FilterByName
  },
  mounted () {
    M.AutoInit()
  },

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
