<template>
  <div class="bg-gray-200">
    <div>
      <img src="src/assets/redberryLogo.svg" alt="logo" />
    </div>
    <div>
      <h1>
        <router-link :to="{ name: 'personalInformation' }"
          >კითხვარის დაწყება
        </router-link>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>
