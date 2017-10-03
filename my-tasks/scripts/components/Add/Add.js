Vue.component('mt-add', {
  data: function () {
    return {
      selected: '',
      name: ''
    }
  },
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  template: `
    <form
      class='add'
      v-on:submit.prevent='onSave'
    >
      <input
        name='name'
        type='text'
        class='add__box'
        placeholder='Write a name'
        v-model='name'
        required
        autofocus
      >
      <select
        name='add__options'
        class='add__options'
        v-model='selected'
        required
      >
        <option disabled value=''>Please select one</option>
        <option
          v-for='(category, index) in categories'
          v-bind:value='index'
        >
          {{ category.title }}
        </option>
      </select>
      <input type='submit' value='Save' class='add_save'>
    </form>
  `,
  methods: {
    onSave: function () {
      this.$emit('add:save', {
        category: this.selected,
        task: this.name
      })

      this.selected = this.name = ''
    }
  }
})
