<template>
  <form action="POST">
    <div>
      <label for="vaccine">უკვე აცრილი ხარ?*</label>
      <div>
        <input type="radio" name="vaccine" />
        <label>კი</label> <br />
        <input type="radio" name="vaccine" />
        <label>არა</label> <br />
      </div>
    </div>
    <!-- if yes this -->

    <div>
      <label for="stage">აირჩიე რა ეტაპზე ხარ*</label>
      <div>
        <input type="radio" name="stage" />
        <label>პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</label> <br />
        <input type="radio" name="stage" />
        <label>სრულად აცრილი ვარ</label> <br />
        <input type="radio" name="stage" />
        <label>პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</label> <br />
      </div>
    </div>
    <!-- if the last option is selected -->
    <div>
      <p>
        რომ არ გადადო ბარემ ახლავე დარეგისტრირდი
        <a href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>
      </p>
    </div>
    <!-- if not than -->
    <div>
      <label for="plan">რას ელოდები?*</label>
      <div>
        <input type="radio" name="plan" />
        <label>დარეგისტრირებული ვარ და ველოდები რიცხვს</label> <br />
        <input type="radio" name="plan" />
        <label>არ ვგეგმავ</label> <br />
        <input type="radio" name="plan" />
        <label>გადატანილი მაქვს და ვგეგმავ აცრას</label> <br />
      </div>
    </div>
    <!-- if second option is selected -->
    <div>
      <a href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>
    </div>
    <!-- if the last option is selected -->
    <div>
      <p>
        ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის
        გაკეთება.
      </p>
      <p>რეგისტრაციის ბმული</p>
      <a href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
