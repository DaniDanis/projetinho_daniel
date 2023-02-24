<template>
  <v-container class="fill-height home-page">
    <form-destinos
    v-if="!temDestinos"
    @pesquisar="PesquisaDestino"
    ></form-destinos>
    <exibe-destinos 
    v-else
    :destinos="destinos"
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
    return { appStore }
  },
  components: { FormDestinos, ExibeDestinos },
  data: () => ({
    destinos: [],
    temDestinos: false,
  }),
  computed: {
    ...mapState(useAccountsStore, ["loggedUser"]),
  },
  methods: {
      async PesquisaDestino (formDestinos) {
        console.log(formDestinos.nome)
        await planejaViagem.buscaDestinos(formDestinos).then((data) => {
          this.destinos = data
        })
        const destinosPerfeitos = this.destinos.destinosPerfeitos
        const destinosAlternativos = this.destinos.destinosAlternativos
        if ((destinosPerfeitos.length > 0) || (destinosAlternativos.length > 0)) {
          this.temDestinos = true
        } else {
          this.appStore.setShowErrorMessage(`Ainda não temos destinos para as opções selecionadas`)
        }
      }
    },
}
</script>