<template>
  <div>
    {{message}}
  </div>
</template>

<script>
import {inject} from 'vue';
export default {
  setup() {
    const message = inject('message', "default inject message")

    return {
      message
    }
  },
  // inject: {
  //   message: {
  //     from: 'message',
  //     default: "default inject message"
  //   }
  // }
}
</script>