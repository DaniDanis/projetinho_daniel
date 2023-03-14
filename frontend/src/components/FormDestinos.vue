<template>
      <v-responsive class="d-flex align-center text-center fill-height">
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            v-model="nome"
            :counter="100"
            label="Nome"
            required
          ></v-text-field>
          <v-select
            v-model="tiposTurismo"
            :items="tiposDeTurismo"
            label="Seu tipo de turismo preferido <3"
            chips
            required
          ></v-select>
          <v-select
            v-model="climas"
            :items="tiposDeClima"
            label="Clima de preferência"
            chips
            required
          ></v-select>
  
          <v-checkbox
            v-model="checkbox"
            label="Ainda não sei se vou usar o checkbox"
            required
          ></v-checkbox>
  
          <v-btn
            color="success"
            class="me-4"
            @click="pesquisar"
          >
            Pesquisar Destinos
          </v-btn>
        </v-form>
      </v-responsive>
  </template>
  
  <script>

  export default {
    props: {
      user: {
      type: Object,
      default: null,
    },
    },
    data: () => ({
        valid: true,
        nome: '',
        climas: null,
        destinos: null,
        tiposTurismo: null,
        tiposDeClima: [
          'Quente',
          'Frio',
        ],
        tiposDeTurismo: [
          'Aventura',
          'Lazer',
          'Négocios',
          'Eventos'
        ],
        checkbox: false,
      }),
    methods: {
        pesquisar() {
            const formDestinos = {
                nome: this.nome,
                clima: this.climas,
                tipo_destino: this.destinos,
                tipo_turismo: this.tiposTurismo
                }
            this.$emit('pesquisar', formDestinos);
        }
    },
    mounted() {
      this.nome = this.user.username
    }
    }
  </script>