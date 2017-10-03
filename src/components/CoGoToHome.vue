<template lang='pug'>
  router-link.go-home(
    v-bind:to='{ name: "home" }'
  )
    include ../assets/images/back.svg
</template>

<script>
export default {
  name: 'CoGoToHome'
}
</script>

<style lang='css' scoped>
@import '../assets/css/colors.css';

.go-home {
  padding: .5rem;

  background-color: var(--color-blue);

  border-radius: 10px;

  & svg {
    width: 1rem;

    fill: var(--color-white);
  }
}
</style>
