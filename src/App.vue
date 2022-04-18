<template>
  <base-card :message="message.data" class="mx-auto my-4">
    <button class="p-3 bg-indigo-900 text-white m-4" @click="update">
      update Count
    </button>
    <div ref="domRef" >
     {{countComputed}}
    </div>
  </base-card>
  <base-card class="mx-auto my-4">
    <div>
    {{message.data}}
    </div>
    <button class="p-3 bg-indigo-900 text-white m-4" @click="updateMessage">
      update message
    </button>
  </base-card>
</template>

<script>
import { computed, reactive, ref, watch, watchEffect, provide } from 'vue';
import BaseCard from './components/BaseCard.vue'

export default {
  name: 'App',
  components: {
    BaseCard,
  },
  setup() {
    const message = reactive({
      data: "composition, message"
    })

    const count = ref(0);

    const countComputed = computed(() => count.value)

    const domRef = ref(null)

    function update() {
      count.value += 1 
    }

    function updateMessage () {
      message.data = "new message"
    }

    watch(count, (newVal, oldVal)=> {
      console.log(newVal, oldVal)
      console.log(domRef.value.innerText, "my inner text")
    }, {flush: 'post'})

    watchEffect(() => {
      console.log("watch effect")
      console.log(count.value)
      console.log(message.data)
    }, {flush: 'pose'})

    provide('message', message.data)

    return {
      message,
      count,
      update,
      countComputed,
      updateMessage,
      domRef
    }
  }
  // provide() {
  //   return {
  //     newMessage: computed(() => this.message)
  //   }
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
