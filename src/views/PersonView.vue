<template>
  <div class="pa-10">
    <h1>Teste Engenheiro de Software Full Stack</h1>
    <span style="font-size: 20px; color: grey">Desenvolva no padrão MVC. Use e abuse da Orientação a Objetos</span>
    
    <v-sheet class="mt-5 grey lighten-5" color="white" elevation="2" width="1300px">
      <v-btn color="#E2B874" class="ma-5" dark @click="openForm" to="/usuarios/add"> Cadastrar</v-btn>
      <v-data-table class="pa-5" :items="usuarios" :headers="tableColumns">
        <template v-slot:item.enderecoCompleto="{ item }">
          {{`${item.endereco.logradouro}, ${item.endereco.numero} - ${item.endereco.localidade}/${item.endereco.uf}`}}
        </template>
        <template justify-center v-slot:item.actions="{ item }"> 
          <v-btn text x-small :to="`usuarios/edit/${item._id}`"><v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon></v-btn>
          <v-btn text x-small :to="`/usuarios/delete/${item._id}`"><v-icon small class="mr-2" color="red">mdi-delete</v-icon></v-btn>
        </template>
      </v-data-table>
    </v-sheet>

    <router-view></router-view>

  </div>
</template>

<script>
import UserService from "@/services/usersService.js";

export default {
  name: "PersonView",
  computed: {
    usuarios() {
      return this.$store.getters.usuarios
    },
    userToEdit() {
      return this.$store.getters.userToEdit
    },
    tableColumns() {
      return this.$store.getters.tableColumns
    }
  },
  mounted() {
    UserService.getAllUsuarios().then(data => {
      this.$store.dispatch('atualizarUsuarios', data);
    })
  }
};
</script>

<style>
#main-conteiner {
  background-color: black;
}
</style>