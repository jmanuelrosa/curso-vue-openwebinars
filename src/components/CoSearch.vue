<template lang='html'>
  <input
    name='search'
    type='text'
    placeholder='Write an user!'
    class='search'
    v-model='criteria'
  />

</template>

<script>
  import bus from '@/busdata.js'

  export default {
    name: 'CoSearch',
    data () {
      return {
        criteria: ''
      }
    },
    watch: {
      criteria () {
        // this.$emit('search', this.criteria)
        bus.$emit('search', this.criteria)
      }
    }
  }
</script>

<style lang='css' scoped>
  .search {
    margin: 1rem;
  }
</style>
