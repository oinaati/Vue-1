<template>
  <button @click="disparaAcao()" :class="estiloDoBotao" :type="tipo">
    {{ rotulo }}
  </button>
</template>

<script>
export default {
  props: {
    tipo: {
      requited: true,
      type: String,
    },
    rotulo: {
      requited: true,
      type: String,
    },
    confirmacao: Boolean,

    estilo: String,
  },

  methods: {
    disparaAcao() {
      if (this.confirmacao) {
        if (confirm("Confirma operação?")) {
          this.$emit("botaoAtivado");
        }
        return;
      }
      this.$emit("botaoAtivado");
    },
  },

  computed: {
    estiloDoBotao() {
      if (this.estilo == "padrao" || !this.estilo) return "botao botao-padrao";
      if (this.estilo == "perigo") return "botao botao-perigo";
    },
  },
};
</script>

<style>
.botao {
  display: inline-block;
  padding: 5px;
  border-radius: 3px;
  margin: 10px;
  font-size: 1em;
}

.botao-perigo {
  background: firebrick;
  color: white;
}

.botao-padrao {
  background: darkcyan;
  color: white;
}
</style>