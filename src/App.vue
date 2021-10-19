<template>
  <v-app style="background-color: #F4F5F7;">
    <AppBar :drawerStatus="drawer" @showDrawer="drawer = $event"/>
    <v-row>
      <NavegationDrawer :drawer="drawer"/>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-row>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue"
import NavegationDrawer from './components/NavegationDrawer.vue'

export default {
  name: "App",
  components: { AppBar, NavegationDrawer },
  data() {
    return {
      drawer: false
    };
  },
};
</script>
