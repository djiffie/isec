<template>
  <div class="reports">
      <h1>Overzicht meldingen</h1>
      <h2>Categoriën</h2>
      <div class="categories">
        <div :class="{ active: categories.includes('veiligheid') }" class="category" @click="toggle('veiligheid')">
          <img alt="Isec logo" src="../assets/veiligheid.png">
          <span>veiligheid</span>
        </div>
        <div :class="{ active: categories.includes('controle') }" class="category" @click="toggle('controle')">
          <img alt="controle" src="../assets/controle.png">
          <span>controle</span>
        </div>
        <div :class="{ active: categories.includes('informatie') }" class="category" @click="toggle('informatie')">
          <img alt="informatie" src="../assets/informatie.png">
          <span>informatie</span>
        </div>
      </div>
      <h2 class="meldingen">Meldingen</h2>
      <ul>
        <li class="report" v-for="report in filteredReports" :key="report.id" >
          <router-link :to="'/report/'+report.id">
            <img v-if="report.type === 'veiligheid'" alt="Melding" src="../assets/veiligheid.png">
            <img v-else-if="report.type === 'informatie'" alt="Melding" src="../assets/informatie.png">
            <img v-else alt="Melding" src="../assets/controle.png">
            {{report.description}} met het id: {{report.id}}
          </router-link>
        </li>
      </ul>
      <p v-if="filteredReports.length === 0">Er zijn geen meldingen gevonden met de huidige filters</p>
  </div>
</template>

<script>

import data from "../data/reports.json"

export default {
  name: 'Reports',
  methods: {
    toggle: function (category) {
      var index = this.categories.indexOf(category);
      if (index === -1) {
          this.categories.push(category);
      } else {
          this.categories.splice(index, 1);
      }
    }
  },
  data: function () {
    return {
      categories: ['veiligheid'],
      reports: data
    }
  },
  computed: {
    filteredReports: function () {
      let categories = this.categories;
      return this.reports.filter(function (report) {
          return categories.includes(report.type);
      })
    }
  }
}
</script>

<style scoped>
.meldingen{
  margin-bottom: 30px;
}
  .report{
    display: flex;
    align-items: center;
    height:50px;
    border-bottom: solid 1px grey;
  }
  .report:hover{
    background-color: #f2f2f2;
  }
  .report a{
    display: flex;
  }
  .report:last-child{
    border-bottom: none;;
  }
  .report img{
    width:30px;
    height:30px;
    margin-right: 5px;
  }
  .categories{
    display: flex;
  }
  .category{
    -webkit-user-select: none; /* Safari */        
-moz-user-select: none; /* Firefox */
-ms-user-select: none; /* IE10+/Edge */
user-select: none; /* Standard */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:300px;
    height: 175px;
    background-color: #f2f2f2;
    border-radius: 25px;
    margin:50px 25px 50px 0;
    color: #043c87;
    text-transform:uppercase;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
  }
  .category.active{
    background-color: #137afb;
    color: white;
  }
  .category img{
    width:100px;
    height:100px;
  }
  h1{
    color:#043c87;
    text-transform:uppercase;
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 30px;
  }
  h2{
    color:#043c87;
    text-transform:uppercase;
    font-weight: bold;
    font-size: 20px;
    background-color: #cecece;
    padding:10px 0;
    margin-bottom: 10px;
    padding-left: 20px;
    border-radius: 0 50px 50px 0;
    width:400px;
  }
  .reports{
    padding-left: 50px;
    padding-top:50px;
    padding-bottom: 100px;
  }
</style>
