<template>
  <div class="menubar">
      <img alt="Isec logo" src="../assets/logo.png">
      <ul>
          <li class="active"><HomeIcon />Home</li>
          <li><BarChart2Icon />Kaart overzicht</li>
          <li><MailIcon />Meldingen<span class="number">16</span></li>
          <li><UsersIcon />Gebruikers</li>
          <li><UserIcon />Profiel</li>
          <li><SettingsIcon />Instellingen</li>
          <li><LogOutIcon />Log Uit</li>
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
  
}
</script>

<style scoped>
.menubar{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
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
