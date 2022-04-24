<template>
  <div>
    <div>
      <h1 class="centralizado">{{ titulo }}</h1>
    </div>
    <!--@ é o mesmo que v-on | $event é do JS onde ele pega tudo o que acontece do que chama ele, no caso o filtro, 
    "target" indica que está no input (onde filtra)-->
    <div>
      <center>
        <p>Pesquise:</p>
        <input
          type="search"
          class="filtro"
          @:input="filtro = $event.target.value"
          placeholder="filtre pelo título"
        />
      </center>
    </div>
    <div class="divisoria">
      <ul class="lista-fotos">
        <!-- v-for="foto of fotosComFiltro" ou v-for="(foto, i) of fotosComFiltro" :key="i"-->
        <li
          class="lista-fotos-item"
          v-for="(foto, i) of fotosComFiltro"
          :key="i"
        >
          <meu-painel :titulo="foto.titulo">
            <imagem-responsiva :src="foto.url" :titulo="foto.titulo" />

            <meu-botao
              tipo="button"
              rotulo="REMOVER"
              @click.native="remove(foto)"
            />
          </meu-painel>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Painel from "../shared/painel/Painel.vue";
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "./../shared/botao/Botao.vue";

export default {
  components: {
    "meu-painel": Painel,
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao,
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

  methods: {
    remove(foto) {
      if(confirm('Confirma operação?')) {
        alert("Removendo a foto" + foto.titulo);
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
  width: 50%;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  box-shadow: 2px 2px 3px;
  border: solid 1px gray;
  display: block;
  border-radius: 4px;
  margin: 10px;
}

.divisoria {
  margin: 5px;
  background: ghostwhite;
}
</style>
