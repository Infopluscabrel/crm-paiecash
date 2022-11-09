import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'

// import "./assets/css/style.css";

// Vue.prototype.$http = axios

const app = createApp(App);

app.use(router)
    .use(store);

app.mount("#app");