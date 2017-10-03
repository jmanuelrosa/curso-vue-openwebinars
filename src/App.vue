<template lang='html' src='./App.html'>
</template>

<script>
  import CoLogo from '@/components/CoLogo'
  import CoSearch from '@/components/CoSearch'
  import CoBookmarks from '@/components/CoBookmarks'
  // import CoDevelopers from '@/components/CoDevelopers'

  export default {
    name: 'CoApp',
    methods: {
      onSearch (searchCriteria) {
        console.log('Search ', searchCriteria)
      }
    },
    components: {
      CoLogo,
      CoSearch,
      CoBookmarks,
      CoDevelopers: () => import('@/components/CoDevelopers')
    }
  }
</script>

<style lang='css'>
</style>
