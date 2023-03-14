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
                <v-card-title>Uma opção de destino perfeito para você é {{destinoPerfeito.nome}}</v-card-title>
                <v-img
                    class="align-end text-white"
                    height="400"
                    :alt="'Imagem do destino ' + destinoPerfeito.nome"
                    :src="destinoPerfeito.imagem"
                    cover
                ></v-img>        
                <v-card-subtitle class="pt-4">{{destinoPerfeito.nome}}</v-card-subtitle>          
                <v-card-text>
                    <div>O clima desse destino é {{ destinoPerfeito.clima }}</div>          
                </v-card-text>          
            </v-card>
        </div>
        <div v-for="destinoAlternativo in destinosAlternativos" :key="destinoAlternativo.id">
            <v-card
              class="mx-auto"
              max-width="1000"
            >
                <v-card-title>Uma opção de destino alternativo para você é {{destinoAlternativo.nome}}</v-card-title>
                <v-img
                class="align-end text-white"
                height="400"
                :alt="'Imagem do destino ' + destinoAlternativo.nome"
                :src="destinoAlternativo.imagem"
                cover
                ></v-img>
                <v-card-subtitle class="pt-4">{{ destinoAlternativo.nome }}</v-card-subtitle>
                <v-card-text>
                    <div>O clima desse destino é {{ destinoAlternativo.clima }}</div>            
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
        this.destinosPerfeitos = this.destinos.destinos_perfeitos
        this.destinosAlternativos = this.destinos.destinos_alternativos
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