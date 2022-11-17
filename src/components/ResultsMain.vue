<script>

import CardResults from './CardResults.vue'
import LoaderResults from './LoaderResults.vue'

import {store} from '../data/store'

export default{
  name: 'ResultsMain',
  components: {
    CardResults,
    LoaderResults
  },
  data(){
    return{
      store
    }
  }
}
</script>

<template>

  <div class="box p-5 d-flex justify-content-center">
    <LoaderResults v-if="store.isLoading"/>
    <div v-else>
      <div class="how-many px-4 py-4">
        <p>Found {{store.counter}} characters</p>
      </div>
      <div class="row results row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2 g-lg-3">
        <CardResults v-for="char in store.characters" :key="char.char_id"  :img="char.img" :name="char.name" :category="char.category" :status="char.status" :birthday="char.birthday" :nickname="char.nickname" :portrayed="char.portrayed"/>
      </div>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>

@use '../styles/partials/variables' as *;

.box{
  background-color: white;
  margin-bottom: 100px;
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