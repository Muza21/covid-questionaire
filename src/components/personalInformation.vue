<template>
  <form action="POST">
    <div>
      <label for="name">სახელი*</label>
      <div>
        <input type="name" class="border-gray-800 border" />
      </div>
    </div>
    <div>
      <label for="text">გვარი*</label>
      <div>
        <input type="text" class="border-gray-800 border" />
      </div>
    </div>
    <div>
      <label for="email">მეილი*</label>
      <div>
        <input type="email" class="border-gray-800 border" />
      </div>
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
