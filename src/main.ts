import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

import { createMemoryHistory, createRouter } from 'vue-router'

import Home from './components/Home.vue'
import Betreuung from './components/Fortbildungen/Betreuung.vue'
import Pflege from './components/Fortbildungen/Pflege.vue'
import PraxisAnleitung from './components/Fortbildungen/PraxisAnleitung.vue'
import Fuehrung from './components/Unsere Kurse/Fuehrung.vue'
import Pflegende from './components/Unsere Kurse/Pflegende.vue'
import Studierende from './components/Unsere Kurse/Studierende.vue'
import Betreungskraft from './components/Weiterbildungen/Betreungskraft.vue'
import Pflegehelfer from './components/Weiterbildungen/Pflegehelfer.vue'
import Arbeitsorganisation from './components/Weitere Leistungen/Arbeitsorganisation.vue'
import Gesundheitsmanagement from './components/Weitere Leistungen/Gesundheitsmanagement.vue'

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
