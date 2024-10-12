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

dark brown: #140d08
light brown: #c09962
accent: #829a7d


*/

//TODO: reset css 

const customDarkTheme : ThemeDefinition = {
    dark: true,
    colors: {

        background: "#140d08",
        surface:    "#c09962",
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
