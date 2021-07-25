<template>
  <div class="menubar">
      <img alt="Isec logo" src="../assets/logo.png">
      <ul>
          <router-link to="/"><li :class="{ active: location === 'home' }"><HomeIcon />Home</li></router-link>
          <router-link to="/map"><li :class="{ active: location === 'map' }"><BarChart2Icon />Kaart overzicht</li></router-link>
          <router-link to="/reports"><li :class="{ active: location === 'reports' }"><MailIcon />Meldingen<span class="number">16</span></li></router-link>
          <router-link to="/users"><li :class="{ active: location === 'users' }"><UsersIcon />Gebruikers</li></router-link>
          <router-link to="/profile"><li :class="{ active: location === 'profile' }"><UserIcon />Profiel</li></router-link>
          <router-link to="/settings"><li :class="{ active: location === 'settings' }"><SettingsIcon />Instellingen</li></router-link>
          <router-link to="/logout"><li :class="{ active: location === 'logout' }"><LogOutIcon />Log Uit</li></router-link>
      </ul>
  </div>
</template>

<script>
import { HomeIcon, BarChart2Icon, MailIcon, UsersIcon, UserIcon, SettingsIcon, LogOutIcon} from 'vue-feather-icons';

export default {
  name: 'Menubar',
  components: {
    HomeIcon,
    BarChart2Icon,
    MailIcon,
    UsersIcon,
    UserIcon,
    SettingsIcon,
    LogOutIcon,
  },
  watch:{
    $route (){
        this.location = this.$route.name;
    }
  }, 
  data: function () {
    return {
      location: this.$route.name
    }
  },
}
</script>

<style scoped>
.menubar{
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
 .menubar{
     background-color: #d9eafe;
     color: rgba(0,60,136,1);
     width: 250px;
 }
</style>
