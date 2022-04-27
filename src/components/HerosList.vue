<template>
  <div>
    <ul :class="flex ? 'flex justify-center' : ''">
      <li v-for="hero in heros" :key="hero.lastname" class="m-2">
        <slot v-bind="hero"></slot>
      </li>
    </ul>
  </div>
</template>

<script>

// import {ref} from 'vue';

const fetchHeros = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          firstName: "Tony",
          lastName: "Stark", 
        },
        {
          firstName: "Bruce",
          lastName: "Banner",
        },
        {
          firstName: "Thor",
          lastName: "Odinson",
        },
        {
          firstName: "Steven",
          lastName: "Rogers",
        },
        {
          firstName: "Natalia",
          lastName: "Romanova",
        }
      ])
    }, 3000)
  })
}
export default {
  name: "heros-list",
  props: {
    flex: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      heros: []
    }
  },

  async mounted() {
    const heros = await fetchHeros();
    this.heros = heros
  }

  // async setup() {
  //   const heros = ref([])
  //   heros.value = await fetchHeros()

  //   return  {
  //     heros
  //   }
  // }
}
</script>