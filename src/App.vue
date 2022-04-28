<template>
  <div class="corpo">

    <meu-menu :rotas="routes"/>

    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { routes } from "./routes";
import Menu from './components/shared/menu/Menu.vue';

export default {

  components: {
  'meu-menu' : Menu
  },

  data() {
    return {
      routes: routes.filter(route => route.menu)
    };
  },
};
</script>

<style>
.corpo {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  width: 96%;
  margin: 0 auto;
}

.divisoria {
  margin: 5px;
  padding: 5px;
  background: #eff3f3;
  box-shadow: 2px 2px 4px #D7D7DE ;
}

.pagina-enter,
.pagina-leave-active {
  opacity: 0;
}

.pagina-leave-active,
.pagina-enter-active {
  transition: opacity 0.2s;
}
</style>
