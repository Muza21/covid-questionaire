import { createApp } from "vue";

import router from "@/router";
import store from "@/store/store.js";
import NavigationBar from "@/components/NavigationBar.vue";
import App from "@/App.vue";
import "@/style.css";

import "@/vee-validate/rules.js";
import "@/vee-validate/messages.js";

const app = createApp(App).use(store);

app.use(router);

app.component("navigation-bar", NavigationBar);

app.mount("#app");
