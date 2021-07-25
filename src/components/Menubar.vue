<template>
  <div class="menubar">
      <div class="menu">
        <img alt="Isec logo" src="../assets/logo.png">
        <ul>
            <router-link to="/"><li :class="{ active: location === 'home' }"><HomeIcon />Home</li></router-link>
            <router-link to="/map"><li :class="{ active: location === 'map' }"><BarChart2Icon />Kaart overzicht</li></router-link>
            <router-link to="/reports"><li :class="{ active: location === 'reports' }"><MailIcon />Meldingen<span class="number">16</span></li></router-link>
            <router-link to="/users"><li :class="{ active: location === 'users' }"><UsersIcon />Gebruikers</li></router-link>
            <router-link to="/profile"><li :class="{ active: location === 'profile' }"><UserIcon />Profiel</li></router-link>
            <li @click="showLogout = true" class="logout" :class="{ active: location === 'logout' }"><LogOutIcon />Log Uit</li>
        </ul>
        <div class="mask" v-if="showLogout"  @click="showLogout = false">
          <div class="alert">
            <p>Weet je zeker dat je uit wilt loggen?</p>
            <div><button @click="showLogout = false">Ja</button>
            <button @click="showLogout = false">Nee</button></div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { HomeIcon, BarChart2Icon, MailIcon, UsersIcon, UserIcon, LogOutIcon} from 'vue-feather-icons';

export default {
  name: 'Menubar',
  components: {
    HomeIcon,
    BarChart2Icon,
    MailIcon,
    UsersIcon,
    UserIcon,
    LogOutIcon,
  },
  watch:{
    $route (){
        this.location = this.$route.name;
    }
  }, 
  data: function () {
    return {
      location: this.$route.name,
      showLogout: false
    }
  },
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
.alert{
  width: 300px;
  height: 200px;
  background-color: white;
  border-radius: 25px;
  display: flex;
  align-items: center;
  flex-direction:column;
  padding:40px;
  text-align: center;
  font-weight:bold;
}
.alert button{
  color: white;
  background-color: #043c87;
  width:60px;
  height: 30px;
  margin:20px;
    margin-top: 40px;
}
.alert button:hover{
  background-color: #137afb;
}
.menu{
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  left:0;
}
ul{
  width: 100%;
}
li{
  display: flex;
  height: 45px;
  align-items: center;
  padding-left: 30px;
  border-left: solid 3px #d9eafe;
  cursor: pointer;
  font-weight: bold;
}
li.active, li:hover{
  background-color: #cfe1f9;
  border-left: solid 3px #137afb;
  color: #137afb;
}

li svg{
  margin-right: 30px;
  color: #90929e;
}
li span{
  background-color: red;
  margin-left: 5px;
  border-radius: 16px;
  color:white;
  font-size:11px;
  font-weight: bold;;
  padding:0 5px;
}

  img{
    width:80%;
  }
 .menu{
     background-color: #d9eafe;
     color: rgba(0,60,136,1);
     width: 250px;
 }
 .logout{
   border-top: solid 1px grey;
   margin-top:20px;
 }
</style>
