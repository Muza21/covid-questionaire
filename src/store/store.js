import { createStore } from "vuex";
import router from "@/router";
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
  actions: {
    personalInformationPage() {
      router.push({ name: "personalInformation" });
    },
    covidQuestionsPage() {
      router.push({ name: "covidQuestions" });
    },
    vaccinationPage() {
      router.push({ name: "vaccinationPage" });
    },
    advisePage() {
      router.push({ name: "advisePage" });
    },
    thanksPage() {
      router.push({ name: "thanks" });
    },
  },
  mutation: {
    updateName(state) {
      this.name = state.name;
      console.log(this.name);
    },
  },
});
export default store;
