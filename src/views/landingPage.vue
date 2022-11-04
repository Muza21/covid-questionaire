<template>
  <div class="min-h-screen relative bg-gray-200">
    <img
      class="absolute left-1/2 -translate-x-1/2"
      id="logo"
      src="src/assets/redberryLogo.svg"
      alt="logo"
    />
    <div
      class="absolute text-5xl text-gray-800 font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <router-link :to="{ name: 'personalInformation' }">
        <h1>კითხვარის დაწყება</h1>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>
