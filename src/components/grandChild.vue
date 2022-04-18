<template>
  <div>
    {{message}}
  </div>
</template>

<script>
export default {
  inject: {
    message: {
      from: 'newMessage',
      default: "default message"
    }
  }
}
</script>