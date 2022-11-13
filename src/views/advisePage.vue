<template>
  <div class="page w-full">
    <div class="bg-gray-200 px-[200px] pt-[100px]">
      <ValidationForm @submit="onSubmit">
        <navigation-bar :id="pageNum"></navigation-bar>

        <div class="flex justify-between text-xl">
          <div class="mt-8 w-2/5">
            <div>
              <p class="mb-4">
                რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია.
                გარემო, რომელსაც ჩვენი თანამშრომლები ქმნით. ბევრისთვის არის და
                ყოფილა წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი,
                ბევრისთვის კი - ჩვენთან გადმოსვლის.
              </p>

              <p class="mb-4">
                პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
                ყოველდღიური კომუნიკაციაც გაიშვიათდა.
              </p>
            </div>
            <div>
              <label class="font-bold" for="office">
                რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ
                შეხვდერები, სადაც ყველა სურვილისამებრ ჩაერთვება?*
              </label>
              <div class="ml-5">
                <div class="mt-2">
                  <Field
                    type="radio"
                    name="office"
                    @input="updateMeetingNumber"
                    value="twice_a_week"
                    rules="required"
                  />
                  <label>კვირაში ორჯერ</label>
                </div>
                <div class="mt-2">
                  <Field
                    type="radio"
                    name="office"
                    @input="updateMeetingNumber"
                    value="once_a_week"
                  />
                  <label>კვირაში ერთხელი</label>
                </div>
                <div class="mt-2">
                  <Field
                    type="radio"
                    name="office"
                    @input="updateMeetingNumber"
                    value="once_in_two_weeks"
                  />
                  <label>ორ კვირაში ერთხელი</label>
                </div>

                <div class="my-2">
                  <Field
                    type="radio"
                    name="office"
                    @input="updateMeetingNumber"
                    value="once_a_month"
                  />
                  <label>თვეში ერთხელი</label>
                </div>
                <ErrorMessage class="ml-4 text-orange-600" name="office" />
              </div>
            </div>
            <div class="mt-8">
              <label class="font-bold" for="week">
                კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
              </label>
              <div class="ml-5">
                <div class="mt-2">
                  <Field
                    type="radio"
                    name="week"
                    @input="updateOfficeWork"
                    value="0"
                    rules="required"
                  />
                  <label>0</label>
                </div>
                <div class="mt-2">
                  <Field
                    type="radio"
                    name="week"
                    @input="updateOfficeWork"
                    value="1"
                  />
                  <label>1</label>
                </div>
                <div class="mt-2">
                  <Field
                    type="radio"
                    name="week"
                    @input="updateOfficeWork"
                    value="2"
                  />
                  <label>2</label>
                </div>
                <div class="mt-2">
                  <Field
                    type="radio"
                    name="week"
                    @input="updateOfficeWork"
                    value="3"
                  />
                  <label>3</label>
                </div>
                <div class="mt-2">
                  <Field
                    type="radio"
                    name="week"
                    @input="updateOfficeWork"
                    value="4"
                  />
                  <label>4</label>
                </div>
                <div class="mt-2">
                  <Field
                    type="radio"
                    name="week"
                    @input="updateOfficeWork"
                    value="5"
                  />
                  <label>5</label>
                </div>
                <ErrorMessage class="ml-4 text-orange-600" name="week" />
              </div>
            </div>
            <div class="mt-8">
              <label class="font-bold" for="meetingOpinion">
                რას ფიქრობთ ფიზიკურ შეკრებებზე?
              </label>
              <div class="mt-2">
                <Field
                  as="textarea"
                  name="meetingOpinion"
                  class="border-2 border-gray-800 p-4 w-[600px] h-44 bg-gray-200"
                  :value="meetingOpinion"
                  @input="updateMeetingOpinion"
                />
              </div>
            </div>
            <div class="my-8">
              <label class="font-bold" for="adviseOpinion">
                რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას
                შეცვლიდი?
              </label>
              <div class="mt-2">
                <Field
                  as="textarea"
                  name="adviseOpinion"
                  class="border-2 border-gray-800 p-4 w-[600px] h-44 bg-gray-200"
                  :value="adviseOpinion"
                  @input="updateAdviseOpinion"
                />
              </div>
            </div>
            <div class="">
              <button
                class="px-8 py-3 rounded-3xl bg-cyan-700 text-white font-bold float-right"
              >
                დასრულება
              </button>
            </div>
          </div>
          <div class="flex mt-8">
            <!-- <img
              class="h-[800px] z-10"
              src="src/assets/bike2 2.png"
              alt="bike"
            />
            <img
              class="mt-20 ml-32 absolute"
              src="src/assets/red_heart.png"
              alt="rectangle"
            /> -->
            <advise-page-animation></advise-page-animation>
          </div>
        </div>

        <div class="flex justify-between w-[130px] m-auto py-32">
          <router-link :to="{ name: 'vaccinationPage' }">
            <img src="src/assets/back.svg" alt="back" />
          </router-link>
          <div></div>
        </div>
      </ValidationForm>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import { Form as ValidationForm, Field, ErrorMessage } from "vee-validate";
import AdvisePageAnimation from "@/components/AdvisePageAnimation.vue";

export default {
  data() {
    return {
      pageNum: this.id,
    };
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
    AdvisePageAnimation,
  },

  computed: {
    ...mapState("personal", ["name", "lastname", "email"]),
    ...mapState("covid", [
      "hadCovid",
      "testDone",
      "testDate",
      "covidAntigen",
      "covidDate",
    ]),
    ...mapState("vaccine", ["hadVaccine", "stageLevel", "planAhead"]),
    ...mapState("advise", [
      "meetingNumber",
      "officeWork",
      "meetingOpinion",
      "adviseOpinion",
    ]),
  },

  methods: {
    onSubmit() {
      fetch("https://covid19.devtest.ge/api/create", {
        method: "POST",
        "Content-Type": "application/json",
        body: JSON.stringify(this.collectData()),
      })
        .then((data) => {
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      this.thanksPage();
    },
    ...mapActions(["vaccinationPage", "thanksPage"]),
    ...mapMutations("advise", [
      "setMeetingNumber",
      "setOfficeWork",
      "setMeetingOpinion",
      "setAdviseOpinion",
    ]),
    updateMeetingNumber(e) {
      this.setMeetingNumber(e.target.value);
    },
    updateOfficeWork(e) {
      this.setOfficeWork(e.target.value);
    },
    updateMeetingOpinion(e) {
      this.setMeetingOpinion(e.target.value);
    },
    updateAdviseOpinion(e) {
      this.setAdviseOpinion(e.target.value);
    },
    collectData() {
      const formData = {
        first_name: this.name,
        last_name: this.lastname,
        email: this.email,
        had_covid: this.hadCovid,

        non_formal_meetings: this.meetingNumber,
        number_of_days_from_office: this.officeWork,

        what_about_meetings_in_live: this.meetingOpinion,
        tell_us_your_opinion_about_us: this.adviseOpinion,
      };
      if (this.hadCovid === "yes") {
        if (this.testDone === "yes") {
          formData["had_antibody_test"] = true;
          formData["antibodies"] = {
            test_date: this.testDate,
            number: this.covidAntigen,
          };
        } else {
          formData["had_antibody_test"] = false;
          formData["covid_date"] = this.covidDate;
        }
      }
      if (this.hadVaccine === "yes") {
        formData["had_vaccine"] = true;
        formData["vaccine_stage_level"] = this.stageLevel;
      } else {
        formData["had_vaccine"] = false;
        formData["vaccine_plan"] = this.planAhead;
      }
      return formData;
    },
  },
};
</script>
