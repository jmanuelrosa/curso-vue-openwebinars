<template lang='html'>
  <input
    name='search'
    type='text'
    placeholder='Write an user!'
    class='search'
    v-on:keyup.enter='onSearch'
    v-focus
  />

</template>

<script>
  export default {
    name: 'CoSearch',
    data () {
      return {
        criteria: ''
      }
    },
    methods: {
      onSearch () {
        this.$emit('search', this.criteria)
      }
    }
  }
</script>

<style lang='css' scoped>
  .search {
    margin: 1rem;
  }
</style>
