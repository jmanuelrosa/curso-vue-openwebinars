<template lang='html'>
  <ul class="developers">
    <li v-for='user in users' class="developers__item">
      <co-developer
        v-bind:avatar='user.avatar_url'
        v-bind:name='user.name'
        v-bind:login='user.login'
        v-bind:email='user.email'
        v-bind:location='user.location'
        v-bind:company='user.company'
        v-bind:repos='user.public_repos'
        v-bind:gists='user.public_gists'
      ></co-developer>
    </li>
  </ul>
</template>

<script>
  import mocks from '@/mocks/users.js'

  import CoDeveloper from '@/components/CoDeveloper'

  export default {
    name: 'CoDevelopers',
    data () {
      return {
        users: mocks
      }
    },
    components: {
      CoDeveloper
    },
    mounted () {
      console.log('CoDeveloper mounted')
    }
  }
</script>

<style lang='css' scoped>
  @import '../assets/css/colors.css';
  @import '../assets/css/mixins.css';

  .developers {
    overflow-x: none;
    overflow-y: auto;

    & .developers__item {
      position: relative;
    }

    & .developers__item::after {
      content: '';

      position: absolute;
      bottom: 0;
      left: 5%;

      width: 90%;
      height: 1px;

      background-color: var(--color-light-grey);
    }

    & .developer {
      padding: 1rem 2rem;
    }
  }
</style>
