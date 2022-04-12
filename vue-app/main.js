// component
var manageMessage = {
  template: "<button @click='updateMessage'> update message</button>",
  methods: {
    updateMessage() {
      this.$emit("update")
    }
  }
}

Vue.component('manageMessage', manageMessage);

// directive

var currencyDirective = {
  inserted (el, bindings) {
    if(bindings.arg === 'en') {
      el.innerText = `SAR ${bindings.value}`
    } else {
      el.innerText = `arSAR ${bindings.value}`
    }
  },
  componentUpdated(el , bindings) {
    if(bindings.arg === 'en') {
      el.innerText = `SAR ${bindings.value}`
    } else {
      el.innerText = `arSAR ${bindings.value}`
    }
  }
  
}

Vue.directive('currency', currencyDirective)

//Mixinins

var incrementMixin = {
  data() {
    return {
      count: 0,
      incrementBy: 5,
    }
  },
  methods: {
    updateCount() {
      this.count += this.incrementBy
    }
  },
  mounted () {
    console.log("mounted mixin")
  }
}

var incrementByFive = {
  template: `
    <div>
      <h3>{{count}}</h3>
      <button @click="updateCount"> update count by 5</button>
    </div>
  `,
  mixins: [incrementMixin]

}

Vue.component('incrementByFive', incrementByFive)

var incrementByTen = {
  template: `
    <div>
      <h3>{{count}}</h3>
      <button @click="updateCount"> update count by 10</button>
    </div>
  `,
  mixins: [incrementMixin],
  data() {
    return {
      incrementBy: 10
    }
  },
  mounted () {
    console.log("mounted component")
  }
}

Vue.component('incrementByTen', incrementByTen)

var app = new Vue({
  el: "#app",
  data: {
    message: "were are in vue2 instance",
    lang: 'ar',
  },
  methods: {
    update () {
      console.log("in instance");
      this.message = "vue2 message is updated";
    },
    updateLanguage () {
      if(this.lang === 'en') {
        this.lang = 'ar'
      } else {
        this.lang = 'en'
      }
    }
  }
})