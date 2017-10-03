<template lang='pug'>
  input.search(
    name='search'
    type='text'
    placeholder='Write an user!'
    class=''
    v-model='criteria'
    v-on:keyup.enter='onSearch'
  )
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
        this.criteria = ''
      }
    }
  }
</script>

<style lang='css'>
  .search {
    margin: 1rem;
  }
</style>
