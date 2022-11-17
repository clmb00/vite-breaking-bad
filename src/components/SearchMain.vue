<script>
export default{
  name: 'SearchMain'
}
</script>

<template>

  <div id="filter-bar" class="d-flex px-2 mt-5 mb-4">
    <h2>Filters: </h2>
    <select class="form-select">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  
</template>

<style lang="scss" scoped>

h2{
  color: white;
  margin-right: 1rem;
}

select{
  width: 25%;
}

</style>