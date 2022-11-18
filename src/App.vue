<script>

import HeaderApp from "./components/HeaderApp.vue";
import MainApp from "./components/MainApp.vue";
import axios from 'axios';

import {store} from './data/store';

export default{
  name: 'App',
  components: {
    HeaderApp,
    MainApp
  },
  methods:{
    callApi(){
      axios.get('https://www.breakingbadapi.com/api/characters', {
        params: {
          category: store.movieFilter,
          name: store.nameFilter
        }
      })
       .then((response) => {
        store.characters = response.data;
        store.isLoading = false;
       })
       .catch((error) => {
        console.log(error)
       })
    },
    filterApi(){
      store.isLoading = true;
      this.callApi()
    }
  },
  mounted(){
    this.callApi()
  }
}
</script>

<template>

  <HeaderApp />
  <MainApp @filterApi="filterApi"/>

</template>

<style lang="scss">

@import './styles/general.scss';

</style>
