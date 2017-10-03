<template lang='html'>
  <ul class="developers">
    <li class="developers__item">
      <co-developer
        avatar='https://avatars2.githubusercontent.com/u/25254?v=4'
        name='TJ Holowaychuk'
        login='tj'
        email='tj@apex.sh'
        location='Victoria, BC, Canada'
        company='Apex'
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
        users: []
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
