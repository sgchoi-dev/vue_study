<template>
  <div id="travellist-details">
    <p>{{this.$store.state.selectedCountry}} 여행 </p>
    <ul>
      <li v-for="item in filteredItems" :key="item.attraction">
        <span>도시 :  {{ item.city }}</span> &nbsp;
        <span>명소 :  {{ item.attraction }}</span> &nbsp;
        <span>요금 :  {{ item.entrance_fee }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  filters: {
    currency(value){
      return new Intl.NumberFormat("de-DE", {style: 'currency', currency: 'EUR'}).format(value);
    }
  },
  computed: {
    ...mapGetters(['filteredItems'])
    /*filteredItems(){
      // return this.$store.state.items.filter(item => {
      //   return item.country == this.$store.state.selectedCountry
      // })
      return this.$store.getters.filteredItems
    }*/
  }
}
</script>

<style>
  #travellist-details {color: white; background: teal; padding: 10px 20px;}
  #travellist-details ul {padding: 0; list-style-type: none;}
  #travellist-details li {margin: 10px; padding: 20px; background: #00695c;}
</style>