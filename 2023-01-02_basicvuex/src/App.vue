<template>
  <div id="app">
    <travel-list></travel-list>
  </div>
</template>

<script>
import TravelList from './components/TravelList.vue'

export default {
  name: 'App',
  components: {
    'travel-list': TravelList
  }
}
</script>

<style>
</style>
