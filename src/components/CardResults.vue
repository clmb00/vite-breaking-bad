<script>
export default{
  name: 'CardResults',
  props:{
    img: String,
    name: String,
    category: String,
    status: String,
    nickname: String,
    birthday: String,
    portrayed: String
  },
  data(){
    return{
      frontSide: true
    }
  }
}
</script>

<template>

<div class="col">

  <div class="my_card" v-if="frontSide" @click="frontSide = !frontSide">
    <div class="img">
      <img :src="img" :alt="name">
    </div>
    <h3>{{name}}</h3>
    <p>{{category}}</p>
    <p>{{status}}</p>
  </div>

  <div class="my_card" v-else @click="frontSide = !frontSide">
    <div class="img">
      <img :src="img" :alt="name">
    </div>
    <h3>"{{nickname}}"</h3>
    <p>Birth: {{birthday}}</p>
    <p>Actor: {{portrayed}}</p>
  </div>
  
</div>
</template>

<style lang="scss" scoped>

@use '../styles/partials/variables' as *;

.my_card{
  background-image: linear-gradient(
    $primary-color 20%,
    darken($primary-color, 5%) 90%
  );
  cursor: pointer;
  height: 410px;
  padding: 15px;
  text-align: center;
  .img{
    width: 100%;
    img{
      width: 100%;

      // Same height:
      height: 260px;
      object-fit: cover;
      // different height:
      // max-height: 280px;
    }
  }
  h3{
    text-transform: uppercase;
    color: white;
    font-size: 1.1rem;
    font-weight: bold;
    margin-block: 10px;
  }
  p{
    color: grey;
    &:first-of-type{
      margin-bottom: 0;
    }
    &:last-of-type{
      font-weight: bold;
      font-size: .8rem;
    }
  }
}

</style>