<template lang='html'>
  <!-- <ul class='bookmarks'>
    <li class='bookmarks__bookmark'>
      {{ bookmark.name }}
      <span class='bookmark__small'>[{{ bookmark.id }}]</span>
    </li>
  </ul> -->
</template>

<script>
  export default {
    name: 'CoBookmarks'
  }
</script>

<style lang='css' scoped>
  @import '../assets/css/colors.css';

  .bookmarks__empty {
    padding: 1rem;

    text-align: center;
    font-size: .8rem;
    color: var(--color-error);
  }

  .bookmarks__bookmark {
    transition: all .6s;
  }

  .bookmarks__bookmark:hover {
    background-color: var(--color-lighter-grey);
  }

  .bookmark__link {
    display: block;
    width: 100%;
    padding: 1rem;

    color: var(--color-lighter-grey);
    background-color: transparent;
    border: none;
    text-transform: uppercase;
  }

  .bookmarks__bookmark:hover .bookmark__link {
    color: var(--color-blue);
  }

  .bookmark__small {
    font-size: .8rem;
    text-transform: none;
  }

</style>
