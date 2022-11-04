<template>
  <div class="bg-gray-200 px-[200px] pt-[100px]">
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
                  type="radio"
                  name="covid"
                  value="yes"
                  @input="updateHadCovid"
                  rules="required"
                />
                <label>კი</label>
              </div>

              <div class="mt-2">
                <Field
                  type="radio"
                  name="covid"
                  @input="updateHadCovid"
                  value="no"
                />
                <label>არა</label>
              </div>

              <div class="my-2">
                <Field
                  type="radio"
                  name="covid"
                  @input="updateHadCovid"
                  value="now"
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
                    type="radio"
                    name="test"
                    value="yes"
                    @input="updateTestDone"
                    rules="required"
                  />
                  <label>კი</label>
                </div>
                <div class="my-2">
                  <Field
                    type="radio"
                    name="test"
                    @input="updateTestDone"
                    value="no"
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
                  :type="testDateType"
                  onfocus="(this.type='date')"
                  class="border-2 border-gray-800 py-3 px-4 w-[500px] bg-gray-200"
                  :placeholder="getTestDatestr"
                  @input="updateTestDate"
                  rules="required"
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
                  rules="required|antigen_number"
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
                  :type="covidDateType"
                  onfocus="(this.type='date')"
                  class="border-2 border-gray-800 py-3 px-4 w-[500px] bg-gray-200"
                  @input="updateCovidDate"
                  :placeholder="getCovidDatestr"
                  rules="required"
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
import { mapActions, mapState } from "vuex";
import { Form as ValidationForm, Field, ErrorMessage } from "vee-validate";

export default {
  data() {
    return {
      pageNum: this.id,
      testDateType: "text",
      covidDateType: "text",
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
    ...mapState([
      "hadCovid",
      "testDone",
      "testDate",
      "covidAntigen",
      "covidDate",
    ]),
    getTestDatestr() {
      let s = "რიცხვი";
      return s;
    },
    getCovidDatestr() {
      let s = "დდ/თთ/წწ";
      return s;
    },
  },

  methods: {
    onSubmit(values) {
      console.log(values);
      this.vaccinationPage();
    },
    ...mapActions(["personalInformationPage", "vaccinationPage"]),

    updateHadCovid(e) {
      this.$store.state.hadCovid = e.target.value;
    },
    updateTestDone(e) {
      this.$store.state.testDone = e.target.value;
    },
    updateTestDate(e) {
      this.$store.state.testDate = e.target.value;
    },
    updateCovidAntigen(e) {
      this.$store.state.covidAntigen = e.target.value;
    },
    updateCovidDate(e) {
      this.$store.state.covidDate = e.target.value;
    },
  },
};
</script>
