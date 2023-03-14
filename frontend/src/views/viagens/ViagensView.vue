<template>
  <v-container class="fill-height home-page">
    <v-btn
      v-if="!loggedUser"
      color="primary"
      min-width="228"
      rel="noopener noreferrer"
      size="x-large"
      variant="flat"
      :to="{ name: 'accounts-login' }"
      class="my-4">
      <v-icon icon="mdi-account-arrow-right-outline" size="large" start />
      Login
    </v-btn>
    <form-destinos
      v-if="visible && loggedUser"
      @pesquisar="PesquisaDestino"
      :user="loggedUser"
    ></form-destinos>
    <exibe-destinos
      v-else-if="!visible"
      :destinos="destinos"
      @fechaDestinos="fechaDestinos"
    ></exibe-destinos>
  </v-container>
</template>

<script>
import { mapState } from "pinia"
import { useAccountsStore } from "@/stores/accountsStore"
import planejaViagem from "@/api/planeja_viagem"
import FormDestinos from "@/components/FormDestinos.vue"
import { useAppStore } from "@/stores/appStore"
import ExibeDestinos from "@/components/ExibeDestinos.vue"

export default {
  setup() {
    const appStore = useAppStore()
    const accountsStore = useAccountsStore()
    return { appStore, accountsStore }
  },
  components: { FormDestinos, ExibeDestinos },
  data: () => ({
    destinos: [],
    visible: true,
  }),
  computed: {
    ...mapState(useAccountsStore, ["loggedUser"]),
  },
  methods: {
      async PesquisaDestino (formDestinos) {
        await planejaViagem.buscaDestinos(formDestinos).then((data) => {
          this.destinos = data
        })
        const destinosPerfeitos = this.destinos.destinos_perfeitos
        const destinosAlternativos = this.destinos.destinos_alternativos
        if ((destinosPerfeitos.length > 0) || (destinosAlternativos.length > 0)) {
          this.visible = false
        } else {
          this.appStore.setShowErrorMessage(`Ainda não temos destinos para as opções selecionadas`)
        }
      },
      fechaDestinos() {
        this.visible = true
      }
    }
}
</script>