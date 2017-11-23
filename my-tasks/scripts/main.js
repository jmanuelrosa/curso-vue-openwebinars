Vue.config.productionTip = false

new Vue({
  el: '#myTasks',
  data: {
    categories: [
      {
        title: 'Learn',
        tasks: [
          { name: 'VueJS', striked: true },
          { name: 'Vuex', striked: false },
          { name: 'Vue-router', striked: false },
          { name: 'Vue-axios', striked: true }
        ]
      },
      {
        title: 'Recipes',
        tasks: [
          { name: 'Pescaito frito', striked: false },
          { name: 'Salmorejo', striked: true },
          { name: 'Fresh pasta', striked: false }
        ]
      },
      {
        title: 'Friends',
        tasks: [
          { name: 'Visit bru\'s new home', striked: false },
          { name: 'Feed the cats of Sara and Walter', striked: false },
          { name: 'Take a walk with Pedro', striked: false }
        ]
      },
      {
        title: 'VueConf',
        tasks: [
          { name: 'Submit a proposal to C4P', striked: true },
          { name: 'Buy flights to Poland', striked: true },
          { name: 'Watch youtube videos', striked: false }
        ]
      }
    ],
    selected: 0
  },
  computed: {
    tasks: function () {
      if (!this.categories.length) {
        return []
      }

      return this.categories[this.selected].tasks

    },
    title: function () {
      if (!this.categories.length) {
        return undefined
      }

      return this.categories[this.selected].title
    }
  },
  methods: {
    userSelect: function (newSelection) {
      this.selected = newSelection
    },
    removeTask: function (selected) {
      // Like Vue.remove
      const CATEGORY_INDEX = this.categories
        .findIndex(category => category.title === selected.category)

      this.categories[CATEGORY_INDEX].tasks.splice(selected.elem, 1)

      if (!this.categories[CATEGORY_INDEX].tasks.length) {
        this.categories.splice(CATEGORY_INDEX, 1)

        this.selected = 0
      }
    },
    strikeTask: function (selected) {
      const CATEGORY_INDEX = this.categories
        .findIndex(category => category.title === selected.category)
      // Like Vue.remove
      this.$set(
        this.categories[CATEGORY_INDEX].tasks[selected.elem],
        'striked',
        selected.strike
      )
    },
    createNewTask: function (newTask) {
      this.categories[newTask.category].tasks.push({
        name: newTask.task,
        striked: false
      })

      // Move to  selected category
      this.selected = newTask.category
    }
  }
})
