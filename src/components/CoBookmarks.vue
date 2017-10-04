<template lang='pug'>
  ul.bookmarks(
    v-if='list.length'
  )
    li.bookmarks__bookmark(
      v-for='bookmark in list'
    )
      router-link.bookmark__link(
        v-bind:to='{ name: "profile", params: { user: bookmark.id }}'
        title='Show me profile'
      )
        | {{ bookmark.name }}
        =' '
        span.bookmark__small [{{ bookmark.id }}]
  p.bookmarks__empty(
    v-else
  ) You dont have any bookmark selected!
</template>

<script>
  import mocks from '@/mocks/users.js'

  export default {
    name: 'CoBookmarks',
    data () {
      return {
        list: mocks
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
