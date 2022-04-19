<template>
  <div v-if="show" class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">default header</slot>
        </div>

        <div class="modal-body">
          <slot name="body">default body</slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button
              class="p-2 rounded-md px-9 border-2 border-indigo-900 text-indigo-900 mx-auto my-4"
              @click="closeModal"
            >OK</button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  onMounted, 
  onBeforeMount, 
  onBeforeUpdate, 
  onUpdated, 
  onBeforeUnmount, 
  onUnmounted
} from 'vue'
export default {
  props: ['show'],
  setup(props, context){
    console.log(props.show, "prop value")
    console.log(context)

    const closeModal = function(){
      context.emit('close')
    }

    onBeforeMount(() => {
      console.log(props.show, "before mount")
    });

    onMounted(() => {
      console.log(props.show, "on mounted")
    });

    onBeforeUpdate(() => {
      console.log(props.show, "on before update")
    });

    onUpdated(() => {
      console.log(props.show, "updated")
    });

    onBeforeUnmount(() => {
      console.log(props.show, "on before unmount")
    });

    onUnmounted(() => {
      console.log(props.show, "on unmounted")
    })

    return  {
      closeModal
    }
  }
}
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 300px;
  margin: 50px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}
</style>