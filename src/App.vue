<template>
  <div>
    <h1>{{ titulo }}</h1>

    <ul>
      <li v-for="foto of fotos">
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
      fotos: [
        {
          url: "https://blog.nascenteazul.com.br/wp-content/uploads/2021/07/fernando-de-noronha-paisagens-naturais-de-praia.png",
          titulo: "praia",
        },
        {
          url: "https://blog.nascenteazul.com.br/wp-content/uploads/2021/07/fernando-de-noronha-paisagens-naturais-de-praia.png",
          titulo: "praia",
        },
      ],
    };
  },
};
</script>

<style>
</style>
