<template lang='html'>
  <ul class='bookmarks'>
    <li class='bookmarks__bookmark'>
      {{ bookmark.name }}
      <span class='bookmark__small'>[{{ bookmark.id }}]</span>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'CoBookmarks'
  }
</script>

<style lang='css'>
</style>
