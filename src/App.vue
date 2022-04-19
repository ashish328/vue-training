<template>
  <div class="app">
  <base-card :message="message.data" class="mx-auto my-4">
    <!-- <button class="p-3 bg-indigo-900 text-white m-4" @click="update">
      update Count
    </button>
    <div ref="domRef" >
     {{countComputed}}
    </div> -->

    <button @click="toggleModal" class="p-2 rounded-md px-9 border-2 border-indigo-900 text-indigo-900 mx-auto my-4">
      open modal
    </button>
  </base-card>

  <Teleport :disabled="fasle" to="body">
    <!-- uncomment below div for onUnmounted, onBeforeUnmount life cycle hooks -->
    <!-- <div v-if="showModal"> -->
      <base-model @close="toggleModal" :show="showModal" class="some-class">
        <template #body>
          <base-card>
            Modal content
          </base-card>
        </template>
      </base-model>
    <!-- </div> -->
  </Teleport>
  </div>
</template>

<script>
import { computed, reactive, ref, watch, watchEffect, provide } from 'vue';
import BaseCard from './components/BaseCard.vue'
import BaseModel from './components/BaseModel.vue'

export default {
  name: 'App',
  components: {
    BaseCard,
    BaseModel
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


    // teleprot 
    const showModal = ref(false)

    const toggleModal = function(){
      showModal.value = !showModal.value
    }

    return {
      message,
      count,
      update,
      countComputed,
      updateMessage,
      domRef,
      showModal,
      toggleModal
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
