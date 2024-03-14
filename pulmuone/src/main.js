import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// const router = createRouter({
//   history: createWebHistory('/pulmuone/'),
//   routes
// })

// createApp(App).mount('#app')
createApp(App).use(router).mount('#app') 
