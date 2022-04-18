<template>
  <base-card :message="message.data" class="mx-auto">
    <button class="p-3 bg-indigo-900 text-white m-4" @click="update">
      {{count}}
    </button>

    {{countComputed}}
  </base-card>
</template>

<script>
import { computed, reactive, ref } from 'vue';
import BaseCard from './components/BaseCard.vue'
// import {computed} from 'vue';

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

    function update() {
      count.value += 1 
    }

    return {
      message,
      count,
      update,
      countComputed
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
