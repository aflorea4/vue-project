import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import i18nPlugin from './plugins/i18n'

const app = createApp(App)

app.use(router)
app.use(i18nPlugin, {
    en: {
        menu: {
            home: 'Home',
        },
        greetings: {
            hello: 'Hello!'
        }
    },
    ro: {
        menu: {
            home: 'Acasa',
        },
        greetings: {
            hello: 'Salut!'
        }
    }
})

app.mount('#app')

if(window.localStorage.lang === undefined){
    window.localStorage.setItem('lang', 'ro');
}


