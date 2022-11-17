<script>
export default{
  name: 'HeaderApp'
}
</script>

<template>

  <header class="d-flex align-items-center">
    <div class="logo mx-4">
      <img src="/Breaking_Bad_logo.svg" alt="Breaking Bad Logo">
    </div>
    <h1>Breaking Bad Api</h1>
  </header>

</template>

<style lang="scss" scoped>

@use '../styles/partials/variables' as *;

header{
  height: 100px;
  background-color: white;
  box-shadow: 0px 0px 5px 3px black;
  .logo{
    height: 80%;
    img{
      max-width: 100%;
      max-height: 100%;
    }
  }
  h1{
    font-weight: bold;
    font-size: 3rem;
    color: darken($primary-color, 5%);
  }
}

</style>