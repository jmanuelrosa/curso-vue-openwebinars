<template lang='pug'>
  .events
    h3.events__title Últimos eventos
    ul.events__items
      li.events__item
        p.events__total {{ commits }}
        p.events__name Commits
      li.events__item
        p.events__total {{ issues }}
        p.events__name Issues
      li.events__item
        p.events__total {{ pr }}
        p.events__name Pull Request

</template>

<script>
  import axios from 'axios'

  export default {
    name: 'CoEvents',
    props: {
      user: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        events: []
      }
    },
    computed: {
      commits () {
        return this.events
          .filter(item => item.type === 'PushEvent')
          .length
      },
      issues () {
        return this.events
          .filter(item => item.type === 'IssuesEvent')
          .length
      },
      pr () {
        return this.events
          .filter(item => item.type === 'PullRequestEvent')
          .length
      }
    },
    created () {
      this.getUserEvents()
    },
    methods: {
      getUserEvents () {
        return axios({
          method: 'GET',
          url: `${process.env.API}users/${this.user}/events/public`,
          headers: { 'Authorization': `token ${process.env.TOKEN}` }
        })
          .then(response => response.data)
          .then(events => {
            this.events = events
          })
      }
    }
  }
</script>

<style lang='css' scoped>
  @import '../assets/css/mixins.css';
  @import '../assets/css/colors.css';

  .events {
    margin: 1rem 0;

    & .events__title {
      color: var(--color-black);
    }

    & .events__items {
      @apply --flex-row;
      justify-content: space-around;
    }

    & .events__item {
      margin-top: 1rem;
      padding: 1rem;
      min-width: 33%;

      border-right: 1px solid var(--color-black);
      text-align: center;
    }

    & .events__item:last-child {
      border-right: none;
    }

    & .events__name {
      color: var(--color-black);
      font-size: .7rem;
    }

    & .events__total {
      font-size: 1.5rem;
    }
  }
</style>
