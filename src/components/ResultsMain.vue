<script>

import CardResults from './CardResults.vue'

export default{
  name: 'ResultsMain',
  components: {
    CardResults
  }
}
</script>

<template>

  <div class="box p-5">
    <div class="how-many px-4 py-4">
      <p>Found 62 characters</p>
    </div>
    <div class="row results row-cols-3 row-cols-lg-5 g-2 g-lg-3">
      <CardResults />
    </div>
  </div>
  
</template>

<style lang="scss" scoped>

@use '../styles/partials/variables' as *;

.box{
  background-color: white;
}

.how-many{
  background-color: darken($primary-color, 20%);
  p{
    color: white;
    margin-bottom: 0;
    font-weight: bold;
    font-size: 1.1rem;
  }
}

.results{
  margin-top: 0px;
  margin-inline: 8px;
}

</style>