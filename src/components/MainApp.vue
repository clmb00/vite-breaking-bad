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
  
  <div class="container">
    <SearchMain />
    <ResultsMain />
  </div>

</main>
  
</template>

<style lang="scss" scoped>



</style>