<template lang='html'>
  <div class='codit'>
    <div class='container'>
      <nav class='menu'>
        <co-search></co-search>
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
  export default {
    name: 'CoApp'
  }
</script>

<style lang='css'>
</style>
