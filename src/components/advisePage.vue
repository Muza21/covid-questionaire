<template>
  <div>
    <p>
      რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო, რომელსაც
      ჩვენი თანამშრომლები ქმნით. ბევრისთვის არის და ყოფილა წლების განმავლობაში
      მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი - ჩვენთან გადმოსვლის.
    </p>

    <p>
      პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და ყოველდღიური
      კომუნიკაციაც გაიშვიათდა.
    </p>
  </div>
  <form action="POST">
    <div>
      <label for="covid">
        რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვდერები,
        სადაც ყველა სურვილისამებრ ჩაერთვება?*
      </label>
      <div>
        <input type="radio" name="covid" />
        <label>კვირაში ორჯერ</label> <br />
        <input type="radio" name="covid" />
        <label>კვირაში ერთხელი</label> <br />
        <input type="radio" name="covid" />
        <label>ორ კვირაში ერთხელი</label> <br />
        <input type="radio" name="covid" />
        <label>თვეში ერთხელი</label> <br />
      </div>
    </div>
    <div>
      <label for="covid">
        კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*
      </label>
      <div>
        <input type="radio" name="anti" />
        <label>0</label> <br />
        <input type="radio" name="anti" />
        <label>1</label> <br />
        <input type="radio" name="anti" />
        <label>2</label> <br />
        <input type="radio" name="anti" />
        <label>3</label> <br />
        <input type="radio" name="anti" />
        <label>4</label> <br />
        <input type="radio" name="anti" />
        <label>5</label> <br />
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
