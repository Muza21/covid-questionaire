import { createRouter, createWebHistory } from "vue-router";
import landingPage from "../components/landingPage.vue";
import personalInformation from "../components/personalInformation.vue";
import covidQuestions from "../components/covidQuestions.vue";
import vaccinationPage from "../components/vaccinationPage.vue";
import advisePage from "../components/advisePage.vue";
import thankYou from "../components/thankYou.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landingPage",
      component: landingPage,
    },
    {
      path: "/covid?page=1",
      name: "personalInformation",
      component: personalInformation,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import("../components/personalInformation.vue"),
    },
    {
      path: "/covid?page=2",
      name: "covidQuestions",
      component: covidQuestions,
    },
    {
      path: "/covid?page=3",
      name: "vaccinationPage",
      component: vaccinationPage,
    },
    {
      path: "/covid?page=4",
      name: "advisePage",
      component: advisePage,
    },
    {
      path: "/thanks",
      name: "thanks",
      component: thankYou,
    },
  ],
});

export default router;
