<template>
  <div class="bg-gray-200 px-[200px] pt-[100px]">
    <ValidationForm @submit="onSubmit">
      <navigation-bar :id="pageNum"></navigation-bar>

      <div class="flex justify-between text-xl">
        <div class="mt-8 w-2/5">
          <div>
            <p class="mb-4">
              რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
              რომელსაც ჩვენი თანამშრომლები ქმნით. ბევრისთვის არის და ყოფილა
              წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის
              კი - ჩვენთან გადმოსვლის.
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
                  @input="updateMettingNumber"
                  value="1"
                  rules="required"
                />
                <label>კვირაში ორჯერ</label>
              </div>
              <div class="mt-2">
                <Field
                  type="radio"
                  name="office"
                  @input="updateMettingNumber"
                  value="2"
                />
                <label>კვირაში ერთხელი</label>
              </div>
              <div class="mt-2">
                <Field
                  type="radio"
                  name="office"
                  @input="updateMettingNumber"
                  value="3"
                />
                <label>ორ კვირაში ერთხელი</label>
              </div>

              <div class="my-2">
                <Field
                  type="radio"
                  name="office"
                  @input="updateMettingNumber"
                  value="4"
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
                  value="03"
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
                @input="updateAdviseOpinion"
              />
            </div>
          </div>
        </div>
        <div>
          <img src="src/assets/bike2 2.png" alt="bike" />
        </div>
      </div>
      <div class="w-2/5">
        <button class="px-8 py-3 rounded-3xl bg-cyan-700 text-white font-bold">
          დასრულება
        </button>
      </div>
      <div class="flex justify-between w-[130px] m-auto">
        <button @click="vaccinationPage">
          <img src="src/assets/back.svg" alt="next" />
        </button>
        <div></div>
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
      "mettingNumber",
      "officeWork",
      "meetingOpinion",
      "adviseOpinion",
    ]),
  },

  methods: {
    onSubmit(values) {
      console.log(values);
      this.thanksPage();
    },
    ...mapActions(["vaccinationPage", "thanksPage"]),
    updateMettingNumber(e) {
      this.$store.state.mettingNumber = e.target.value;
    },
    updateOfficeWork(e) {
      this.$store.state.officeWork = e.target.value;
    },
    updateMeetingOpinion(e) {
      this.$store.state.meetingOpinion = e.target.value;
    },
    updateAdviseOpinion(e) {
      this.$store.state.adviseOpinion = e.target.value;
    },
  },
};
</script>
