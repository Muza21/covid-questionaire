<template>
  <div class="bg-gray-200 px-[200px] pt-[100px] h-screen">
    <ValidationForm @submit="onSubmit">
      <navigation-bar :id="pageNum"></navigation-bar>

      <div class="text-xl flex justify-between">
        <div class="mt-8">
          <div>
            <label class="font-bold" for="covid"
              >გადატანილი გაქვს თუ არა Covid-19?*</label
            >
            <div class="ml-5">
              <div class="mt-2">
                <Field
                  name="covid"
                  type="radio"
                  value="yes"
                  @input="updateHadCovid"
                  :checked="hadCovid === 'yes'"
                />

                <label>კი</label>
              </div>

              <div class="mt-2">
                <Field
                  name="covid"
                  type="radio"
                  value="no"
                  @input="updateHadCovid"
                  :checked="hadCovid === 'no'"
                />
                <label>არა</label>
              </div>

              <div class="my-2">
                <Field
                  name="covid"
                  type="radio"
                  value="now"
                  @input="updateHadCovid"
                  :checked="hadCovid === 'now'"
                />
                <label>ახლა მაქვს</label>
              </div>
              <ErrorMessage class="ml-4 text-orange-600" name="covid" />
            </div>
          </div>
          <div v-if="hadCovid === 'yes'">
            <div>
              <label class="font-bold" for="test">
                ანტისხეულების ტესტი გაქვს გაკეთებული?*
              </label>
              <div class="ml-5 my-2">
                <div class="mb-2">
                  <Field
                    name="test"
                    type="radio"
                    value="yes"
                    @input="updateTestDone"
                    :checked="testDone === 'yes'"
                  />
                  <label>კი</label>
                </div>
                <div class="my-2">
                  <Field
                    name="test"
                    type="radio"
                    value="no"
                    @input="updateTestDone"
                    :checked="testDone === 'no'"
                  />
                  <label>არა</label>
                </div>
                <ErrorMessage class="ml-4 text-orange-600" name="test" />
              </div>
            </div>

            <div v-if="testDone === 'yes'" class="mt-5">
              <label class="font-bold">
                თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და
                ანტისხეულების რაოდენობა*
              </label>
              <div class="ml-5 mt-5">
                <Field
                  name="testDate"
                  type="text"
                  class="border-2 border-gray-800 py-3 px-4 w-[500px] bg-gray-200"
                  placeholder="რიცხვი"
                  @input="updateTestDate"
                  :value="testDate"
                  rules="date_format"
                />
                <ErrorMessage class="ml-4 text-orange-600" name="testDate" />
              </div>
              <div class="ml-5 mt-5">
                <Field
                  name="covidAntigen"
                  type="text"
                  class="border-2 border-gray-800 py-3 px-4 w-[500px] bg-gray-200"
                  placeholder="ანტისხეულების რაოდენობა"
                  @input="updateCovidAntigen"
                  :value="covidAntigen"
                  rules="antigen_number"
                />
                <ErrorMessage
                  class="ml-4 text-orange-600"
                  name="covidAntigen"
                />
              </div>
            </div>
            <div v-else-if="testDone === 'no'" class="mt-5">
              <label class="font-bold">
                მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა
                Covid-19?*
              </label>
              <div class="ml-5 mt-5">
                <Field
                  name="covidDate"
                  type="text"
                  class="border-2 border-gray-800 py-3 px-4 w-[500px] bg-gray-200"
                  @input="updateCovidDate"
                  placeholder="დდ/თთ/წწ"
                  :value="covidDate"
                  rules="required|date_format"
                />
                <ErrorMessage class="ml-4 text-orange-600" name="covidDate" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src="src/assets/vaccinate2.png" alt="vaccinate" />
        </div>
      </div>
      <div class="flex justify-between w-[130px] m-auto">
        <button @click="personalInformationPage">
          <img src="src/assets/back.svg" alt="back" />
        </button>
        <button>
          <img src="src/assets/next.svg" alt="next" />
        </button>
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
    ...mapState("covid", [
      "hadCovid",
      "testDone",
      "testDate",
      "covidAntigen",
      "covidDate",
    ]),
  },

  methods: {
    onSubmit(values) {
      console.log(values);
      this.vaccinationPage();
    },
    ...mapActions(["personalInformationPage", "vaccinationPage"]),
    ...mapMutations("covid", [
      "setHadCovid",
      "setTestDone",
      "setTestDate",
      "setCovidAntigen",
      "setCovidDate",
    ]),
    updateHadCovid(e) {
      this.setHadCovid(e.target.value);
      if (this.hadCovid !== "yes") {
        this.setTestDone("");
        this.setTestDate("");
        this.setCovidAntigen("");
        this.setCovidDate("");
      }
    },
    updateTestDone(e) {
      this.setTestDone(e.target.value);
      if (this.testDone === "yes") {
        this.setCovidDate("");
      } else if (this.testDone === "no") {
        this.setTestDate("");
        this.setCovidAntigen("");
      }
    },
    updateTestDate(e) {
      this.setTestDate(e.target.value);
    },
    updateCovidAntigen(e) {
      this.setCovidAntigen(e.target.value);
    },
    updateCovidDate(e) {
      this.setCovidDate(e.target.value);
    },
  },
};
</script>
