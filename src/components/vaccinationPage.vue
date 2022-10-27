<template>
  <navigation-bar></navigation-bar>

  <div class="text-xl flex justify-between">
    <div class="mt-8">
      <form action="POST">
        <div>
          <label class="font-bold" for="vaccine">უკვე აცრილი ხარ?*</label>
          <div class="ml-5">
            <div class="mt-2">
              <input
                type="radio"
                name="vaccine"
                @input="updateHadVaccine"
                value="yes"
              />
              <label>კი</label>
            </div>
            <div class="my-2">
              <input
                type="radio"
                name="vaccine"
                @input="updateHadVaccine"
                value="no"
              />
              <label>არა</label>
            </div>
          </div>
        </div>

        <div v-if="hadVaccine === 'yes'">
          <div>
            <label class="font-bold" for="stage">აირჩიე რა ეტაპზე ხარ*</label>
            <div class="ml-5">
              <div class="mt-2">
                <input
                  type="radio"
                  name="stage"
                  @input="updateStageLevel"
                  value="1"
                />
                <label>პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</label>
              </div>
              <div class="mt-2">
                <input
                  type="radio"
                  name="stage"
                  @input="updateStageLevel"
                  value="2"
                />
                <label>სრულად აცრილი ვარ</label>
              </div>
              <div class="my-2">
                <input
                  type="radio"
                  name="stage"
                  @input="updateStageLevel"
                  value="3"
                />
                <label>პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</label>
              </div>
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
                <input
                  type="radio"
                  name="plan"
                  @input="updatePlanAhead"
                  value="1"
                />
                <label>დარეგისტრირებული ვარ და ველოდები რიცხვს</label>
              </div>
              <div class="mt-2">
                <input
                  type="radio"
                  name="plan"
                  @input="updatePlanAhead"
                  value="2"
                />
                <label>არ ვგეგმავ</label>
              </div>
              <div class="my-2">
                <input
                  type="radio"
                  name="plan"
                  @input="updatePlanAhead"
                  value="3"
                />
                <label>გადატანილი მაქვს და ვგეგმავ აცრას</label>
              </div>
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
      </form>
    </div>
    <div>
      <img src="src/assets/doctor2.png" alt="doctor" />
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
    ...mapState(["hadVaccine", "stageLevel", "planAhead"]),
  },

  methods: {
    updateHadVaccine(e) {
      this.$store.state.hadVaccine = e.target.value;
    },
    updateStageLevel(e) {
      this.$store.state.stageLevel = e.target.value;
    },
    updatePlanAhead(e) {
      this.$store.state.planAhead = e.target.value;
    },
  },
};
</script>
