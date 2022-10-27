<template>
  <navigation-bar></navigation-bar>

  <div class="text-xl flex justify-between">
    <div class="mt-8">
      <form action="POST">
        <div>
          <label class="font-bold" for="covid"
            >გადატანილი გაქვს თუ არა Covid-19?*</label
          >
          <div class="ml-5">
            <div class="mt-2">
              <input
                type="radio"
                name="covid"
                @input="updateHadCovid"
                value="yes"
              />
              <label>კი</label> <br />
            </div>

            <div class="mt-2">
              <input
                type="radio"
                name="covid"
                @input="updateHadCovid"
                value="no"
              />
              <label>არა</label> <br />
            </div>

            <div class="my-2">
              <input
                type="radio"
                name="covid"
                @input="updateHadCovid"
                value="now"
              />
              <label>ახლა მაქვს</label> <br />
            </div>
          </div>
        </div>
        <div v-if="hadCovid === 'yes'">
          <div>
            <label class="font-bold" for="test">
              ანტისხეულების ტესტი გაქვს გაკეთებული?*
            </label>
            <div class="ml-5 my-2">
              <div class="mb-2">
                <input
                  type="radio"
                  name="test"
                  @input="updateTestDone"
                  value="yes"
                />
                <label>კი</label> <br />
              </div>
              <div class="my-2">
                <input
                  type="radio"
                  name="test"
                  @input="updateTestDone"
                  value="no"
                />
                <label>არა</label> <br />
              </div>
            </div>
          </div>

          <div v-if="testDone === 'yes'" class="mt-5">
            <label class="font-bold">
              თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და
              ანტისხეულების რაოდენობა*
            </label>
            <div class="ml-5 mt-5">
              <input
                type="text"
                class="border-2 border-gray-800 py-3 px-4 w-[500px] bg-gray-200"
                placeholder="რიცხვი"
                @input="updateTestDate"
              />
            </div>
            <div class="ml-5 mt-5">
              <input
                type="text"
                class="border-2 border-gray-800 py-3 px-4 w-[500px] bg-gray-200"
                placeholder="ანტისხეულების რაოდენობა"
                @input="updateCovidAntigen"
              />
            </div>
          </div>
          <div v-else-if="testDone === 'no'" class="mt-5">
            <label class="font-bold">
              მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19?*
            </label>
            <div class="ml-5 mt-5">
              <input
                type="date"
                class="border-2 border-gray-800 py-3 px-4 w-[500px] bg-gray-200"
                @input="updateCovidDate"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
    <div>
      <img src="src/assets/vaccinate2.png" alt="vaccinate" />
    </div>
  </div>
  <div class="flex justify-between w-[130px] m-auto">
    <div><img src="src/assets/back.svg" alt="next" /></div>
    <div><img src="src/assets/next.svg" alt="next" /></div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState([
      "hadCovid",
      "testDone",
      "testDate",
      "covidAntigen",
      "covidDate",
    ]),
  },

  methods: {
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
