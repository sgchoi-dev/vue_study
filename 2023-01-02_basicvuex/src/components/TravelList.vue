<template>
  <div id="travel-list">
    <p>유럽여행</p>
    <ul>
      <li v-for="item in items" :key="item.attraction" @click="goCountry(item.country)">
        <span>국가 : {{ item.country }}</span> &nbsp;
        <span>도시 : {{ item.city }}</span> &nbsp;
        <span>명소 : {{ item.attraction }}</span> &nbsp;
        <span>요금 : {{ item.entrance_fee }}</span> &nbsp;
      </li>
    </ul>
    <button @click="reducePrice">특별 입장료 할인</button>
    <travellist-details></travellist-details>
  </div>
</template>

<script>
import TravelListDetails from './TravelListDetails'
import { mapActions } from 'vuex'
//import { mapMutations } from 'vuex'

export default {
  components: {
    'travellist-details': TravelListDetails
  },
  methods: {
    //...mapMutations(['reducePrice']),
    //...mapMutations(['goCountry']),
    ...mapActions(['reducePrice']),
    ...mapActions(['goCountry']),

    /*goCountry(inValue){
      //this.$store.state.selectedCountry = inValue
      
      //this.$store.commit('goCountry', inValue);

      //this.$store.dispatch('goCountry', inValue);
      
    },
    reducePrice(){
      // this.$store.state.items.forEach(item => {
      //   item.entrance_fee = (item.entrance_fee - (item.entrance_fee*0.2))
      // })

      //this.$store.commit('reducePrice')

      this.$store.dispatch('reducePrice');
    }*/
  },
  filters: {
    currency(value){
      return new Intl.NumberFormat("de-DE", {style: 'currency', currency: 'EUR'}).format(value)
    }
  },
  computed: {
    items(){
      return this.$store.getters.items
    }
  }
}
</script>

<style>
  #travel-list {color: white; background: blue; padding: 10px 20px;}
  #travel-list ul {padding: 0; list-style-type: none;}
  #travel-list li {margin: 10px; padding: 20px; background: #1565c0;}
</style>