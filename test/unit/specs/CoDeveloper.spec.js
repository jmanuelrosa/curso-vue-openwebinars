import Vue from 'vue'
// import chai from 'chai'

import CoDeveloper from '@/components/CoDeveloper'

// const should = chai.should()

describe('Component: CoDeveloper', () => {
  beforeEach(function () {
    // Load component
    const Constructor = Vue.extend(CoDeveloper)
    this.vm = new Constructor({
      propsData: {
        'avatar': 'https://avatars2.githubusercontent.com/u/25254?v=4',
        'name': 'TJ Holowaychuk',
        'login': 'tj',
        'email': 'tj@apex.sh',
        'location': 'Victoria, BC, Canada',
        'company': 'Apex',
        'repos': 270,
        'gists': 542
      }
    }).$mount()
  })

  describe('components props', function () {
    describe('"avatar"', function () {
      it('should be required', function () {
        CoDeveloper.props.avatar.required.should.be.true
      })

      it('should be String', function () {
        CoDeveloper.props.avatar.type.name.should.be.equal('String')
      })
    })
  })

  describe('after mount component', function () {
    it('should be mounted successfully', function () {
      this.vm.should.be.defined
    })

    it('should render correct contents', function () {
      const src = this.vm.$el.querySelector('.developer .developer__avatar').src
      src.should.be.equal('https://avatars2.githubusercontent.com/u/25254?v=4')
    })
  })
})
