<template>
  <v-dialog persistent width="400px" :value="true">
      <v-card>
          <v-card-title class="title-1">Deletar Item</v-card-title>
          <v-divider></v-divider>
          <v-card-text class="pa-5">
              <v-icon color="red" class="pa-1">mdi-alert-circle</v-icon><span class="subtitle-1">Deseja confirmar a exclusão deste registro ?</span>
          </v-card-text>
          <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn class="pa-2" small color="error" plain outlined to="/usuarios">Cancelar</v-btn>
              <v-btn class="pa-2" small color="error" @click="deletarUsuario">Deletar</v-btn>
          </v-card-actions>
      </v-card>
  </v-dialog>    
</template>

<script>
export default {
    name: 'DeleteDialog',
    props: ['id'],
    methods: {
        deletarUsuario() {
            this.$store.dispatch('deletarUsuario', this.id)
            this.$router.push({ path: '/usuarios'})
        }
    }
}
</script>

<style>

</style>