<template>
  <v-card class="mt-15 ml-3" v-if="drawer">
    <v-navigation-drawer :mini-variant="true">
      <v-list class="d-flex justify-center flex-column">
        <v-list-item link class="mt-3">
          <v-icon>mdi-chart-bar</v-icon>
        </v-list-item>
        <v-list-item link class="mt-3">
          <v-icon>mdi-pencil-box</v-icon>
        </v-list-item>
        <v-list-item link class="mt-3">
          <v-icon>mdi-exit-run</v-icon>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: "NavegationDrawer",
  props: ['drawer']
};
</script>

<style>
</style>