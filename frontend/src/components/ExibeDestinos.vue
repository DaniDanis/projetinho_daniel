<template>
    <div class="listaDestinos">
        <div v-for="destinoPerfeito in destinosPerfeitos" :key="destinoPerfeito.id">
            <v-card
              class="mx-auto"
              max-width="1000"
            >
            <v-card-title>Uma opção de viagem perfeita para você é {{destinoPerfeito.destino}}</v-card-title>
              <v-img
                class="align-end text-white"
                height="400"
                :alt="'Imagem do destino ' + destinoPerfeito.destino"
                :src="destinoPerfeito.img"
                cover
              >
              </v-img>
          
              <v-card-subtitle class="pt-4">
                {{destinoPerfeito.destino}}
              </v-card-subtitle>
          
              <v-card-text>
                <div>O clima desse destino é {{ destinoPerfeito.clima }}</div>
          
                <div>E é uma viagem {{ destinoPerfeito.tipoDestino }}</div>
              </v-card-text>          
              <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        variant="text"
        @click="show = !show"
      >
        Saiba mais
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
            </v-card>
        </div>
        <div v-for="destinoAlternativo in destinosAlternativos" :key="destinoAlternativo.id">
            <v-card
              class="mx-auto"
              max-width="1000"
            >
            <v-card-title>Uma opção de viagem alternativa para você é {{destinoAlternativo.destino}}</v-card-title>
              <v-img
                class="align-end text-white"
                height="400"
                :alt="'Imagem do destino ' + destinoAlternativo.destino"
                :src="destinoAlternativo.img"
                cover
              >
              </v-img>
          
              <v-card-subtitle class="pt-4">
                {{destinoAlternativo.destino}}
              </v-card-subtitle>
          
              <v-card-text>
                <div>O clima desse destino é {{ destinoAlternativo.clima }}</div>
          
                <div>E é uma viagem {{ destinoAlternativo.tipoDestino }}</div>
              </v-card-text>          
              <!-- <v-card-actions>
                <v-btn color="orange">
                  Share
                </v-btn>
          
                <v-btn color="orange">
                  Explore
                </v-btn>
              </v-card-actions> -->
            </v-card>
        </div>
    </div>


</template>

<script>
export default {
    props: {
        destinos: [],
    },
    data: () => ({
        destinosPerfeitos: [],
        destinosAlternativos: [],
        show: false,
    }),
    methods: {},
    mounted() {
        this.destinosPerfeitos = this.destinos.destinosPerfeitos
        this.destinosAlternativos = this.destinos.destinosAlternativos
    }
    }
</script>

<style>
.padroniza-imagem {
    width: 600px;
    border-radius: 15px;
    border: solid white 1px;
}

.listaDestinos {
    display: flex;
    gap: 30px;
    flex-direction: column;
}

</style>