<template>
  <div class="corpo">
    <h1 class="centralizado">{{ titulo }}</h1>

    <input type="search" class="filtro" v-on:input="filtro = $event.target.value" placeholder="filtre pelo título">

    <ul class="lista-fotos">
      <!-- v-for="foto of fotos" -->
      <li class="lista-fotos-item" v-for="(foto, i) of fotos" :key="i">

        <meu-painel :titulo="foto.titulo">
          <img class="imagem-responsiva" :src="foto.url" :alt="foto.titulo" />
        </meu-painel>

      </li>
    </ul>
  </div>
</template>

<script>
import Painel from "./components/shared/painel/Painel.vue"

export default {

  components: {
    'meu-painel' : Painel
  },

  data() {
    return {
      titulo: "Paisagens",
      fotos: [],
      filtro: '',
    };
  },

  created() {
    this.$http
      .get("http://localhost:3000/v1/fotos")
      .then((res) => res.json())
      .then((fts) => (this.fotos = fts));
  },
};
</script>

<style>
.corpo {
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  width: 96%;
  margin: 0 auto;
}
.centralizado {
  text-align: center;
}
.lista-fotos {
  list-style: none;
}
.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.imagem-responsiva {
  width: 100%;
}

.filtro {
  width: 100%;
  box-shadow: 2px 2px 3px;
  border: solid 1px gray;
  display: block;
}
</style>
