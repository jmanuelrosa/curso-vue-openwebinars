<template lang='html'>
  <div class='codit'>
    <div class='container'>
      <nav class='menu'>
        <co-search
          v-on:search='onSearch'
        ></co-search>
        <co-bookmarks></co-bookmarks>
      </nav>
      <main class='content'>
        <header class='content__header'>
          <co-logo></co-logo>
        </header>
        <co-developers></co-developers>
      </main>
    </div>
  </div>
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
