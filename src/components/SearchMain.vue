<script>
export default{
  name: 'SearchMain'
}
</script>

<template>

  <div id="filter-bar" class="d-flex px-2 mt-5 mb-4">
    <h2>Filters: </h2>
    <select class="form-select">
      <option selected>Select Movie</option>
      <option value="1">Breaking Bad</option>
      <option value="2">Better Call Saul</option>
      <option value="3">Breaking Bad / Better Call Saul</option>
    </select>
    <select class="form-select">
      <option selected>Select Status</option>
      <option value="4">Alive</option>
      <option value="5">Deceased</option>
      <option value="6">Presumed dead</option>
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
  margin-left: 10px;
}

</style>