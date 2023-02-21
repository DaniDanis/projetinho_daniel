<template>
  <v-container class="fill-height home-page">
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
          multiple
          chips
          required
        ></v-select>
        <v-select
          v-model="destinos"
          :items="tiposDestino"
          label="Tipo de viagem"
          multiple
          chips
          required
        ></v-select>
        <v-select
          v-model="climas"
          :items="tiposDeClima"
          label="Clima de preferência"
          multiple
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
          @click="PesquisaDestino"
        >
          Pesquisar Destinos
        </v-btn>
      </v-form>
    </v-responsive>
  </v-container>
</template>

<script>
import { mapState } from "pinia"
import { useAccountsStore } from "@/stores/accountsStore"
import planejaViagem from "@/api/planeja_viagem"

export default {
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
      tiposDestino: [],
      tiposDeTurismo: [
        'Aventura',
        'Lazer',
        'Négocios',
        'Eventos'
      ],
      checkbox: false,
    }),
  computed: {
    ...mapState(useAccountsStore, ["loggedUser"]),
  },
  methods: {
      async PesquisaDestino () {
        console.log("Tem nada aqui ainda meu amiguinho")
      },
      async buscaDestinos() {
        await planejaViagem.buscaDestinos().then((data) => {
          this.tiposDestino = data.destinos
        })
      }
    },
  mounted() {
    this.buscaDestinos()
  },
}
</script>