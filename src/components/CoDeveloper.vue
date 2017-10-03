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

<style lang='css'>
</style>
