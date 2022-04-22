<template>
  <div class="painel">
    <!--@ é o mesmo que v-on | Quando clicar no bloco, vai trocar o valor de visivel para ao contrário do valor atual-->
    <h2 class="painel-titulo" @click="visivel = !visivel">{{ titulo }}</h2>
    <!--transition só pode ter 1 elemento filho... ele limita esse elemento a receber um efeito-->
    <transition name="painel-fade">
      <div class="painel-conteudo" v-show="visivel">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["titulo"],

  data() {
    return {
      visivel: true,
    };
  },
};
</script>

<style scoped>
.painel {
  padding: 0 auto;
  border: solid 2px grey;
  display: inline-block;
  margin: 5px;
  box-shadow: 5px 5px 10px grey;
  width: 200px;
  height: 100%;
  vertical-align: top;
  text-align: center;
}

.painel .painel-titulo {
  text-align: center;
  border: solid 2px;
  background: lightblue;
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
}

* {
  box-shadow: 5px 5px 5px;
}


.painel-fade-enter, .painel-fade-leave-active {
  opacity: 0;
}

.painel-fade-leave-active, .painel-fade-enter-active {
  transition: opacity 0.3s;
}
</style>
