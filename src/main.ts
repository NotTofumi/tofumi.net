import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

import { createMemoryHistory, createRouter } from 'vue-router'

import Home from './components/Home.vue'

const routes = [
{ path: "/", component: Home},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

library.add(fas)

createApp(App).component('fa', FontAwesomeIcon).use(router)
.mount('#app')
