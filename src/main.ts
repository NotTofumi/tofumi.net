import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


import { createMemoryHistory, createRouter } from 'vue-router'

import Home from './components/Home.vue'

const routes = [
{ path: "/", component: Home},
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

/*

theme colors:

dark brown: #170a01
background brown test:  #1d1611
light brown: #bd8f5e
accent: #829a7d


*/

//TODO: reset css 

const customDarkTheme : ThemeDefinition = {
    dark: true,
    colors: {

        background: "#1d1611",
        surface:    "#bd8f5e",
        primary:    "#c09962",

    }
}

const customLightTheme : ThemeDefinition = {
    dark: false,
    colors: {

    }

}


const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'customDarkTheme',
        themes: {
            customDarkTheme,
            customLightTheme,
        }
    }
})


createApp(App).use(router).use(vuetify)
.mount('#app')
