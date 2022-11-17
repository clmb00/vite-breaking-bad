<script>

import SearchMain from "../components/SearchMain.vue";
import ResultsMain from "../components/ResultsMain.vue";

export default{
  name: 'MainApp',
  components: {
    SearchMain,
    ResultsMain
  }
}
</script>

<template>

<main>
  
  <SearchMain />
  <ResultsMain />

</main>
  
</template>

<style>



</style>