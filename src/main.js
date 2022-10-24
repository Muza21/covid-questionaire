import { createApp } from "vue";
import Landing from "@/components/advisePage.vue";
// import App from "@/App.vue";
import "@/style.css";

// const app = createApp(App);
const landing = createApp(Landing);
landing.mount("#app");
