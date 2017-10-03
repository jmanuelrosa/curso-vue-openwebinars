<template lang='html'>
  <ul class="developers">
    <!-- <li class="developers__item" v-bind:class="{ 'userConNombre': user.name === false }"> -->
    <li class="developers__item" v-bind:style="userConNombre">
      <co-developer
        v-bind:avatar='user.avatar'
        v-bind:name='user.name'
        v-bind:login='user.login'
        v-bind:email='user.email'
        v-bind:location='user.location'
        v-bind:company='user.company'
      ></co-developer>
    </li>
  </ul>
</template>

<script>
  import bus from '@/busdata.js'

  import CoDeveloper from '@/components/CoDeveloper'

  export default {
    name: 'CoDevelopers',
    data () {
      return {
        users: [],
        user: {
          avatar: 'https://avatars2.githubusercontent.com/u/25254?v=4',
          name: 'TJ Holowaychuk',
          login: 'tj',
          email: 'tj@apex.sh',
          location: 'Victoria, BC, Canada',
          company: 'Apex',
          repos: 200,
          gitst: 15
        },
        userConNombre: {
          fontWeight: 900,
          color: 'red'
        }
      }
    },
    components: {
      CoDeveloper
    },
    mounted () {
      console.log('CoDeveloper mounted')
    },
    created () {
      bus.$on('search', criteria => {
        console.log('CoDevelopers', criteria)
      })
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
