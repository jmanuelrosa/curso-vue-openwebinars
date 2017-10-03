<template lang='html'>
  <div class='developer'>
    <img class='developer__avatar'/>
    <div class='developer__info'>
      <h2>
        <span class='developer__name'>{{ name }}</span>
         <span class='developer__login'>[{{ login }}]</span>
      </h2>
      <div class='developer__metadata'>
        <span class='developer__data'>{{ email }}</span>
        <span class='developer__data'>{{ location }}</span>
        <span class='developer__data'>{{ company }}</span>
      </div>
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
          return value.starsWith('http')
        },
      },
      name: {
        type: String,
        required: true,
      },
      login: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: false
      },
      respos: {
        type: Number
      },
      gists: {
        type: Number
      }
    }
  }
</script>

<style lang='css'>
</style>
