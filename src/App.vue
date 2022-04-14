<template>
  <div>
    <h1>{{ titulo }}</h1>

    <ul>
      <li v-for='(foto, i) of fotos' :key='i'>
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
          url: "https://www.helenabordon.com/wp-content/uploads/2014/11/Krabi.jpg",
          titulo: "praia 2",
        },
      ],
    };
  },
};
</script>

<style>
</style>
