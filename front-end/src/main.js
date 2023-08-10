import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
import gAuthPlugin from 'vue3-google-oauth2';
let gAuthCLientID = '501124880025-d5pe3ehr2jjom6f7soebkh1rp7br5858.apps.googleusercontent.com';
app.use(gAuthPlugin, {
    clientId: gAuthCLientID,
    scope: 'email',
    prompt: 'consent',
})

app.use(router).mount('#app')
