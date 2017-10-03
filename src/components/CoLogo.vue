<template lang='html'>
  <h1 class='logo'>{{ appName }}</h1>
</template>

<script>
  export default {
    name: 'CoLogo',
    data () {
      return {
        appName: 'Codit'
      }
    }
  }
</script>

<style lang='css' scoped>
  @import '../assets/css/colors.css';

  .logo {
    margin: 0;

    color: var(--color-lighter-grey);

    line-height: 2rem;
    font-size: 2rem;
    font-weight: 800;
    letter-spacing: -2px;

    text-shadow: 0 0 20px color(var(--color-blue) blackness(50%));
  }

</style>
