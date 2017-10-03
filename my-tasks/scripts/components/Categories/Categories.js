Vue.component('mt-categories', {
  props: {
    categories: {
      type: Array,
      required: false
    },
    selected: {
      type: Number,
      required: false
    }
  },
  template: `
    <ul
      v-if='categories.length'
      class='categories'
    >
      <li
        class='categories__category'
        v-for='(category, index) in categories'
        v-bind:class='{ "categories__category--selected": isSelected(index) }'
      >
        <button
          v-on:click='select(index)'
          class='categories__link'
          title='Select category'
        >
          {{ category.title }}
        </button>
      </li>
    </ul>
    <p
      v-else
      class='categories__empty'
    >
      Oh wait! You dont have any category!
    </p>
  `,
  methods: {
    isSelected: function (current) {
      return this.selected === current
    },
    select: function (newSelected) {
      this.$emit('category:new', newSelected)
    }
  }
})
