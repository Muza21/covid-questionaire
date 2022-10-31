import { createApp } from "vue";

import { createStore } from "vuex";

import router from "./router";

// import Landing from "@/components/personalInformation.vue";
// import Landing from "@/components/covidQuestions.vue";
// import Landing from "@/components/vaccinationPage.vue";
// import Landing from "@/components/advisePage.vue";

import NavigationBar from "@/components/NavigationBar.vue";
import App from "@/App.vue";
import "@/style.css";

// const app = createApp(App);

const store = createStore({
  state() {
    return {
      name: "",
      lastname: "",
      email: "",

      hadCovid: "",
      testDone: "",
      testDate: "",
      covidAntigen: "",
      covidDate: "",

      hadVaccine: "",
      stageLevel: "",
      planAhead: "",

      mettingNumber: "",
      officeWork: "",
      meetingOpinion: "",
      adviseOpinion: "",
    };
  },
});

const app = createApp(App).use(store);

app.use(router);

app.component("navigation-bar", NavigationBar);

app.mount("#app");
