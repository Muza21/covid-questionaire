<template>
  <div
    class="flex justify-between text-red-500 font-extrabold w-full text-3xl border-b-2 border-gray-800"
  >
    <div class="flex my-4">
      <h1 class="text-3xl">REDBERRY</h1>
      <img class="-mt-3" src="src/assets/logoR.svg" alt="logo" />
    </div>

    <div class="text-gray-800 my-4">4/4</div>
  </div>
  <div class="flex justify-between text-xl">
    <div class="mt-8 w-2/5">
      <div>
        <p class="mb-4">
          რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
          რომელსაც ჩვენი თანამშრომლები ქმნით. ბევრისთვის არის და ყოფილა წლების
          განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი -
          ჩვენთან გადმოსვლის.
        </p>

        <p class="mb-4">
          პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
          ყოველდღიური კომუნიკაციაც გაიშვიათდა.
        </p>
      </div>
      <form action="POST">
        <div>
          <label class="font-bold" for="office">
            რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვდერები,
            სადაც ყველა სურვილისამებრ ჩაერთვება?*
          </label>
          <div class="ml-5">
            <div class="mt-2">
              <input type="radio" name="office" />
              <label>კვირაში ორჯერ</label>
            </div>
            <div class="mt-2">
              <input type="radio" name="office" />
              <label>კვირაში ერთხელი</label>
            </div>
            <div class="mt-2">
              <input type="radio" name="office" />
              <label>ორ კვირაში ერთხელი</label>
            </div>

            <div class="my-2">
              <input type="radio" name="office" />
              <label>თვეში ერთხელი</label>
            </div>
          </div>
        </div>
        <div class="mt-8">
          <label class="font-bold" for="week">
            კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
          </label>
          <div class="ml-5">
            <div class="mt-2">
              <input type="radio" name="week" />
              <label>0</label>
            </div>
            <div class="mt-2">
              <input type="radio" name="week" />
              <label>1</label>
            </div>
            <div class="mt-2">
              <input type="radio" name="week" />
              <label>2</label>
            </div>
            <div class="mt-2">
              <input type="radio" name="week" />
              <label>3</label>
            </div>
            <div class="mt-2">
              <input type="radio" name="week" />
              <label>4</label>
            </div>
            <div class="mt-2">
              <input type="radio" name="week" /> <label>5</label> <br />
            </div>
          </div>
        </div>
        <div class="mt-8">
          <label class="font-bold" for="name">
            რას ფიქრობთ ფიზიკურ შეკრებებზე?*
          </label>
          <div class="mt-2">
            <input
              type="text"
              class="border-2 border-gray-800 p-4 w-[600px] h-44 bg-gray-200"
            />
          </div>
        </div>
        <div class="my-8">
          <label class="font-bold" for="name">
            რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას
            შეცვლიდი?*
          </label>
          <div class="mt-2">
            <input
              type="text"
              class="border-2 border-gray-800 p-4 w-[600px] h-44 bg-gray-200"
            />
          </div>
        </div>
      </form>
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
    <div><img src="src/assets/back.svg" alt="next" /></div>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
