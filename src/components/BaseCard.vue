<template>
  <div class="bg-white border-lg shadow-md max-w-xl p-5">
    <div class="content">
      <div>
        <slot name="header"></slot>
      </div>
      <div>
        <slot></slot>
        {{message}}
        {{newMessage}}
      </div>
      <div>
        <slot name="footer">
          default footer
        </slot>
      </div>
    </div>

    <grand-child/>
  </div>
</template>

<script>
import grandChild from './grandChild.vue'
export default {
  props: ['message'],
  inject: {
    newMessage: {
      default: "default message"
    }
  },
  components: {
    grandChild,
  }
}
</script>