<template lang='pug'>
  .social(v-bind:style='styleObject')
    span.social__title {{ text }}
    span.social__total {{ total }}
</template>

<script>
export default {
  name: 'CoSocial',
  props: {
    text: {
      type: String,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  computed: {
    styleObject () {
      return {
        backgroundColor: this.color,
        boxShadow: `0 0 10px ${this.color}`
      }
    }
  }
}
</script>

<style lang='css' scoped>
@import '../assets/css/mixins.css';
@import '../assets/css/colors.css';

.social {
  @apply --flex-col;
  justify-content: center;
  align-items: center;

  width: 5rem;
  height: 5rem;

  font-weight: 700;
  border-radius: 50%;

  color: var(--color-white);

  & .social__title {
    font-size: .5rem;
    text-transform: uppercase;
  }

  & .social__total {
    font-size: 1rem;
  }
}
</style>
