<template>
  <div>
    <div>
      <h1 class="centralizado">{{ titulo }}</h1>

      <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>
    </div>
    <!--@ é o mesmo que v-on | $event é do JS onde ele pega tudo o que acontece do que chama ele, no caso o filtro, 
    "target" indica que está no input (onde filtra)-->

    <center>
      <p>Pesquise:</p>
      <input
        type="search"
        class="filtro"
        @input="filtro = $event.target.value"
        placeholder="filtre pelo título"
      />
    </center>

    <div class="divisoria">
      <ul class="lista-fotos">
        <!-- v-for="foto of fotosComFiltro" ou v-for="(foto, i) of fotosComFiltro" :key="i"-->
        <li
          class="lista-fotos-item"
          v-for="(foto, i) of fotosComFiltro"
          :key="i"
        >
          <meu-painel :titulo="foto.titulo">
            <imagem-responsiva
              v-meu-transform:scale.animate="1.2"
              :src="foto.url"
              :titulo="foto.titulo"
            />

            <meu-botao
              tipo="button"
              rotulo="REMOVER"
              @botaoAtivado="remove(foto)"
              :confirmacao="true"
              estilo="perigo"
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
      mensagem: "",
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
      this.resource.delete({ id: foto._id }).then(
        () => {
          let indice = this.fotos.indexOf(foto);
          this.fotos.splice(indice, 1);
          this.mensagem = "Foto removida com sucesso";
        },
        (err) => {
          console.log(err);
          this.mensagem = "Não foi possivel remover a foto.";
        }
      );
    },
  },

  created() {
    this.resource = this.$resource("v1/fotos{/id}");
    this.resource
      .query()
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
</style>
