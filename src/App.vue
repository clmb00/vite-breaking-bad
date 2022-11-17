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
      axios.get('https://www.breakingbadapi.com/api/characters')
       .then((response) => {
        store.isLoading = true;
        store.characters = response.data;
        store.counter = store.characters.length;
        store.isLoading = false;
       })
       .catch((error) => {
        console.log(error)
       })
    }
  },
  mounted(){
    this.callApi()
  }
}
</script>

<template>

  <HeaderApp />
  <MainApp />

</template>

<style lang="scss">

@import './styles/general.scss';

</style>
