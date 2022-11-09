export default {
  setName(state, name) {
    state.name = name;
  },
  setLastName(state, lastname) {
    state.lastname = lastname;
  },
  setEmail(state, email) {
    state.email = email;
  },

  setHadCovid(state, hadCovid) {
    state.hadCovid = hadCovid;
  },
  setTestDone(state, testDone) {
    state.testDone = testDone;
  },
  setTestDate(state, testDate) {
    state.testDate = testDate;
  },
  setCovidAntigen(state, covidAntigen) {
    state.covidAntigen = covidAntigen;
  },
  setCovidDate(state, covidDate) {
    state.covidDate = covidDate;
  },

  setHadVaccine(state, hadVaccine) {
    state.hadVaccine = hadVaccine;
  },
  setStageLevel(state, stageLevel) {
    state.stageLevel = stageLevel;
  },
  setPlanAhead(state, planAhead) {
    state.planAhead = planAhead;
  },

  setMeetingNumber(state, meetingNumber) {
    state.meetingNumber = meetingNumber;
  },
  setOfficeWork(state, officeWork) {
    state.officeWork = officeWork;
  },
  setMeetingOpinion(state, meetingOpinion) {
    state.meetingOpinion = meetingOpinion;
  },
  setAdviseOpinion(state, adviseOpinion) {
    state.adviseOpinion = adviseOpinion;
  },

  initialiseStore(state) {
    if (localStorage.getItem("store")) {
      this.replaceState(
        Object.assign(state, JSON.parse(localStorage.getItem("store")))
      );
    }
  },
};
