//import Vue from 'vue'
import { createStore } from 'vuex'

//Vue.use(Vuex)

const store = createStore({
  strict: false,
  state: {
    items: [
      {country: "France", city: "Paris", attraction: "에펠탑", entrance_fee: 10},
      {country: "Italy", city: "Venezia", attraction: "산마르코 대성당", entrance_fee: 0},
      {country: "Austria", city: "Salzburg", attraction: "호엔잘쯔부르크성", entrance_fee: 15.20},
      {country: "Germany", city: "Frankfurt", attraction: "뢰머광장", entrance_fee: 0},
      {country: "Nederland", city: "Amsterdam", attraction: "국립미술관", entrance_fee: 17.50},
    ],
    selectedCountry: '',
  },
  getters: {
    items: state => {
      return state.items
    },
    filteredItems: state => {
      return state.items.filter(item => { return item.country == state.selectedCountry })
    }
  },
  mutations: {
    reducePrice: state => {
      //setTimeout(function(){
        state.items.forEach(item => {
          item.entrance_fee = (item.entrance_fee - (item.entrance_fee*0.2))
        })
      //}, 4000)
    },
    goCountry: (state, inCountry) => {
      state.selectedCountry = inCountry;
    }    
  },
  actions: {
    reducePrice:context => {
      setTimeout(function(){
        context.commit('reducePrice')
      }, 4000)
    },
    goCountry: (context, inCountry) => {
      context.commit('goCountry', inCountry)
    }    
  },
});

export default store;