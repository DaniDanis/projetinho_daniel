<template>
    <div>
        <div v-for="destinoPerfeito in destinosPerfeitos" :key="destinoPerfeito.id">
            <h1>Uma opção de viagem perfeita para você é {{destinoPerfeito.destino}}</h1>
            <h2>O clima desse destino é {{ destinoPerfeito.clima }}</h2>
            <h2>E é uma viagem {{ destinoPerfeito.tipoDestino }}</h2>
            <h2>Além disso é uma viagem com foco maior em {{ destinoPerfeito.tipoTurismo }}</h2>
            <img :src="destinoPerfeito.img" :alt="'Imagem do destino ' + destinoPerfeito.destino" class="padroniza-imagem">
        </div>
        <div v-for="destinoAlternativo in destinosAlternativos" :key="destinoAlternativo.id">
            <h1>Uma opção de viagem alternativa para você é {{destinoAlternativo.destino}}</h1>
            <h2>O clima desse destino é {{ destinoAlternativo.clima }}</h2>
            <h2>E é uma viagem {{ destinoAlternativo.tipoDestino }}</h2>
            <h2>Além disso é uma viagem com foco maior em {{ destinoAlternativo.tipoTurismo }}</h2>
            <img :src="destinoAlternativo.img" :alt="'Imagem do destino ' + destinoAlternativo.destino" class="padroniza-imagem">
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

</style>