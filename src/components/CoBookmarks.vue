<template lang='html'>
  <div class="co-bookmarks">
    <ul v-if='bookmarks.length' class="bookmarks">
      <li v-for="bookmark in bookmarks" class="bookmarks__bookmark">
        {{ bookmark.name }}
        <span class="bookmark__small">[{{ bookmark.login }}]</span>
      </li>
    </ul>
    <p v-else class="bookmarks__empty">You dont have any bookmark selected!</p>
  </div>
</template>

<script>
  import mocks from '@/mocks/users.js'

  export default {
    name: 'CoBookmarks',
    data () {
      return {
        bookmarks: mocks
      }
    }
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
