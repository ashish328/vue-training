//component
var manageMessage = {
  template: "<button @click='updateMessage'> update message</button>",
  methods: {
    updateMessage() {
      this.$emit("update")
    }
  }
}

//directives
var currencyDirective = {
  created (el, bindings) {
    if(bindings.arg === 'en') {
      el.innerText = `SAR ${bindings.value}`
    } else {
      el.innerText = `arSAR ${bindings.value}`
    }
  },
  updated(el , bindings) {
    if(bindings.arg === 'en') {
      el.innerText = `SAR ${bindings.value}`
    } else {
      el.innerText = `arSAR ${bindings.value}`
    }
  }
}

//Mixins 

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
  },
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





var app = Vue.createApp({
  data(){
    return {
      message: 'we are in vue3 instance',
      lang: 'en'
    }
  }, 
  methods: {
    update () {
      console.log("in instance");
      this.message = "vue3 message is updated";
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

app.component('manageMessage', manageMessage);

app.directive('currency', currencyDirective)

app.component('incrementByFive', incrementByFive)

app.component('incrementByTen', incrementByTen)

app.mount("#app");