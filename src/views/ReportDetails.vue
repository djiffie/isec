<template>
  <div class="report-details">
      <h1>Melding #{{id}}</h1>
      <div class="content">
        <div class="item">
          <img class="map" alt="map" src="../assets/map-small.png">
          <div class="details">
            <p><span class="label">Status</span> {{report.status}}</p>
            <div class="double">
              <div><span class="label">Type</span> {{report.type}}</div>
              <div><span class="label">Prioriteit</span> {{report.prio}}</div>
            </div>
            <p><span class="label">Locatie</span> 3078 Broadway, New York, 100025 VS
            <p class="description"><span class="label">Locatie</span><br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec nisl sed dui ornare dapibus. Vestibulum eget efficitur turpis. Aliquam auctor mattis massa id aliquet. In commodo elementum metus. 
              Integer cursus quam in purus accumsan, sed imperdiet dui aliquam. Fusce porttitor nulla sit amet lorem mattis, et cursus tortor iaculis.
            </p>
          </div>
        </div>
        <div class="item">
          <div class="media">
            <h2>media</h2>
            <img  alt="map" src="../assets/media1.jpg" @click="img = 1">
            <img alt="map" src="../assets/media2.jpg"  @click="img = 2">
            <img  alt="map" src="../assets/media1.jpg" @click="img = 1">
            <img alt="map" src="../assets/media2.jpg"  @click="img = 2">
          </div>
          <img class="reacties" alt="map" src="../assets/reacties.png">
        </div>
      </div>
    
    <div class="mask" v-if="img"  @click="img = null">
        <div class="container" v-if="img === 1">
          <XCircleIcon @click="img = null"/>
          <img src="../assets/media1.jpg">
        </div>
        <div class="container" v-if="img === 2">
          <XCircleIcon @click="img = null" />
          <img src="../assets/media2.jpg">
        </div>
    </div>
      

  </div>
</template>

<script>
import { XCircleIcon } from 'vue-feather-icons';
import data from "../data/reports.json"

export default {
  name: 'ReportDetails',
  components: {
    XCircleIcon
  },
  data: function () {
    return {
      id: this.$route.params.id,
      reports: data,
      img: null
    }
  },
  computed: {
    report: function () {
      let id = this.id;
      let result = {};
      this.reports.forEach(function(report) {
        if(String(report.id) === String(id)){
          result = report;
        }
      })
      return result;
    }
  }
}
</script>

<style scoped>
  .mask{
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    width:100vw;
    height:100vh;
    left:0;
    top:0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mask .container{
    height: 50%;
    width:fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .container img{
    height: 100%;
  }
  .container svg{
    fill: white;
    width:30px;
    height:30px;
    position: absolute;
    right:-15px;
    top:-15px;
    cursor: pointer;
  }
  .reacties{
    margin-top: 30px;
    widows: 100%;
  }
  .media{
    width: calc(100% - 5px);
    background-color: #ebebeb;
    border-radius: 15px;
    padding:20px;
    position: relative;
    padding-top: 60px;
    padding-bottom: 20px;
    display: flex;
  }
  .media img{
    width:100px;
    height:100px;
    margin-right: 15px;
    cursor: pointer;
  }
  .media h2{
    left: calc(50% - 75px);
    top: -15px;
    border-radius: 50px;
    width:150px;
    text-align: center;
    padding:10px 0;
    color: white;
    position: absolute;
    background-color:#043c87;
    text-transform:uppercase;
    font-weight: bold;
    font-size: 25px;
  }
  h1{
    color:#043c87;
    text-transform:uppercase;
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 30px;
    margin-left:5px;
  }
  .report-details{
    padding-left: 50px;
    padding-top:50px;
    padding-bottom: 100px;
  }
  .content{
    display: flex;
    flex-direction: row;
  }
  .content .item{
    width:500px;
    margin-right: 20px;
  }
  .map{
    width:100%;
    margin-bottom: 40px;
  }
  .details{
    width:100%;
    background-color: #ebebeb;
    border-radius: 15px;
    padding:20px;
  }
  .details p{
    background-color: #f7f7f7;
    padding:0 10px;
    display: flex;
    line-height: 40px;
  }
  .label{
    color: #137afb;
    font-weight: bold;
    margin-right: 5px;
  }
  .double{
    display: flex;
    gap: 20px;
  }
  .double > div{
    background-color: #f7f7f7;
    line-height: 40px;
    margin:15px 0;
    width:50%;
    padding: 0 10px;
  }
  .details p.description{
    margin-top: 15px;
    padding: 10px;
    display: block;
    line-height: 25px;
  }
</style>
