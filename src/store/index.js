import { createStore } from "vuex";

import rootActions from "@/store/actions.js";
import rootMutations from "@/store/mutations.js";

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
  actions: rootActions,
  mutation: rootMutations,
});
export default store;
