<template>
  <div class="row txt-color">
    <div class="col-6 px-0 me-3">
      <div class="row">
        <div class="col-12 mb-0">
          زمان آمادگی برای شروع کار در صورت گزینش<span class="text-danger fs-4">
            *
          </span>
        </div>
        <div class="col-12 mb-2">
          میانگین آخرین حقوق دریافتی (ریال)<span class="text-danger fs-4">
            *
          </span>
        </div>
        <div class="col-12 mb-3">آیا امکان اضافه کاری دارید؟</div>
        <div class="col-12 mb-4">آیا مجوز یا امکان مسافرت دارید؟</div>
        <div class="col-12 mb-4">آیا امکان فعالیت در شیفت شب را دارید؟</div>
        <div class="col-12 mb-4">
          آیا محدودیت جسمی/حرکتی برای انجام شغل مورد نظر دارید؟
        </div>
        <div class="col-12 mb-3">
            لطفاً هریک از موارد زیر را انتخاب نمایید:
        </div>
      </div>
    </div>
    <div class="col-3 px-0">
      <div class="row">
        <div class="col-12 mb-3">
          <div class="col-sm-12 pe-0 small">
            <select
              class="form-select form-select-sm w-50 pe-4"
              aria-label=".form-select-sm example"
              v-model="coorporate.starting_date"
              required
            >
              <option disabled value="" class="">--انتخاب--</option>
              <option value="هم اکنون">هم اکنون</option>
              <option value="تا یک ماه آینده">تا یک ماه آینده</option>
              <option value="تا 45 روز آینده">تا 45 روز آینده</option>
              <option value="تا دو ماه آینده">تا دو ماه آینده</option>
              <option value="بیش از دو ماه">بیش از دو ماه</option>
            </select>
          </div>
        </div>
        <div class="col-12 mb-3">
          <input
            type="text"
            class="form-control w-75"
            id="salery"
            v-model="coorporate.salery"
            required
          />
        </div>
        <div class="col-12 mb-3">
          <div class="form-check">
            <label class="form-check-label px-4" for="yesextra_work">
              بله
            </label>
            <input
              class="form-check-input"
              type="radio"
              name="extra_work"
              id="yesextra_work"
              value="بله"
              v-model="coorporate.extra_work"
              style="position: absolute; right: 53%"
            />
            <label class="form-check-label px-4" for="noextra_work">
              خیر
            </label>
            <input
              class="form-check-input"
              type="radio"
              name="extra_work"
              id="noextra_work"
              value="خیر"
              v-model="coorporate.extra_work"
              style="position: absolute; right: 61%"
            />
          </div>
        </div>
        <div class="col-12 mb-3">
          <div class="form-check">
            <label class="form-check-label px-4" for="yestravel"> بله </label>
            <input
              class="form-check-input"
              type="radio"
              name="travel"
              id="yestravel"
              value="بله"
              v-model="coorporate.travel"
              style="position: absolute; right: 53%"
            />
            <label class="form-check-label px-4" for="notravel"> خیر </label>
            <input
              class="form-check-input"
              type="radio"
              name="travel"
              id="notravel"
              value="خیر"
              v-model="coorporate.travel"
              style="position: absolute; right: 61%"
            />
          </div>
        </div>
        <div class="col-12 mb-3">
          <div class="form-check">
            <label class="form-check-label px-4" for="yesnight_work">
              بله
            </label>
            <input
              class="form-check-input"
              type="radio"
              name="night_work"
              id="yesnight_work"
              value="بله"
              v-model="coorporate.night_work"
              style="position: absolute; right: 53%"
            />
            <label class="form-check-label px-4" for="nonight_work">
              خیر
            </label>
            <input
              class="form-check-input"
              type="radio"
              name="night_work"
              id="nonight_work"
              value="خیر"
              v-model="coorporate.night_work"
              style="position: absolute; right: 61%"
            />
          </div>
        </div>
        <div class="col-12 mb-3">
          <div class="form-check">
            <label class="form-check-label px-4" for="yesunablity"> بله </label>
            <input
              class="form-check-input"
              type="radio"
              name="unablity"
              id="yesunablity"
              value="بله"
              v-model="coorporate.unablity"
              style="position: absolute; right: 53%"
            />
            <label class="form-check-label px-4" for="nounablity"> خیر </label>
            <input
              class="form-check-input"
              type="radio"
              name="unablity"
              id="nounablity"
              value="خیر"
              v-model="coorporate.unablity"
              style="position: absolute; right: 61%"
            />
          </div>
        </div>
        <div class="col-12 mb-3"></div>
      </div>
    </div>
    <div class="col-12">
      <div class="row">
        <div class="col-2"></div>
        <div class="col-8">
            <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="shahid"
              value="خانواده معظم شهدا"
              v-model="coorporate.distinction"
            />
            <label class="form-check-label" for="shahid"
              >خانواده معظم شهدا</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="janbaz"
              value="جانبازان"
              v-model="coorporate.distinction"
            />
            <label class="form-check-label" for="janbaz"> جانبازان</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="razmande"
              value="رزمندگان"
              v-model="coorporate.distinction"
            />
            <label class="form-check-label" for="razmande"> رزمندگان</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="azade"
              value="آزادگان"
              v-model="coorporate.distinction"
            />
            <label class="form-check-label" for="azade"> آزادگان</label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="checkbox"
              id="isargar"
              value=" ایثارگران"
              v-model="coorporate.distinction"
            />
            <label class="form-check-label" for="isargar"> ایثارگران</label>
          </div>
          
          
          
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  setup(props,context) {
    const coorporate = reactive({
      starting_date: "",
      salery: "",
      extra_work: "خیر",
      travel: "خیر",
      night_work: "خیر",
      unablity: "خیر",
      distinction: [],
    });
    context.emit('coorporate',coorporate);
    return {
      coorporate,
    };
  },
};
</script>

<style scoped>
.txt-color {
  color: #111;
  font-weight: 200;
}
input:not([type="checkbox"]):not([type="radio"]),
select,
button {
  height: 20px;
  padding: 0 10px;
}
</style>
