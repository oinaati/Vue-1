import Cadastro from './components/cadastro/Cadastro.vue';
import Home from './components/home/Home.vue';

export const routes = [
    //caminho dos meus componentes
    { path: '', component: Home },
    { path: '/cadastro', component: Cadastro}

];