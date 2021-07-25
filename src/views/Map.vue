<template>
  <div class="map" >
      <h1>Kaart overzicht</h1>
      
      <Report v-for="report in reports" 
        :key="report.id" 
        :x="report.x" 
        :y='report.y'
        :id='report.id'
        :active="activeReport.id === report.id"
        :type="report.type"
        :status="report.status"
        :prio="report.prio" 
        @reportClicked="onClicked"/>

      <div v-if="activeReport.id" class="details">
        <div class="locatie">
          <h2>locatie</h2>
          <p>
            3078 Broadway, New York, <br />
            NY 100025, Verenigde Staten
          </p>
        </div>

        <div class="info">
          <h2>info</h2>
          <ul>
            <li><span>Type:</span> {{activeReport.type}}</li>
            <li><span>Status:</span> {{activeReport.status}}</li>
            <li><span>Prioriteit:</span> {{activeReport.prio}}</li>
          </ul>
          <router-link to="/report"><span class="meer-info">Meer info<ChevronRightIcon /></span></router-link>
        </div>
      </div>

  </div>
</template>

<script>
import { ChevronRightIcon } from 'vue-feather-icons';
import Report from '../components/Report.vue';

export default {
  name: 'Map',
  components: {
    ChevronRightIcon,
    Report,
  },
  methods: {
    onClicked: function (report) {
      console.log(report);
      this.activeReport = report;
    }
  },
  data: function () {
    return {
      activeReport: {},
      reports: [
        {
          id: 1,
          type: "veiligheid",
          status: "open",
          prio: "laag",
          x: "450px",
          y: "350px",
          active: false
        },
        {
          id: 2,
          type: "informatie",
          status: "open",
          prio: "hoog",
          x: "550px",
          y: "300px",
          active: false
        },
        {
          id: 3,
          type: "controle",
          status: "open",
          prio: "laag",
          x: "750px",
          y: "350px",
          active: false
        },
        {
          id: 4,
          type: "controle",
          status: "open",
          prio: "hoog",
          x: "450px",
          y: "950px",
          active: false
        },
        {
          id: 5,
          type: "informatie",
          status: "open",
          prio: "laag",
          x: "525px",
          y: "750px",
          active: false
        },
        {
          id: 6,
          type: "veiligheid",
          status: "open",
          prio: "hoog",
          x: "666px",
          y: "666px",
          active: false
        }
      ]
    }
  },
}
</script>

<style scoped>
.details{
  position: absolute;
  right:100px;
  top:100px;
}
 h1{
    color:#043c87;
    background-color: rgba(255, 255, 255, 0.6);
    text-transform:uppercase;
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 30px;
    margin-left:5px;
    padding:5px 10px;
    width:450px;
  }
  .map{
    padding-left: 50px;
    padding-top:40px;
    padding-bottom: 100px;
    background-image: url("../assets/map.jpg");
    width:100%;
    height:100vh;
  }

  .locatie{
    width:450px;
    height:125px;
    background-color: #137afb;
    border-radius: 15px;
    position: relative;
    padding-left: 175px;
    padding-top:38px;
    color: white;
    margin-bottom: 30px;
  }
  .locatie h2{
    position: absolute;
    top: 38px;
    left:0;
    color:white;
    text-transform:uppercase;
    font-weight: bold;
    font-size: 20px;
    padding:10px 20px;
    background-color: #043c87;
    border-radius: 0 25px 25px 0;
  }

  .info{
    position: relative;
    width:450px;
    border-radius: 15px;
    background-color: white;
    border: solid 1px grey;
    padding-top:100px;
    padding-bottom: 50px;
  }

    .info h2{
    position: absolute;
    top: 38px;
    left:-1px;
    color:white;
    text-transform:uppercase;
    font-weight: bold;
    font-size: 20px;
    padding:10px 20px;
    background-color: #043c87;
    border-radius: 0 25px 25px 0;
  }

  .info ul li{
    background: #cecece;
    padding:10px;
    margin-bottom: 10px;
    color: #043c87;
  }
  .info ul li span{
    color: #137afb;
    font-weight: bold;
  }
  .info ul{
    margin: 10px 20px;
  }

  .meer-info{
    position: absolute;
    right:0;
    bottom:0;
    display: flex;
    color: #043c87;
    align-items: center;
    font-weight: bold;
  }
  .meer-info svg{
    color: #137afb;
    height: 50px;
    width:50px;
  }

  .meer-info:hover{
   text-decoration: underline;
  }


</style>
