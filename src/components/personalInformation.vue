<template>
  <Form @submit="onSubmit">
    <navigation-bar></navigation-bar>

    <div class="flex justify-between">
      <div class="mt-8">
        <div>
          <label class="font-bold" for="name">სახელი*</label>
          <div class="mt-2">
            <Field
              name="name"
              type="name"
              class="border-2 border-gray-800 py-3 px-4 w-[500px] bg-gray-200"
              rules=""
              @input="updateName"
            />
            <ErrorMessage name="name" />
          </div>
        </div>
        <div class="mt-12">
          <label class="font-bold" for="lastname">გვარი*</label>
          <div class="mt-2">
            <Field
              name="lastname"
              type="text"
              class="border-2 border-gray-800 py-3 px-4 w-[500px] bg-gray-200"
              rules=""
              @input="updateLastName"
            />
            <ErrorMessage name="lastname" />
          </div>
        </div>
        <div class="mt-12">
          <label class="font-bold" for="email">მეილი*</label>
          <div class="mt-2">
            <Field
              name="email"
              type="email"
              class="border-2 border-gray-800 py-3 px-4 w-[500px] bg-gray-200"
              rules=""
              @input="updateEmail"
            />
            <ErrorMessage name="email" />
          </div>
        </div>

        <div
          class="mt-32 w-[237px] border-t-2 border-gray-600 text-gray-600"
        ></div>
        <div class="mt-4 w-[260px]">
          <p>*-ით მონიშნული ველების შევსება სავალდებულოა</p>
        </div>
      </div>
      <div>
        <img src="src/assets/scan2.png" alt="personal information" />
      </div>
    </div>
    <div class="flex justify-between w-[130px] m-auto">
      <div></div>
      <button><img src="src/assets/next.svg" alt="next" /></button>
    </div>
  </Form>
</template>

<script>
import { mapState } from "vuex";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  data() {
    return {};
  },
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  computed: {
    ...mapState(["name", "lastname", "email"]),
  },

  methods: {
    onSubmit(values) {
      console.log(values);
      alert("Everything is Valid");
    },
    updateName(e) {
      this.$store.state.name = e.target.value;
    },
    updateLastName(e) {
      this.$store.state.lastname = e.target.value;
    },
    updateEmail(e) {
      this.$store.state.email = e.target.value;
    },
  },
};
</script>
