<template>
  <navigation-bar></navigation-bar>

  <div class="flex justify-between">
    <div class="mt-8">
      <form action="POST">
        <div>
          <label class="font-bold" for="name">სახელი*</label>
          <div class="mt-2">
            <input
              type="name"
              class="border-2 border-gray-800 py-3 px-4 w-[500px] bg-gray-200"
            />
          </div>
        </div>
        <div class="mt-12">
          <label class="font-bold" for="text">გვარი*</label>
          <div class="mt-2">
            <input
              type="text"
              class="border-2 border-gray-800 py-3 px-4 w-[500px] bg-gray-200"
            />
          </div>
        </div>
        <div class="mt-12">
          <label class="font-bold" for="email">მეილი*</label>
          <div class="mt-2">
            <input
              type="email"
              class="border-2 border-gray-800 py-3 px-4 w-[500px] bg-gray-200"
            />
          </div>
        </div>
      </form>
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
