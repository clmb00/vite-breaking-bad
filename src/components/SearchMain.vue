<script>

import {store} from '../data/store'

export default{
  name: 'SearchMain',
  data(){
    return{
      store
    }
  },
  methods:{
    nameFilter(){
      store.movieFilter = "";
      this.$emit('filterResults');
    },
    movieFilter(){
      store.nameFilter = "";
      this.$emit('filterResults');
    },
    reset(){
      store.nameFilter = '';
      store.movieFilter = '';
      this.$emit('filterResults');
    }
  }
}
</script>

<template>

  <div id="filter-bar" class="d-flex px-2 mt-5 mb-4">
    <select class="form-select" v-model="store.movieFilter" @change="movieFilter">
      <option value="" selected>Select Movie</option>
      <option value="Breaking Bad">Breaking Bad</option>
      <option value="Better Call Saul">Better Call Saul</option>
    </select>
    <h2>or</h2>
    <input class="form-input" v-model="store.nameFilter" @keydown.enter="nameFilter" placeholder="Search name" >
    <button class="btn btn-warning" @click="reset">Reset</button>
  </div>
  
</template>

<style lang="scss" scoped>

h2{
  color: white;
  margin-inline: 1rem;
}

select{
  width: 25%;
  margin-left: 10px;
}

input{
  width: 50%;
  margin-right: 30px;
  border-radius: 5px;
  padding-left: 10px;
}

button{
  width: 80px;
}

</style>