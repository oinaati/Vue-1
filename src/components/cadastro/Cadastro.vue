<template>
  <div>
    <h2 class="centralizado">Cadastro</h2>
    <h3 class="centralizado">{{ foto.titulo }}</h3>
    <h2 v-if="foto._id" class="centralizado">Alterando</h2>
    <h2 v-else class="centralizado">Incluindo</h2>

    <center>
      <form @submit.prevent="grava()">
        <div class="controle">
          <label for="titulo">Titulo</label>
          <input
            name="titulo"
            v-validate
            data-vv-rules="required|min:3|max:30"
            v-model="foto.titulo"
            id="titulo"
            autocomplete="off"
          />
          <span class="erro" v-show="errors.has('titulo')">{{
            errors.first("titulo")
          }}</span>
        </div>

        <div class="controle">
          <label for="url">URL</label>
          <input
            name="url"
            v-validate
            data-vv-rules="required"
            v-model="foto.url"
            id="url"
            autocomplete="off"
          />
          <span class="erro" v-show="errors.has('url')">{{
            errors.first("url")
          }}</span>
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
          <router-link :to="{ name: 'home' }">
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
import FotoService from "../../domain/foto/FotoService.js";

export default {
  components: {
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao,
  },

  data() {
    return {
      foto: new Foto(),
      id: this.$route.params.id,
    };
  },

  methods: {
    grava() {
      this.$validator
        .validateAll()
        .then((success) => {
          if (success) {
            this.service.cadastra(this.foto).then(
              () => {
                if (this.id) this.$router.push({ name: "home" });
                this.foto = new Foto();
              },
              (err) => console.log(err)
            );
          }
      });
    },
  },

  created() {
    this.service = new FotoService(this.$resource);

    if (this.id) {
      this.service.busca(this.id).then((foto) => (this.foto = foto));
    }
  },
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

.erro {
  color: red;
  font-size: 14px;
}
</style>