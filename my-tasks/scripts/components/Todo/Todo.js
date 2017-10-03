Vue.component('mt-todo', {
  props: {
    category: {
      type: String,
      required: false
    },
    tasks: {
      type: Array,
      required: false
    }
  },
  template: `
    <section
      class='todos'
      v-bind:class='{ "todos__empty": !tasks.length }'
    >
      <template v-if='tasks.length'>
        <h2 class='todos__title'>{{ category }}</h2>
        <ul class='todo__list'>
          <li
            class='todos__item'
            v-for='(task, index) in tasks'
            v-bind:class='{ "todos__item--strikethrough": task.striked }'
          >
            <p>{{ task.name }}</p>
            <ul class='actions'>
              <li class='actions_action'>
                <button
                  v-if='task.striked'
                  v-on:click='strike(index, false)'
                  class='actions__item actions__item--edit'
                  title='Remove strike from Task'
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm128 217H128v-17h256v17z"/>
                  </svg>
                </button>
                <button
                  v-else
                  v-on:click='strike(index, true)'
                  class='actions__item actions__item--edit'
                  title='Strike Task'
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 398.7c-105.1 0-190.7-85.5-190.7-190.7 0-105.1 85.5-190.7 190.7-190.7 105.1 0 190.7 85.5 190.7 190.7 0 105.1-85.6 190.7-190.7 190.7z"/>
                    <path d="M128 248h256v17H128z"/>
                  </svg>
                </button>
              </li>
              <li class='actions_action'>
                <button
                  v-on:click='remove(index)'
                  class='actions__item actions__item--remove'
                  title='Remove Task'
                >
                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 512 512">
                    <path d="M341 128V99c0-19.1-14.5-35-34.5-35H205.4C185.5 64 171 79.9 171 99v29H80v32h9.2s5.4.6 8.2 3.4c2.8 2.8 3.9 9 3.9 9l19 241.7c1.5 29.4 1.5 33.9 36 33.9h199.4c34.5 0 34.5-4.4 36-33.8l19-241.6s1.1-6.3 3.9-9.1 8.2-3.4 8.2-3.4h9.2v-32h-91v-.1zM192 99c0-9.6 7.8-15 17.7-15h91.7c9.9 0 18.6 5.5 18.6 15v29H192V99zm-8.5 285l-10.3-192h20.3L204 384h-20.5zm83.6 0h-22V192h22v192zm61.6 0h-20.4l10.5-192h20.3l-10.4 192z"/>
                  </svg>
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </template>
      <p
        v-else
        class='todos__message'
      >
        Oh wait! You dont have any task!
      </p>
    </section>
  `,
  methods: {
    strike: function (current, needToStrike) {
      this.$emit('task:strike', {
        category: this.category,
        elem: current,
        strike: needToStrike
      })
    },
    remove: function (current) {
      this.$emit('task:remove', {
        category: this.category,
        elem: current
      })
    }
  }
})
