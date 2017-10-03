<template lang='pug'>
  .developer
    img.developer__avatar(v-bind:src='avatar')
    .developer__info
      h2
        span.developer__name {{ name }}
        =' '
        span.developer__login [{{ login }}]
      .developer__metadata
        span.developer__data(v-if='email') {{ email }}
        =' '
        span.developer__data(v-if='location') {{ location }}
        =' '
        span.developer__data(v-if='company') {{ company }}
        //- {{ user.bio }}
    .developer__stats
      .developer__stat(v-show='repos')
        .developer__icon
          include ../assets/images/github.svg
        =' '
        .developer__total {{ repos }}
      .developer__stat(v-show='gists')
        .developer__icon
          include ../assets/images/gist.svg
        =' '
        .developer__total {{ gists }}
</template>

<script>
  export default {
    name: 'CoDeveloper',
    props: {
      avatar: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      login: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: false
      },
      location: {
        type: String,
        required: false
      },
      company: {
        type: String,
        required: false
      },
      repos: {
        type: Number,
        required: false
      },
      gists: {
        type: Number,
        required: false
      }
    },
    data () {
      return {
        users: []
      }
    }
  }
</script>

<style lang='css' scoped>
  @import '../assets/css/colors.css';
  @import '../assets/css/mixins.css';

  .developer {
    @apply --flex-row;

    & .developer__avatar {
      width: 4rem;
      height: 4rem;

      border-radius: 50%;
    }

    & .developer__info {
      @apply --flex-col;
      justify-content: space-around;
      flex: 1;

      margin: 0 1rem;
    }

    & .developer__name,
    & .developer__login {
      color: var(--color-black);
    }

    & .developer__login {
      font-size: .7rem;
    }

    & .developer__name {
      font-weight: 700;
    }

    & .developer__metadata {
      font-size: .6rem;
    }

    & .developer__data::after {
      content: ' -';
    }

    & .developer__data:last-child::after {
      content: ''
    }

    & .developer__stats {
      @apply --flex-col;

      justify-content: center;
    }

    & .developer__stat {
      @apply --flex-row;

      font-size: .6rem;
    }

    & .developer__icon {
      width: 1rem;
      fill: var(--color-grey);
      margin-right: .2rem;
    }
  }
</style>
