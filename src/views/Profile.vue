<template>
  <div class="profile">
    <img alt="profiel" src="../assets/profile.png">
    <div class="info">
        <h2>Jane Doe</h2>
        <h3>Aangemaakte meldingen</h3>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Profile',
}
</script>

<style scoped>
  .profile{
    position: relative;
    height:100vh;
    width:1200px;
  }
  .profile img{
    position: absolute;
    left: 100px;
    top: 100px;
    width:1000px;
    height:auto;
  }
  .info{
    position: absolute;
    left:462px;
    top:323px;
  }
  h2{
    color:#043c87;
    text-transform:uppercase;
    font-weight: bold;
    border-bottom: solid 1px grey;
    width:625px;
    font-size: 30px;
    padding-bottom: 15px;
  }
  h3{
    color: #137afb;
    font-weight: bold;
    font-size: 20px;
    margin-top: 15px;
  }
</style>
