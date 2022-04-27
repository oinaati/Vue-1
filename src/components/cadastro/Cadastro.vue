<template>
  <div>
    <h2 class="centralizado">Cadastro</h2>
    <h3 class="centralizado">{{ foto.titulo }}</h3>

    <center>
      <form @submit.prevent="grava()">
        <div class="controle">
          <label for="titulo">Titulo</label>
          <input v-model.lazy="foto.titulo" id="titulo" autocomplete="off" />
        </div>

        <div class="controle">
          <label for="url">URL</label>
          <input v-model.lazy="foto.url" id="url" autocomplete="off" />
        </div>

        <div class="controle">
          <label for="descricao">Descrição</label>
          <textarea
            id="descricao"
            autocomplete="off"
            v-model="foto.descricao"
          ></textarea>
        </div>

        <div class="centralizado">
          <meu-botao rotulo="GRAVAR" tipo="submit" />
          <router-link to="/">
            <meu-botao rotulo="VOLTAR" tipo="button" />
          </router-link>
        </div>

        <imagem-responsiva
          class="foto-cadastro"
          v-show="foto.url"
          :src="foto.url"
          :titulo="foto.titulo"
        />
      </form>
    </center>
  </div>
</template>

<script>
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";
import Foto from "../../domain/foto/Foto.js";

export default {
  components: {
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao,
  },

  data() {
    return {
      foto: new Foto(),
      resource: {}
    };
  },

  methods: {
    grava() {
      console.log(this.fotos);

      this.resource
      .save(this.foto)
      .then(() => (this.foto = new Foto(), err => console.log(err)));
    },
  },

    created() {
      this.resource = this.$resource("v1/fotos{/id}");
    }
  
};
</script>

<style scoped>
.centralizado {
  text-align: center;
}
.controle {
  font-size: 18px;
  margin-bottom: 20px;
}
.controle label {
  display: block;
  font-weight: bold;
}

.controle label + input,
.controle textarea {
  width: 60%;
  font-size: inherit;
  border-radius: 5px;
}

.centralizado {
  text-align: center;
}
</style>