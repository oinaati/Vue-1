<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

    <!--@ é o mesmo que v-on | $event é do JS onde ele pega tudo o que acontece do que chama ele, no caso o filtro, 
    "target" indica que está no input (onde filtra)-->
    <input
      type="search"
      class="filtro"
      @:input="filtro = $event.target.value" 
      placeholder="filtre pelo título"
    />

    <ul class="lista-fotos">
      <!-- v-for="foto of fotosComFiltro" ou v-for="(foto, i) of fotosComFiltro" :key="i"-->
      <li class="lista-fotos-item" v-for="(foto, i) of fotosComFiltro" :key="i">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva :src='foto.url' :titulo='foto.titulo'/>
        </meu-painel>
      </li>
    </ul>

  </div>
</template>

<script>
import Painel from "../shared/painel/Painel.vue";
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";

export default {
  components: {
    "meu-painel": Painel,
    'imagem-responsiva': ImagemResponsiva,
  },

  data() {
    return {
      titulo: "Paisagens",
      fotos: [],
      filtro: "",
    };
  },
  
  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.fotos.filter((foto) => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    },
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

.centralizado {
  text-align: center;
}
.lista-fotos {
  list-style: none;
}
.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.filtro {
  width: 100%;
  box-shadow: 2px 2px 3px;
  border: solid 1px gray;
  display: block;
}
</style>
