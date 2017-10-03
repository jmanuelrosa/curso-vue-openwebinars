<template lang='html'>
  <ul class="developers">
    <li class="developers__item">
      <!-- <co-developer></co-developer> -->
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'CoDevelopers',
    data () {
      return {
        users: []
      }
    },
    mounted () {
      console.log('CoDeveloper mounted')
    }
  }
</script>

<style lang='css'>
</style>
