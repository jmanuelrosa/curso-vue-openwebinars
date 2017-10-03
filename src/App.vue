<template lang='pug' src='./App.pug'>
</template>

<script>
  import CoLogo from '@/components/CoLogo'
  import CoSearch from '@/components/CoSearch'
  import CoBookmarks from '@/components/CoBookmarks'

  export default {
    name: 'CoApp',
    data () {
      return {
        show: false
      }
    },
    methods: {
      onSearch (searchCriteria) {
        console.log('Search ', searchCriteria)
        this.show = true
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
  @import 'assets/css/reset';
  @import 'assets/css/global';
</style>

<style lang='css' scoped src='./App.css'>
</style>
