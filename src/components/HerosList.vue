<template>
  <div>
    <ul :class="flex ? 'flex justify-center' : ''">
      <li v-for="user in users" :key="user.lastname" class="m-2">
        <slot v-bind="user"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
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
      users: [
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
      ]
    }
  }
}
</script>