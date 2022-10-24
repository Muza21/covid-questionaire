<template>
  <form action="POST">
    <div>
      <label for="covid">გადატანილი გაქვს თუ არა Covid-19?*</label>
      <div>
        <input type="radio" name="covid" />
        <label>კი</label> <br />
        <input type="radio" name="covid" />
        <label>არა</label> <br />
        <input type="radio" name="covid" />
        <label>ახლა მაქვს</label> <br />
      </div>
    </div>
    <div>
      <label for="covid">ანტისხეულების ტესტი გაქვს გაკეთებული?*</label>
      <div>
        <input type="radio" name="anti" />
        <label>კი</label> <br />
        <input type="radio" name="anti" />
        <label>არა</label> <br />
      </div>
    </div>
    <!-- if yes this -->
    <div>
      <label>
        თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
        რაოდენობა*
      </label>
      <div>
        <input type="text" class="border-gray-800 border" />
      </div>
      <div>
        <input type="text" class="border-gray-800 border" />
      </div>
    </div>
    <!-- if not anti than -->
    <div>
      <label>
        მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19?*
      </label>
      <div>
        <input type="date" class="border-gray-800 border" />
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
