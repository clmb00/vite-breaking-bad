<script>

import SearchMain from "./SearchMain.vue";
import ResultsMain from "./ResultsMain.vue";

import {store} from '../data/store'

export default{
  name: 'MainApp',
  components: {
    SearchMain,
    ResultsMain
  },
  data(){
    return{
      store
    }
  },
  methods:{
    filterResults(){
      this.$emit('filterApi');
    }
  }
}
</script>

<template>

<main>
  
  <div class="container">
    <SearchMain @filterResults="filterResults"/>
    <ResultsMain />
  </div>

</main>
  
</template>

<style lang="scss" scoped>



</style>