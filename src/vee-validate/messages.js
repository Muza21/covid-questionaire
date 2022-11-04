import { configure } from "vee-validate";
import { localize, setLocale } from "@vee-validate/i18n";
import ka from "@vee-validate/i18n/dist/locale/ka.json ";

configure({
  generateMessage: localize({
    ka: {
      ...ka,
      messages: {
        required: "გთხოვთ შეავსოთ მოცემული ველი",
        email: "თქვენს მიერ შეყვანილი ტექსტი არ აკმაყოფილებს მეილის ფორმატს",
        min: "{field} უნდა შეიცავდეს მინიმუმ 0:{min} სიმბოლოს",
        redberry_email:
          "გთხოვთ დარეგისტრირდეთ რედბერის მეილით (youremail@redberry.ge)",
        antigen_number: "გთხოვთ სწორად შეიყვანეთ ანტისხეულების რაოდენობა",
        date_format: "გთხოვთ სწორად შეიყვანეთ რიცხვი (11/11/2020)",
      },
      names: {
        lastname: "გვარი",
        name: "სახელი",
        email: "ელ-ფოსტა",
        covid: "კოვიდი",
        test: "ტესტი",
        testDate: "ტესტის რიცხვი",
        covidAntigen: "კოვიდის ანტიგენი",
        covidDate: "კოვიდის რიცხვი",
        vaccine: "ვაქცინა",
        stage: "ეტაპი",
        plan: "გეგმა",
        office: "ოფისი",
        week: "კვირა",
      },
    },
  }),
});

setLocale("ka");
