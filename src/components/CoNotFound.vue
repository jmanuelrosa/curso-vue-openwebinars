<template lang='pug'>
  .not-found
      h1.nf__title Ops! La ruta que busca no existe!
      router-link.nf__link(
        v-bind:to='{ name: "home" }'
      ) Volver a la página principal
</template>

<script>
  export default {
    name: 'CoNotFound'
  }
</script>

<style lang='css' scoped>
  @import '../assets/css/colors.css';
  @import '../assets/css/mixins.css';

  .not-found {
    @apply --flex-col;
    flex: 1;
    justify-content: center;
    align-items: center;

    color: var(--color-black);

    & .nf__title {
      font-size: 2rem;
    }

    & .nf__link {
      margin-top: 1rem;
      font-size: .8rem;
    }
  }
</style>
