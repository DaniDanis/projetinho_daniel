<template>
    <div class="listaDestinos">
        <v-btn
            class="my-2"
            block
            size="large"
            rounded="pill"
            color="primary"
            variant="outlined"
            @click="fechaDestinos"
            >Início
        </v-btn>
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
                ></v-img>        
                <v-card-subtitle class="pt-4">{{destinoPerfeito.destino}}</v-card-subtitle>          
                <v-card-text>
                    <div>O clima desse destino é {{ destinoPerfeito.clima }}</div>          
                    <div>E é uma viagem {{ destinoPerfeito.tipoDestino }}</div>
                </v-card-text>          
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
                ></v-img>
                <v-card-subtitle class="pt-4">{{ destinoAlternativo.destino }}</v-card-subtitle>
                <v-card-text>
                    <div>O clima desse destino é {{ destinoAlternativo.clima }}</div>            
                    <div>E é uma viagem {{ destinoAlternativo.tipoDestino }}</div>
                </v-card-text>          
            </v-card>
        </div>
    </div>


</template>

<script>

export default {
    props: {
        destinos: {},
    },
    data: () => ({
        destinosPerfeitos: [],
        destinosAlternativos: [],
        show: false,
    }),
    methods: {
        fechaDestinos() {
            this.$emit("fechaDestinos")
        }
    },
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