<template>
  <div class="users">
      <h1>Gebruikers</h1>
      <img class="users-img" alt="users" src="../assets/users.png">
  </div>
</template>

<script>

export default {
  name: 'Users',
  
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
  .users-img{
    width: 1000px;
  }
  .users{
    padding-left: 100px;
    padding-top:100px;
  }
</style>
