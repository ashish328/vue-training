<template>
  <!-- named slots, multiple slots -->
    <base-card class="mx-auto my-10">
      <input class="mb-4 px-3 border-2 border-indigo-800 bg-slate-50 w-full" type="text" v-model="hero.powers.name" />
    </base-card>
    <base-card class="m-auto mb-10">
      <div>
        content of the card
      </div>
    </base-card>

    <base-card class="m-auto mb-10">
      <template #header>
        <p class="text-xl text-indigo-900">header</p>
      </template>
      <template #footer>
        <p class="text-sm text-indigo-900">footer</p>
      </template>
      <div>
        content of the card
      </div>
    </base-card>
  <!-- slot props or scoped slots -->
  <h3 class="text-3xl underline mb-3">Super Heros</h3>
  <heros-list>
    <template v-slot="{firstName, lastName}">
      {{firstName}} {{lastName}}
    </template>
  </heros-list>
  <h3 class="text-3xl underline mb-3">Super Heros Avatars</h3>
  <heros-list class="mb-4" :flex="true">
    <template v-slot="{firstName, lastName}">
      <div class="m-auto my-2 flex items-center justify-center w-20 h-20 rounded-full bg-sky-500 text-white text-2xl border-4 border-indigo-900">
        {{firstName[0].toUpperCase()}} {{lastName[0].toUpperCase()}} 
      </div>
    </template>
  </heros-list>

  <!-- watchers -->
  <base-card class="mx-auto my-10">
   <input class="mb-4 px-3 border-2 h-8 w-full border-indigo-800 bg-slate-50 w-100" type="text" v-model="hero.powers.name" />
   <div class="text-2xl m-4" ref="batman">{{message}}</div>
   <button class="bg-indigo-900 p-3 text-white" @click="update"> update message</button>
  </base-card>
</template>

<script>
import HerosList from './components/HerosList.vue'
import BaseCard from './components/BaseCard.vue'

export default {
  name: 'App',
  data(){
    return {
      hero: {
        powers: {
          name: ""
        }
      },
      message: "message by batman"
    }
  },
  components: {
    HerosList,
    BaseCard,
  },
  methods:{
    update () {
      this.message = "message up dated";
    }
  },
  watch: {
    hero:{
      handler(newVal, oldVal) {
        console.log(newVal.powers.name + "-- new value");
        console.log(oldVal + "-- old value");
      },
      immediate: true, // to run immediately after the component is mounted
      deep: true, // watchers are shallow befault, use this to watch the object deeply
    },
    message: {
      handler() {
        console.log(this.$refs.batman.innerText)
      },
      flush: 'post' // watcher first and then updates template by default,
      //flush helps to run watcher after the template is update
    }
  }
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
