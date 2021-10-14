import { createApp } from 'vue'
import 'materialize-css/dist/css/materialize.min.css'
import 'material-design-icons/iconfont/material-icons.css'
import App from './App.vue'
import store from './store'

createApp(App).use(store).mount('#app')
