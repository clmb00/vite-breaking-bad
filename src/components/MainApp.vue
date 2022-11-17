<script>

import SearchMain from "./SearchMain.vue";
import ResultsMain from "./ResultsMain.vue";

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