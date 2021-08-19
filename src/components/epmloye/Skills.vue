<template>
  <div class="row txt-color">
    <div class="col-3">آشنایی با زبان انگلیسی</div>
    <div class="col-2 p-0 me-4">
      <div class="form-group row">
        <label for="speaking0" class="col-sm-4 col-form-label p-0">
          مکالمه
          <span class="text-danger fs-4"> * </span>
        </label>
        <div class="col-sm-8 pe-0 small">
          <select
            class="form-select form-select-sm w-100 pe-4"
            aria-label=".form-select-sm example"
            id="speaking0"
            v-model="skills.langs[0].speaking"
          >
            <option disabled value="" class="">--انتخاب--</option>
            <option value="خوب">خوب</option>
            <option value="متوسط">متوسط</option>
            <option value="ضعیف">ضعیف</option>
            <option value="بی اطلاع">بی اطلاع</option>
          </select>
        </div>
      </div>
    </div>
    <div class="col-2 p-0 me-4">
      <div class="form-group row">
        <label for="reading0" class="col-sm-4 col-form-label p-0">
          خواندن
          <span class="text-danger fs-4"> * </span>
        </label>
        <div class="col-sm-8 pe-0 small">
          <select
            class="form-select form-select-sm w-100 pe-4"
            aria-label=".form-select-sm example"
            id="reading0"
            v-model="skills.langs[0].reading"
          >
            <option disabled value="" class="">--انتخاب--</option>
            <option value="خوب">خوب</option>
            <option value="متوسط">متوسط</option>
            <option value="ضعیف">ضعیف</option>
            <option value="بی اطلاع">بی اطلاع</option>
          </select>
        </div>
      </div>
    </div>
    <div class="col-2 p-0 me-4">
      <div class="form-group row">
        <label for="writing0" class="col-sm-4 col-form-label p-0">
          نوشتن
          <span class="text-danger fs-4"> * </span>
        </label>
        <div class="col-sm-8 pe-0 small">
          <select
            class="form-select form-select-sm w-100 pe-4"
            aria-label=".form-select-sm example"
            id="writing0"
            v-model="skills.langs[0].writing"
          >
            <option disabled value="" class="">--انتخاب--</option>
            <option value="خوب">خوب</option>
            <option value="متوسط">متوسط</option>
            <option value="ضعیف">ضعیف</option>
            <option value="بی اطلاع">بی اطلاع</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  <div class="row txt-color mb-3">
    <div class="col-3">
      <div class="form-group row me-3">
        <label for="langs1" class="col-sm-5 col-form-label p-0">
          آشنایی با زبان:
        </label>
        <div class="col-sm-5 pe-0 small">
          <input
            type="text"
            class="form-control-file w-100"
            id="langs1"
            v-model="skills.langs[1].langs"
          />
        </div>
      </div>
    </div>
    <div class="col-2 p-0 me-4">
      <div class="form-group row">
        <label for="speaking1" class="col-sm-4 col-form-label p-0">
          مکالمه
        </label>
        <div class="col-sm-8 pe-0 small">
          <select
            :disabled="skills.langs[1].langs"
            class="form-select form-select-sm w-100 pe-4"
            aria-label=".form-select-sm example"
            id="speaking1"
            v-model="skills.langs[1].speaking"
          >
            <option disabled value="" class="">--انتخاب--</option>
            <option value="خوب">خوب</option>
            <option value="متوسط">متوسط</option>
            <option value="ضعیف">ضعیف</option>
            <option value="بی اطلاع">بی اطلاع</option>
          </select>
        </div>
      </div>
    </div>
    <div class="col-2 p-0 me-4">
      <div class="form-group row">
        <label for="reading1" class="col-sm-4 col-form-label p-0">
          خواندن
        </label>
        <div class="col-sm-8 pe-0 small">
          <select
            :disabled="skills.langs[1].langs"
            class="form-select form-select-sm w-100 pe-4"
            aria-label=".form-select-sm example"
            id="reading1"
            v-model="skills.langs[1].reading"
          >
            <option disabled value="" class="">--انتخاب--</option>
            <option value="خوب">خوب</option>
            <option value="متوسط">متوسط</option>
            <option value="ضعیف">ضعیف</option>
            <option value="بی اطلاع">بی اطلاع</option>
          </select>
        </div>
      </div>
    </div>
    <div class="col-2 p-0 me-4">
      <div class="form-group row">
        <label for="writing1" class="col-sm-4 col-form-label p-0">
          نوشتن
        </label>
        <div class="col-sm-8 pe-0 small">
          <select
            :disabled="skills.langs[1].langs"
            class="form-select form-select-sm w-100 pe-4"
            aria-label=".form-select-sm example"
            id="writing1"
            v-model="skills.langs[1].writing"
          >
            <option disabled value="" class="">--انتخاب--</option>
            <option value="خوب">خوب</option>
            <option value="متوسط">متوسط</option>
            <option value="ضعیف">ضعیف</option>
            <option value="بی اطلاع">بی اطلاع</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  <div class="row txt-color mb-3">
    <div class="col-3">
      <div class="form-group row me-3">
        <label for="langs1" class="col-sm-5 col-form-label p-0">
          آشنایی با زبان:
        </label>
        <div class="col-sm-5 pe-0 small">
          <input
            type="text"
            class="form-control-file w-100"
            id="langs1"
            v-model="skills.langs[2].langs"
          />
        </div>
      </div>
    </div>
    <div class="col-2 p-0 me-4">
      <div class="form-group row">
        <label for="speaking2" class="col-sm-4 col-form-label p-0">
          مکالمه
        </label>
        <div class="col-sm-8 pe-0 small">
          <select
            :disabled="skills.langs[2].langs"
            class="form-select form-select-sm w-100 pe-4"
            aria-label=".form-select-sm example"
            id="speaking2"
            v-model="skills.langs[2].speaking"
          >
            <option disabled value="" class="">--انتخاب--</option>
            <option value="خوب">خوب</option>
            <option value="متوسط">متوسط</option>
            <option value="ضعیف">ضعیف</option>
            <option value="بی اطلاع">بی اطلاع</option>
          </select>
        </div>
      </div>
    </div>
    <div class="col-2 p-0 me-4">
      <div class="form-group row">
        <label for="reading2" class="col-sm-4 col-form-label p-0">
          خواندن
        </label>
        <div class="col-sm-8 pe-0 small">
          <select
            :disabled="skills.langs[2].langs"
            class="form-select form-select-sm w-100 pe-4"
            aria-label=".form-select-sm example"
            id="reading2"
            v-model="skills.langs[2].reading"
          >
            <option disabled value="" class="">--انتخاب--</option>
            <option value="خوب">خوب</option>
            <option value="متوسط">متوسط</option>
            <option value="ضعیف">ضعیف</option>
            <option value="بی اطلاع">بی اطلاع</option>
          </select>
        </div>
      </div>
    </div>
    <div class="col-2 p-0 me-4">
      <div class="form-group row">
        <label for="writing2" class="col-sm-4 col-form-label p-0">
          نوشتن
        </label>
        <div class="col-sm-8 pe-0 small">
          <select
            :disabled="skills.langs[2].langs"
            class="form-select form-select-sm w-100 pe-4"
            aria-label=".form-select-sm example"
            id="writing2"
            v-model="skills.langs[2].writing"
          >
            <option disabled value="" class="">--انتخاب--</option>
            <option value="خوب">خوب</option>
            <option value="متوسط">متوسط</option>
            <option value="ضعیف">ضعیف</option>
            <option value="بی اطلاع">بی اطلاع</option>
          </select>
        </div>
      </div>
    </div>
  </div>
  <div class="border-bottom"></div>
  <div class="row txt-color">
    <div class="col-4 px-0 me-3">
      آیا تاکنون در آزمون IELTS یا TOFEL شرکت نموده اید؟
    </div>
    <div class="col-4 px-0">
      <div class="row">
        <div class="col-12">
          <div class="form-check">
            <label class="form-check-label px-4" for="yesTI"> بله </label>
            <input
              class="form-check-input"
              type="radio"
              name="TI"
              id="yesTI"
              value="بله"
              v-model="skills.TI"
              style="position: absolute; right: 36.5%"
            />
            <label class="form-check-label px-4" for="noTI"> خیر </label>
            <input
              class="form-check-input"
              type="radio"
              name="TI"
              id="noTI"
              value="خیر"
              v-model="skills.TI"
              style="position: absolute; right: 44.5%"
            />
          </div>
        </div>
        <div class="col-12 px-0 mb-3">
          <div class="form-group row me-3">
            <label for="TI_mark" class="col-sm-5 col-form-label p-0">
              سطح و نتیجه آزمون
            </label>
            <div class="col-sm-7 pe-0 small">
              <input
                type="text"
                class="form-control-file w-100"
                id="TI_mark"
                v-model="skills.TI_mark"
              />
            </div>
          </div>
        </div>
        <div class="col-12 px-0">
          <div class="form-group row me-3">
            <label for="TI_date" class="col-sm-5 col-form-label p-0">
              تاریخ آزمون
            </label>
            <div class="col-sm-7 pe-0 small">
              <input
                type="text"
                class="form-control-file w-100"
                id="TI_date"
                v-model="skills.TI_date"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="border-bottom"></div>
  <div class="row txt-color">
    <div class="col-6 px-0 me-3">
      <div class="row">
        <div class="col-12">
          آیا دارای دانش و مهارت لازم برای کار با رایانه و نرم افزارهای اداری
          هستید؟<span class="text-danger fs-4">
                  *
                </span>
        </div>
        <div class="col-12">
          آیا تاکنون آزمون گواهینامه کاربری کامپيوتر (ICDL) را گذرانده اید؟<span class="text-danger fs-4">
                  *
                </span>
        </div>
        <div class="col-12">
          آیا دارای گواهینامه بین‌المللی در زمینه فناوری اطلاعات و ارتباط (ICT)
          هستید؟<span class="text-danger fs-4">
                  *
                </span>
        </div>
      </div>
    </div>
    <div class="col-3 px-0">
      <div class="row mb-2">
        <div class="col-12 mb-3">
          <div class="form-check">
            <label class="form-check-label px-4" for="yesedu_pc"> بله </label>
            <input
              class="form-check-input"
              type="radio"
              name="edu_pc"
              id="yesedu_pc"
              value="بله"
              v-model="skills.edu_pc"
              style="position: absolute; right: 53%"
            />
            <label class="form-check-label px-4" for="noedu_pc"> خیر </label>
            <input
              class="form-check-input"
              type="radio"
              name="edu_pc"
              id="noedu_pc"
              value="خیر"
              v-model="skills.edu_pc"
              style="position: absolute; right: 61%"
            />
          </div>
        </div>
        <div class="col-12 mb-3">
          <div class="form-check">
            <label class="form-check-label px-4" for="yesicdl"> بله </label>
            <input
              class="form-check-input"
              type="radio"
              name="icdl"
              id="yesicdl"
              value="بله"
              v-model="skills.icdl"
              style="position: absolute; right: 53%"
            />
            <label class="form-check-label px-4" for="noicdl"> خیر </label>
            <input
              class="form-check-input"
              type="radio"
              name="icdl"
              id="noicdl"
              value="خیر"
              v-model="skills.icdl"
              style="position: absolute; right: 61%"
            />
          </div>
        </div>
        <div class="col-12 mb-3">
          <div class="form-check">
            <label class="form-check-label px-4" for="yesict"> بله </label>
            <input
              class="form-check-input"
              type="radio"
              name="ict"
              id="yesict"
              value="بله"
              v-model="skills.ict"
              style="position: absolute; right: 53%"
            />
            <label class="form-check-label px-4" for="noict"> خیر </label>
            <input
              class="form-check-input"
              type="radio"
              name="ict"
              id="noict"
              value="خیر"
              v-model="skills.ict"
              style="position: absolute; right: 61%"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <my-legend title="تعیین میزان مهارت کاربردی با نرم افزارهای اداری:">
    <div class="row txt-color mb-3">
      <div class="col-8 p-0 me-4 mb-3">
        <div class="form-group row">
          <label for="win" class="col-sm-8 col-form-label p-0">
            سیستم عامل ویندوز، مفاهيم تئوري استفاده و مديريت فایل ها<span class="text-danger fs-4">
                  *
                </span>
          </label>
          <div class="col-sm-4 pe-0 small">
            <select
              class="form-select form-select-sm w-75 pe-4"
              aria-label=".form-select-sm example"
              id="win"
              v-model="skills.win"
            >
              <option disabled value="" class="">--انتخاب--</option>
              <option value="خوب">خوب</option>
              <option value="متوسط">متوسط</option>
              <option value="ضعیف">ضعیف</option>
              <option value="بی اطلاع">بی اطلاع</option>
            </select>
          </div>
        </div>
      </div>
      <div class="col-8 p-0 me-4 mb-3">
        <div class="form-group row">
          <label for="office" class="col-sm-8 col-form-label p-0">
            مجموعه نرم افزارهای Office شامل Word ،Excel، PowerPoint<span class="text-danger fs-4">
                  *
                </span>
          </label>
          <div class="col-sm-4 pe-0 small">
            <select
              class="form-select form-select-sm w-75 pe-4"
              aria-label=".form-select-sm example"
              id="office"
              v-model="skills.office"
            >
              <option disabled value="" class="">--انتخاب--</option>
              <option value="خوب">خوب</option>
              <option value="متوسط">متوسط</option>
              <option value="ضعیف">ضعیف</option>
              <option value="بی اطلاع">بی اطلاع</option>
            </select>
          </div>
        </div>
      </div>
      <div class="col-8 p-0 me-4 mb-3">
        <div class="form-group row">
          <label for="outlook" class="col-sm-8 col-form-label p-0">
            خدمات اطلاعاتي شبکه - اينترنت و پست الکترونيک Outlook<span class="text-danger fs-4">
                  *
                </span>
          </label>
          <div class="col-sm-4 pe-0 small">
            <select
              class="form-select form-select-sm w-75 pe-4"
              aria-label=".form-select-sm example"
              id="outlook"
              v-model="skills.outlook"
            >
              <option disabled value="" class="">--انتخاب--</option>
              <option value="خوب">خوب</option>
              <option value="متوسط">متوسط</option>
              <option value="ضعیف">ضعیف</option>
              <option value="بی اطلاع">بی اطلاع</option>
            </select>
          </div>
        </div>
      </div>
      <div class="col-8 p-0 me-4 mb-3">
        <div class="form-group row">
          <label for="m_project" class="col-sm-8 col-form-label p-0">
            مدیریت و کنترل پروژه با نرم افزار Microsoft Office Project<span class="text-danger fs-4">
                  *
                </span>
          </label>
          <div class="col-sm-4 pe-0 small">
            <select
              class="form-select form-select-sm w-75 pe-4"
              aria-label=".form-select-sm example"
              id="m_project"
              v-model="skills.m_project"
            >
              <option disabled value="" class="">--انتخاب--</option>
              <option value="خوب">خوب</option>
              <option value="متوسط">متوسط</option>
              <option value="ضعیف">ضعیف</option>
              <option value="بی اطلاع">بی اطلاع</option>
            </select>
          </div>
        </div>
      </div>
      <div class="col-8 p-0 me-4">
        <div class="form-group row">
          <label for="software" class="col-sm-3 col-form-label p-0">
            آشنایی با نرم افزار
          </label>
          <div class="col-sm-4 pe-0 small">
            <input
              type="text"
              class="form-control-file w-100"
              id="software"
              v-model="skills.software"
            />
          </div>
          <div class="col-sm-1"></div>
          <div class="col-sm-4 pe-0 small">
            <select
              class="form-select form-select-sm w-75 pe-4"
              aria-label=".form-select-sm example"
              id="m_project"
              v-model="skills.m_project"
            >
              <option disabled value="" class="">--انتخاب--</option>
              <option value="خوب">خوب</option>
              <option value="متوسط">متوسط</option>
              <option value="ضعیف">ضعیف</option>
              <option value="بی اطلاع">بی اطلاع</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </my-legend>
</template>

<script>
import { ref } from "@vue/reactivity";
import MyLegend from "./MyLegend.vue";
export default {
  components: { MyLegend },
  setup() {
    const skills = ref({
      langs: [
        {
          langs: "انگلیسی",
          speaking: "",
          reading: "",
          writing: "",
        },
        {
          langs: "",
          speaking: "",
          reading: "",
          writing: "",
        },
        {
          langs: "",
          speaking: "",
          reading: "",
          writing: "",
        },
      ],
      TI: "خیر",
      TI_mark: "",
      TI_date: "",
      edu_pc: "خیر",
      icdl: "خیر",
      ict: "خیر",
      win: "",
      office: "",
      outlook: "",
      m_project: "",
      software: "",
    });
    return {
      skills,
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
.border-bottom {
  height: 2px;
  width: 100%;
  margin: 20px auto;
  background: rgb(13, 66, 146);
}
</style>
