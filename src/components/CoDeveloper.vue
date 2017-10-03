<template lang='html'>
  <div class='developer'>
    <img class='developer__avatar'/>
    <div class='developer__info'>
      <h2>
        <span class='developer__name'>{{ name }}</span>
         <span class='developer__login'>[{{ login }}]</span>
      </h2>
      <div class='developer__metadata'>{{ metadata }}</div>
    </div>
    <div class='developer__stats'>
      <div class='developer__stat'>
        <div class='developer__icon'></div>
        <div class='developer__total'>{{ repos }}</div>
      </div>
      <div class='developer__stat'>
        <div class='developer__icon'></div>
        <div class='developer__total'>{{ gists }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CoDeveloper',
    props: {
      avatar: {
        type: String,
        required: true,
        validator (value) {
          return value.startsWith('http')
        }
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
        required: true
      },
      company: {
        type: String,
        required: false
      },
      repos: {
        type: Number
      },
      gists: {
        type: Number
      }
    },
    computed: {
      metadata () {
        let meta = ''

        if (this.email) {
          meta = `${meta} ${this.email}`
        }

        if (this.location) {
          meta = `${meta} ${this.location}`
        }

        if (this.company) {
          meta = `${meta} ${this.company}`
        }

        return meta
      }
    },
    watch: {
      metadata (newValue) {
        console.log('Metadata:', newValue)
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
