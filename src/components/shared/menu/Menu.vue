<template>
  <div class="divisoria">
    <nav>
      <ul>
        <!--v-for="route in routes"-->
        <li v-for="(rota, i) of rotas" :key="i">
          <router-link :to="rota.path ? rota.path : '/'">
            {{ rota.titulo }}
          </router-link>
        </li>
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