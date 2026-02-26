import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/styles.scss'

// Import UIkit
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import 'uikit/dist/css/uikit.min.css'

// Load UIkit icons
UIkit.use(Icons)

const app = createApp(App)

app.use(router)

app.mount('#app')
