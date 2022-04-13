<template>
  <input type="text" v-modal="hero"/>
</template>

<script>
export default {
  name: "bat-man",
  data(){
    return {
      hero: "",
    }
  },
  watch: {
    hero(newVal, oldVal){
      console.log(newVal + "-- new value");
      console.log(oldVal + "-- old value");
    }
  }
}
</script>