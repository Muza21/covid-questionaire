<template>
  <div
    class="flex justify-between text-red-500 font-extrabold w-full text-3xl border-b-2 border-gray-800"
  >
    <div class="flex my-4">
      <h1 class="text-3xl">REDBERRY</h1>
      <img class="-mt-3" src="src/assets/logoR.svg" alt="logo" />
    </div>

    <div class="text-gray-800 my-4">3/4</div>
  </div>

  <div class="text-xl flex justify-between">
    <div class="mt-8">
      <form action="POST">
        <div class="ml-5">
          <label class="font-bold" for="vaccine">უკვე აცრილი ხარ?*</label>
          <div>
            <div class="mt-2">
              <input type="radio" name="vaccine" />
              <label>კი</label>
            </div>
            <div class="my-2">
              <input type="radio" name="vaccine" />
              <label>არა</label>
            </div>
          </div>
        </div>
        <!-- if yes this -->

        <div>
          <label class="font-bold" for="stage">აირჩიე რა ეტაპზე ხარ*</label>
          <div class="ml-5">
            <div class="mt-2">
              <input type="radio" name="stage" />
              <label>პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</label>
            </div>
            <div class="mt-2">
              <input type="radio" name="stage" />
              <label>სრულად აცრილი ვარ</label>
            </div>
            <div class="my-2">
              <input type="radio" name="stage" />
              <label>პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</label>
            </div>
          </div>
        </div>
        <!-- if the last option is selected -->
        <div class="mt-10 ml-12">
          <p>
            რომ არ გადადო,<br />
            ბარემ ახლავე დარეგისტრირდი<br />
            <a class="text-cyan-600" href="https://booking.moh.gov.ge/"
              >https://booking.moh.gov.ge/</a
            >
          </p>
        </div>
        <!-- if not than -->
        <div>
          <label class="font-bold" for="plan">რას ელოდები?*</label>
          <div class="ml-5">
            <div class="mt-2">
              <input type="radio" name="plan" />
              <label>დარეგისტრირებული ვარ და ველოდები რიცხვს</label> <br />
            </div>
            <div class="mt-2">
              <input type="radio" name="plan" />
              <label>არ ვგეგმავ</label> <br />
            </div>
            <div class="my-2">
              <input type="radio" name="plan" />
              <label>გადატანილი მაქვს და ვგეგმავ აცრას</label> <br />
            </div>
          </div>
        </div>
        <!-- if second option is selected -->
        <div class="mt-10 ml-12">
          <a class="text-cyan-600" href="https://booking.moh.gov.ge/"
            >https://booking.moh.gov.ge/</a
          >
        </div>
        <!-- if the last option is selected -->
        <div class="mt-10 ml-12 w-[490px]">
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
export default {
  data() {
    return {};
  },
};
</script>
