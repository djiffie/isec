<template>
  <div class="home">
      <h1>Overzicht</h1>
      <img class="hoeveelheid" alt="hoeveelheid" src="../assets/hoeveelheid.png">
      <div class="more">
        <router-link to="/map"><img class="map" alt="map" src="../assets/map.png"></router-link>
        <router-link to="/reports"><img class="reports" alt="reports" src="../assets/reports.png"></router-link>
      </div>
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
    padding-left: 50px;
    padding-top:50px;
    padding-bottom: 100px;
  }
  .more{
    margin-top:50px;
    display: flex;
    padding:5px
  }
  .more img{
    width:483px;
  }
  .map{
    margin-right:30px
  }
</style>
