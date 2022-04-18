import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')


// let data = {
//   message: "hello!!",
//   total: " world",
// };

// const appendMessage = message + " world";

// console.log(appendMessage)

// message = "helloo!!"

// const proxy = new Proxy(data, {
//   set(traget, key, value) {
//     console.log(value)
//     traget[key] = "ashish"
//     if(key === 'message') {
//       traget.total = value + " world";
//     }
//     return true
//   }
// })

// console.log(proxy)

// proxy.message = "new message"

// console.log(proxy)

