import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/app.scss'

const app = createApp(App)

const vueComponents = require.context('./components/', true, /\.(vue|js)$/);

vueComponents.keys().forEach(key => {
    const component = vueComponents(key).default;
    // if a component has a name defined use the name, else use the path as the component name
    const name = component.name
        ? component.name
        : key.replace(/\.(\/|vue|js)/g, '').replace(/(\/|-|_|\s)\w/g, (match) => match.slice(1).toUpperCase());

    app.component(name, component);
});

app.use(store)
app.use(router).mount('#app');