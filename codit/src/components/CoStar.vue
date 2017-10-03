<template lang='pug'>
  button.star__set(
    v-bind:class='{ "star__set--selected": selected }'
    v-on:click='onClick()'
    v-bind:title='text'
  )
    template(
      v-if='selected'
    )
      include ../assets/images/star.svg
    template(
      v-else
    )
      include ../assets/images/star_empty.svg
</template>

<script>
  export default {
    name: 'CoStar',
    props: {
      selected: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    computed: {
      text () {
        return this.selected ? 'Add bookmark' : 'Remove bookmark'
      }
    },
    methods: {
      onClick () {
        this.$emit('star:clicked')
      }
    }
  }
</script>

<style lang='css' scoped>
  @import '../assets/css/colors.css';

  .star__set {
    width: 2rem;
  }

  .star__set--selected {
    fill: var(--color-bookmark);
  }

</style>
