<script>
export default{
  name: 'CardResults'
}
</script>

<template>

<div class="col">

  <div class="my_card">
    <div class="img">
      <img src="#" alt="walter">
    </div>
    <h3>Walter White</h3>
    <p>Breaking Bad</p>
    <p>Alive</p>
  </div>
  
</div>
</template>

<style lang="scss" scoped>

@use '../styles/partials/variables' as *;

.my_card{
  background-color: $primary-color;
  height: 380px;
  padding: 15px;
  text-align: center;
  .img{
    width: 100%;
    img{
      max-width: 100%;
      max-height: 300px;
    }
  }
  h3{
    text-transform: uppercase;
    color: white;
    font-size: 1.2rem;
    font-weight: bold;
  }
  p{
    color: grey;
    &:first-of-type{
      font-size: 1.1rem;
      margin-bottom: 0;
    }
    &:last-of-type{
      font-weight: bold;
      font-size: .9rem;
    }
  }
}

</style>