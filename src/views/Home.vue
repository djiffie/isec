<template>
  <div class="home">
      <h1>Overzicht</h1>
      <img class="hoeveelheid" alt="hoeveelheid" src="../assets/hoeveelheid.png">
  </div>
</template>

<script>

export default {
  name: 'Home',
  
}
</script>

<style scoped>
  h1{
    color:#043c87;
    text-transform:uppercase;
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 30px;
    margin-left:5px;
  }
  .hoeveelheid{
    width: 1000px;
  }
  .home{
    padding-left: 100px;
    padding-top:100px;
  }
</style>
