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
              <input type="radio" name="covid" v-model="hadCovid" value="yes" />
              <label>კი</label> <br />
            </div>

            <div class="mt-2">
              <input type="radio" name="covid" v-model="hadCovid" value="no" />
              <label>არა</label> <br />
            </div>

            <div class="my-2">
              <input type="radio" name="covid" v-model="hadCovid" value="now" />
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
                  v-model="testDone"
                  value="yes"
                />
                <label>კი</label> <br />
              </div>
              <div class="my-2">
                <input type="radio" name="test" v-model="testDone" value="no" />
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
                v-model="testDate"
              />
            </div>
            <div class="ml-5 mt-5">
              <input
                type="text"
                class="border-2 border-gray-800 py-3 px-4 w-[500px] bg-gray-200"
                placeholder="ანტისხეულების რაოდენობა"
                v-model="covidAntigen"
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
                v-model="covidDate"
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
export default {
  data() {
    return {
      hadCovid: "",
      testDone: "",
      testDate: "",
      covidAntigen: "",
      covidDate: "",
    };
  },
  methods: {},
};
</script>
