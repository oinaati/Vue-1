<template>
  <div class="divisoria">
    <nav>
      <ul>
        <!--v-for="route in routes"-->
        <lu v-for="(rota, i) of rotas" :key="i">
          <router-link :to="rota.path ? rota.path : '/'">
            {{ rota.titulo }}
          </router-link>
        </lu>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    rotas: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>