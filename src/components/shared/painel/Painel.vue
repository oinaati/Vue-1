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
  background: whitesmoke;
  border: solid 2px grey;
  padding: 0 auto;
  box-shadow: 3px 3px 10px grey;
  display: inline-block;
  margin: 5px;
  width: 200px;
  height: 100%;
  vertical-align: top;
  text-align: center;
  border-radius: 10px;
  font-size: 12px;
}

.painel .painel-titulo {
  text-align: center;
  border: solid 2px;
  background: rgb(192, 225, 236);
  margin: 0 0 15px 0;
  padding: 10px;
  text-transform: uppercase;
  border-radius: 7px;
}

* {
  box-shadow: 3px 4px 4px;
}


.painel-fade-enter, .painel-fade-leave-active {
  opacity: 0;
}

.painel-fade-leave-active, .painel-fade-enter-active {
  transition: opacity 0.3s;
}

.painel-conteudo {
  overflow: hidden;
}
</style>
