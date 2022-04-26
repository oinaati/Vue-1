<template>
  <div>
    <h2 class="centralizado">Cadastro</h2>
    <h2 class="centralizado"></h2>

    <center>
      <form class="divisoria" @submit.prevent="grava()">
        <div class="controle">
          <label for="titulo">Titulo</label>
          <input id="titulo" autocomplete="off" @input="foto.titulo = $event.target.value" :value="foto.titulo"/>
        </div>

        <div class="controle">
          <label for="url">URL</label>
          <input id="url" autocomplete="off" @input="foto.url = $event.target.value" :value="foto.url"/>
          <imagem-responsiva />
        </div>

        <div class="controle">
          <label for="descricao">Descrição</label>
          <textarea id="descricao" autocomplete="off" @input="foto.descricao = $event.target.value" :value="foto.descricao"></textarea>
        </div>

        <div class="centralizado">
          <meu-botao rotulo="GRAVAR" tipo="submit" />
          <router-link to="/">
            <meu-botao rotulo="VOLTAR" tipo="button" />
          </router-link>
        </div>

      </form>
    </center>
  </div>
</template>

<script>
import ImagemResponsiva from "../shared/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";

export default {
  components: {
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao,
  },

  data() {
    return {
      foto: {
        titulo: "",
        url: "",
        descricao: "",
      },
    };
  },

  methods: {

      grava() {
           console.log(this.foto);
           console.log('enviar dados para a API');
           this.foto = {
               titulo:'',
               utl:'',
               descricao:''
           }
      }
  }
};
</script>

<style scoped>
.centralizado {
  text-align: center;
}

.controle {
  font-size: 14px;
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
</style>