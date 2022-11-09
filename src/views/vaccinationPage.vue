<template>
  <div class="bg-gray-200 px-[200px] pt-[100px] h-screen">
    <ValidationForm @submit="onSubmit">
      <navigation-bar :id="pageNum"></navigation-bar>

      <div class="text-xl flex justify-between">
        <div class="mt-8">
          <div>
            <label class="font-bold" for="vaccine">უკვე აცრილი ხარ?*</label>
            <div class="ml-5">
              <div class="mt-2">
                <Field
                  type="radio"
                  name="vaccine"
                  value="yes"
                  @input="updateHadVaccine"
                  rules="required"
                />
                <label>კი</label>
              </div>
              <div class="my-2">
                <Field
                  type="radio"
                  name="vaccine"
                  @input="updateHadVaccine"
                  value="no"
                />
                <label>არა</label>
              </div>
              <ErrorMessage class="ml-4 text-orange-600" name="vaccine" />
            </div>
          </div>

          <div v-if="hadVaccine === 'yes'">
            <div>
              <label class="font-bold" for="stage">აირჩიე რა ეტაპზე ხარ*</label>
              <div class="ml-5">
                <div class="mt-2">
                  <Field
                    type="radio"
                    name="stage"
                    @input="updateStageLevel"
                    value="1"
                    rules="required"
                  />
                  <label>პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</label>
                </div>
                <div class="mt-2">
                  <Field
                    type="radio"
                    name="stage"
                    @input="updateStageLevel"
                    value="2"
                  />
                  <label>სრულად აცრილი ვარ</label>
                </div>
                <div class="my-2">
                  <Field
                    type="radio"
                    name="stage"
                    @input="updateStageLevel"
                    value="3"
                  />
                  <label>პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</label>
                </div>
                <ErrorMessage class="ml-4 text-orange-600" name="stage" />
              </div>
            </div>
            <!-- if the last option is selected -->
            <div v-if="stageLevel === '3'" class="mt-10 ml-12">
              <p>
                რომ არ გადადო,<br />
                ბარემ ახლავე დარეგისტრირდი<br />
                <a class="text-cyan-600" href="https://booking.moh.gov.ge/"
                  >https://booking.moh.gov.ge/</a
                >
              </p>
            </div>
          </div>

          <div v-else-if="hadVaccine === 'no'">
            <div>
              <label class="font-bold" for="plan">რას ელოდები?*</label>
              <div class="ml-5">
                <div class="mt-2">
                  <Field
                    type="radio"
                    name="plan"
                    value="1"
                    @input="updatePlanAhead"
                    rules="required"
                  />
                  <label>დარეგისტრირებული ვარ და ველოდები რიცხვს</label>
                </div>
                <div class="mt-2">
                  <Field
                    type="radio"
                    name="plan"
                    @input="updatePlanAhead"
                    value="2"
                  />
                  <label>არ ვგეგმავ</label>
                </div>
                <div class="my-2">
                  <Field
                    type="radio"
                    name="plan"
                    @input="updatePlanAhead"
                    value="3"
                  />
                  <label>გადატანილი მაქვს და ვგეგმავ აცრას</label>
                </div>
                <ErrorMessage class="ml-4 text-orange-600" name="plan" />
              </div>
            </div>
            <!-- if second option is selected -->
            <div v-if="planAhead === '2'" class="mt-10 ml-12">
              <a class="text-cyan-600" href="https://booking.moh.gov.ge/"
                >https://booking.moh.gov.ge/</a
              >
            </div>
            <!-- if the last option is selected -->
            <div v-else-if="planAhead === '3'" class="mt-10 ml-12 w-[490px]">
              <p>
                ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ
                ვაქცინის გაკეთება.
              </p>
              <br />
              <p>რეგისტრაციის ბმული</p>
              <a class="text-cyan-600" href="https://booking.moh.gov.ge/"
                >https://booking.moh.gov.ge/</a
              >
            </div>
          </div>
        </div>
        <div>
          <img src="src/assets/doctor2.png" alt="doctor" />
        </div>
      </div>
      <div class="flex justify-between w-[130px] m-auto">
        <button @click="covidQuestionsPage">
          <img src="src/assets/back.svg" alt="next" />
        </button>
        <button><img src="src/assets/next.svg" alt="next" /></button>
      </div>
    </ValidationForm>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import { Form as ValidationForm, Field, ErrorMessage } from "vee-validate";

export default {
  data() {
    return {
      pageNum: this.id,
    };
  },
  beforeMount() {
    this.initialiseStore();
  },
  props: {
    id: {
      type: String,
      default: null,
    },
  },

  components: {
    Field,
    ValidationForm,
    ErrorMessage,
  },

  computed: {
    ...mapState(["hadVaccine", "stageLevel", "planAhead"]),
  },

  methods: {
    onSubmit(values) {
      console.log(values);
      this.advisePage();
    },
    ...mapActions(["covidQuestionsPage", "advisePage"]),
    ...mapMutations([
      "setHadVaccine",
      "setStageLevel",
      "setPlanAhead",
      "initialiseStore",
    ]),
    updateHadVaccine(e) {
      this.setHadVaccine(e.target.value);
    },
    updateStageLevel(e) {
      this.setStageLevel(e.target.value);
    },
    updatePlanAhead(e) {
      this.setPlanAhead(e.target.value);
    },
  },
};
</script>
