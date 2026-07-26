import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import "primeicons/primeicons.css";
import router from "./router/index.js";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

//can be separated like below, or can be chained like this createApp(App).use(router).mount(#app)
const app = createApp(App);

app.use(router);
app.use(Toast);

app.mount("#app");
