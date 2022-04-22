<template>
  <img class='imagem-responsiva' :scr='url' :alt='titulo'>
</template>

<script>

/* Propriedades que o elemento pode receber.*/
export default {
  props: ['url', 'titulo'],
};
</script>

<style scoped>
  .imagem-responsiva {
    width: 100%;
  }
</style>