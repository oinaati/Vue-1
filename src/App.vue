<template>
  <div>
    <h1>{{ titulo }}</h1>

    <ul>
      <li v-for="(foto, i) of fotos" :key="i">
        <img :src="foto.url" :alt="foto.titulo" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Paisagens",
      fotos: [],
    };
  },

  created() {
    this.$http
      .get("http://localhost:3000/v1/fotos")
      .then(res => res.json())
      .then(fts => (this.fotos = fts));
  },
};
</script>

<style>
</style>
