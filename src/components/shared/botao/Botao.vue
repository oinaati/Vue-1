<template>
    <button class="botao botao-perigo" :type='tipo'>{{ rotulo }}</button>
</template>

<script>
export default {

    props: ['tipo', 'rotulo']
    
}
</script>

<style>
    .botao {
        display: inline-block;
        padding: 5px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.0em;
    }

    .botao-perigo {
        background: firebrick;
        color: white;
    }

    .botao-padrao {
        background: darkcyan;
        color: white;
    }
</style>