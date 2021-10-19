<template>
  <v-dialog persistent max-width="900px" :value="true">
    <v-card adress="form">
      <v-card-title>
        <span class="text-h5">{{ `${usuario._id ? 'Alterar' : 'Cadastrar'} Usuario` }}</span>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
          <v-form  ref="form" lazy-validation>
            <v-row class="ma-4">
                <v-col cols="12" md="6">
                    <v-text-field outlined v-model="usuario.nome" dense label="Nome Completo" :rules="[v => !!v || 'Preencha o campo Nome']" >
                    </v-text-field>
                    <v-text-field outlined v-model="usuario.idade" dense type="number" label="Idade" :rules="[v => !!v || 'Preencha o campo Idade']">
                    </v-text-field>
                    <v-text-field outlined v-model="usuario.githubInfo.githubUser" dense label="Github User" :rules="[v => !!v || 'Preencha o campo Git hub User']">
                    </v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                    <v-text-field outlined v-model="usuario.endereco.cep" dense counter="9" @input="pesquisarCep($event)" label="CEP" :rules="[v => !!v || 'Preencha o campo CEP']">
                    </v-text-field>
                    <v-text-field outlined v-model="usuario.endereco.logradouro" dense label="Rua" :rules="[v => !!v || 'Preencha o campo Rua']">
                    </v-text-field>
                    <v-text-field outlined v-model="usuario.endereco.numero" dense type="number" label="Número" :rules="[v => !!v || 'Preencha o campo Número']">
                    </v-text-field>
                    <v-text-field outlined v-model="usuario.endereco.localidade" dense label="Cidade" :rules="[v => !!v || 'Preencha o campo Cidade']">
                    </v-text-field>
                    <v-text-field outlined v-model="usuario.endereco.uf" dense label="Estado" :rules="[v => !!v || 'Preencha o campo Estado']">
                    </v-text-field>
                    <v-text-field outlined v-model="usuario.endereco.ibge" dense type="number" label="Número IBGE" :rules="[v => !!v || 'Preencha o campo Número IBGE']">
                    </v-text-field>
                </v-col>
            </v-row>
        </v-form>
          
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="#E2B874" outlined plain to="/usuarios">Fechar</v-btn>
        <v-btn color="#E2B874" dark @click="salvarUsuario">{{ usuario._id ? 'Alterar' : 'Salvar' }}</v-btn>
      </v-card-actions>

    </v-card>

  </v-dialog>
</template>

<script>
import CepService from '@/services/cepService.js'

export default {
  name: "ModalForm",
  props: ['id'],
  methods: {
    pesquisarCep(event) {
      const cep = event
      if(cep.length >= 8) {
        cep.replace('-', '')
        CepService.getAdressByCep(cep).then(data => {
          this.usuario.endereco = data;
        });
      }
    },
    salvarUsuario() {
      if(this.$refs.form.validate()) {
        if(this.usuario._id) {
          this.$store.dispatch('alterarUsuario', this.usuario)
        }else {
          this.$store.dispatch('adicionarUsuario', this.usuario)
        }
        this.$router.push({ path: '/usuarios'})
      }  
    }
  },
  computed: {
    usuario() {
      return this.$store.getters.usuarioToSave
    }
  },
  created() {
    if(this.id) {
      this.$store.dispatch('setUsuarioToEdit', this.id)
    }
  }
}
</script>

<style>
</style>