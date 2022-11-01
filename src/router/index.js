import { createRouter, createWebHistory } from "vue-router";
import landingPage from "../views/landingPage.vue";
import personalInformation from "../views/personalInformation.vue";
import covidQuestions from "../views/covidQuestions.vue";
import vaccinationPage from "../views/vaccinationPage.vue";
import advisePage from "../views/advisePage.vue";
import thankYou from "../views/thankYou.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landingPage",
      component: landingPage,
    },
    {
      path: "/1",
      name: "personalInformation",
      component: personalInformation,
      props: { id: "1" },
      // query: { id: "1" },
      // props: (route) => ({ id: route.query.id }),

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import("../components/personalInformation.vue"),
    },
    // covid?page=?
    {
      path: "/2",
      name: "covidQuestions",
      component: covidQuestions,
      props: { id: "2" },
    },
    {
      path: "/3",
      name: "vaccinationPage",
      component: vaccinationPage,
      props: { id: "3" },
    },
    {
      path: "/4",
      name: "advisePage",
      component: advisePage,
      props: { id: "4" },
    },
    {
      path: "/thanks",
      name: "thanks",
      component: thankYou,
    },
  ],
});

export default router;
