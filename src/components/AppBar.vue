<template>
  <v-app-bar color="#113F5D" dark :app="true">
    <v-app-bar-nav-icon @click="$emit('showDrawer', !drawerStatus)"></v-app-bar-nav-icon>
    <v-toolbar-title>
      <v-img src="../assets/logo.png" contain></v-img>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-col cols="12" md="3">
      <v-text-field outlined dense class="pt-8" label="Buscar" prepend-icon="mdi-magnify"></v-text-field>
    </v-col>
    <v-avatar class="ma-5" color="teal" size="50">
        <span class="white--text text-h5">AM</span>
    </v-avatar>
  </v-app-bar>
</template>

<script>
export default {
    name: "AppBar",
    props: {
        drawerStatus: { type: Boolean, required: true }
    },
    data() {
        return {
            drawer: this.drawerStatus
        }
    }
};
</script>

<style>
</style>