import { defineRule } from "vee-validate";
import { required, min, email } from "@vee-validate/rules";

defineRule("required", required);
defineRule("min", min);
defineRule("email", email);

defineRule("redberry_email", (value) => {
  if (!value.match(/@redberry.ge$/)) {
    return false;
  }
  return true;
});
defineRule("antigen_number", (value) => {
  if (!value.match(/^[0-9]+$/)) {
    return false;
  }
  return true;
});
