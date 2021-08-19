<template>
  <div class="my-container p-md-0 p-lg-5 pt-lg-0 text-end">
    <div class="my-contain small p-4">
      <my-legend title="آگهی استخدام">
        <table
          class="table table-borderless align-middle text-end"
          style="border: 1px solid #444; border-radius: 4px"
        >
          <thead>
            <tr>
              <th colspan="4">
                شرکت شبکه الکترونیکی پرداخت کارت ( شاپرک) از واجدین شرایط به شرح
                ذیل در شهر تهران دعوت به همکاری می نماید.
              </th>
            </tr>
            <tr>
              <th scope="col">ردیف</th>
              <th scope="col" style="width: 15%">عنوان شغلی</th>
              <th scope="col" style="width: 18%">عنوان و رشته تحصیلی</th>
              <th scope="col">شرایط اختصاصی</th>
            </tr>
          </thead>
          <tbody class="txt-color">
            <tr v-for="job in titles" :key="job.id">
              <td>{{ job.id + 1 }}</td>
              <td style="width: 15%">
                {{ job.name_job }}
              </td>
              <td style="width: 18%">{{ job.name_education }}</td>
              <td>
                <ul class="p-2">
                  <li v-for="(sub, index) in job.needs" :key="index">
                    {{ sub }}
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </my-legend>
      <my-legend title="شغل انتخابی">
        <div class="row txt-color">
          <div class="col-6">
            <template v-for="job in titles" :key="job.id">
              <div class="form-check" v-if="job.id <= 8">
                <label class="form-check-label px-4" :for="job.id">
                  {{ job.name_job }}
                </label>
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  :id="job.id"
                  :value="job.name_job"
                  v-model="employ.type_job"
                  style="position: absolute; right: 3%"
                />
              </div>
            </template>
          </div>
          <div class="col-6">
            <template v-for="job in titles" :key="job.id">
              <div class="form-check" v-if="job.id > 8">
                <label class="form-check-label px-4" :for="job.id">
                  {{ job.name_job }}
                </label>
                <input
                  class="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  :id="job.id"
                  :value="job.name_job"
                  v-model="employ.type_job"
                  style="position: absolute; right: 52%"
                />
              </div>
            </template>
          </div>
        </div>
        <div class="row txt-color mb-3">
          <div class="col-6">
            <div class="d-flex justify-content-between align-items-center">
              <span
                >متقاضی چه نوع همکاری هستید؟<span class="text-danger fs-4">
                  *
                </span></span
              >

              <select
                class="form-select form-select-sm w-50 px-4"
                aria-label=".form-select-sm example"
                v-model="employ.time_job"
              >
                <option disabled value="" class="">
                  --انتخاب نوع همکاری--
                </option>
                <option value="تمام وقت">تمام وقت</option>
                <option value="نیمه وقت">نیمه وقت</option>
                <option value="اقماری">اقماری</option>
                <option value="همه موارد">همه موارد</option>
              </select>
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <span
                >نحوه اطلاع از فراخوان و ارسال درخواست<span
                  class="text-danger fs-4"
                >
                  *
                </span></span
              >

              <select
                class="form-select form-select-sm px-4"
                aria-label=".form-select-sm example"
                style="width: 43%"
                v-model="employ.underestand"
              >
                <option disabled value="" class="">--انتخاب--</option>
                <option value="آگهی استخدام">آگهی استخدام</option>
                <option value="از طریق معرف">از طریق معرف</option>
                <option value="از طریق وب سایت شاپرک">
                  از طریق وب سایت شاپرک
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <my-legend title="اطلاعات معرف" class="ps-5 pe-4">
              <div class="form-group row txt-color">
                <label
                  for="introduced_name"
                  class="col-sm-5 p-0 col-form-label"
                >
                  نام و نام خانوادگی معرف<span class="text-danger fs-4">*</span>
                </label>
                <div class="col-sm-7 pe-0 mt-1 w-50">
                  <input
                    type="text"
                    class="form-control bg-lightgray ms-2"
                    id="introduced_name"
                    v-model="introduced.name"
                  />
                </div>
              </div>
              <div class="form-group row txt-color mb-2">
                <label for="introduced_job" class="col-sm-5 p-0 col-form-label">
                  شغل یا سمت معرف
                </label>
                <div class="col-sm-7 pe-0 mt-1 w-50">
                  <input
                    type="text"
                    class="form-control bg-lightgray"
                    id="introduced_job"
                    v-model="introduced.job"
                  />
                </div>
              </div>
              <div class="form-group row txt-color mb-2">
                <label
                  for="introduced_tell"
                  class="col-sm-5 p-0 col-form-label"
                >
                  شماره تماس
                </label>
                <div class="col-sm-7 pe-0 mt-1 w-50">
                  <input
                    type="text"
                    class="form-control bg-lightgray ms-2"
                    id="introduced_tell"
                    v-model="introduced.tell"
                  />
                </div>
              </div>
              <div class="form-group row txt-color mb-2">
                <label
                  for="introduced_address"
                  class="col-sm-5 p-0 pt-3 col-form-label"
                >
                  نشانی محل کار
                </label>
                <div class="col-sm-7 pe-0 mt-1">
                  <textarea
                    rows="1"
                    class="form-control bg-lightgray ms-2"
                    id="introduced_address"
                    v-model="introduced.address"
                  />
                </div>
              </div>
              <div class="form-group row txt-color">
                <label
                  for="introduced_relative"
                  class="col-sm-5 p-0 col-form-label"
                >
                  نسبت<span class="text-danger fs-4">*</span>
                </label>
                <div class="col-sm-7 pe-0 mt-1 w-50">
                  <input
                    type="text"
                    class="form-control bg-lightgray ms-2"
                    id="introduced_relative"
                    v-model="introduced.relative"
                  />
                </div>
              </div>
            </my-legend>
          </div>
          <div class="col-6">
            <my-legend title="اطلاعات آگهی" class="ps-5 pe-4">
              <div class="form-group row txt-color">
                <label for="employ_date" class="col-sm-5 p-0 col-form-label">
                  تاریخ پاسخ به آگهی استخدام
                </label>
                <div class="col-sm-7 pe-0 mt-1 w-50">
                  <input
                    type="text"
                    class="form-control bg-lightgray ms-2"
                    id="employ_date"
                    v-model="employ.date"
                  />
                </div>
              </div>
              <div class="form-group row txt-color mb-2">
                <label for="name_newspaper" class="col-sm-5 p-0 col-form-label">
                  نام جراید
                </label>
                <div class="col-sm-7 pe-0 mt-1 w-50">
                  <input
                    type="text"
                    class="form-control bg-lightgray"
                    id="name_newspaper"
                    v-model="employ.name_newspaper"
                  />
                </div>
              </div>
            </my-legend>
          </div>
        </div>
      </my-legend>
      <my-legend title="بارگذاری رزومه">
        <div style="border: 1px solid #000; border-radius: 5px">
          <div class="form-group row me-3 txt-color">
            <label for="employ_CV" class="col-sm-2 col-form-label p-0">
              رزومه پیوست<span class="text-danger fs-4"> * </span>
            </label>
            <div class="col-sm-2 pe-0 small">
              <input type="file" class="form-control-file" id="employ_CV" />
            </div>
          </div>
        </div>
      </my-legend>
      <my-legend title="مشخصات فردی">
        <div class="row txt-color">
          <div class="col-6">
            <div class="form-group row me-3 txt-color">
              <label for="employ_name" class="col-sm-4 col-form-label p-0">
                نام <span class="text-danger fs-4"> * </span>
              </label>
              <div class="col-sm-8 pe-0 small">
                <input
                  type="text"
                  class="form-control-file w-75"
                  id="employ_name"
                  v-model="employ.name"
                />
              </div>
            </div>
            <div class="form-group row me-3 txt-color">
              <label
                for="employ_father_name"
                class="col-sm-4 col-form-label p-0"
              >
                نام پدر <span class="text-danger fs-4"> * </span>
              </label>
              <div class="col-sm-8 pe-0 small">
                <input
                  type="text"
                  class="form-control-file w-75"
                  id="employ_father_name"
                  v-model="employ.father_name"
                />
              </div>
            </div>
            <div class="form-group row me-3 txt-color">
              <label
                for="employ_meli_number"
                class="col-sm-4 col-form-label p-0"
              >
                کد ملی <span class="text-danger fs-4"> * </span>
              </label>
              <div class="col-sm-8 pe-0 small">
                <input
                  type="text"
                  class="form-control-file w-75"
                  id="employ_meli_number"
                  v-model="employ.meli_number"
                />
              </div>
            </div>
            <div class="form-group row me-3 txt-color">
              <label
                for="employ_birth_lacate"
                class="col-sm-4 col-form-label p-0"
              >
                محل تولد <span class="text-danger fs-4"> * </span>
              </label>
              <div class="col-sm-8 pe-0 small">
                <input
                  type="text"
                  class="form-control-file w-75"
                  id="employ_birth_lacate"
                  v-model="employ.birth_lacate"
                />
              </div>
            </div>
            <div class="form-group row me-3 mb-3 txt-color">
              <label
                for="employ_nezam_vazife"
                class="col-sm-4 col-form-label p-0"
              >
                وضعیت نظام وظیفه
              </label>
              <div class="col-sm-8 pe-0 small">
                <select
                  class="form-select form-select-sm w-75 px-4"
                  aria-label=".form-select-sm example"
                  id="employ_nezam_vazife"
                  v-model="employ.nezam_vazife"
                >
                  <option disabled value="" class="">
                    --وضعیت نظام وظیفه--
                  </option>
                  <option value="مشمول نبودم">مشمول نبودم</option>
                  <option value=" اتمام">اتمام</option>
                  <option value="ندارم"></option>
                </select>
              </div>
            </div>
            <div class="form-group row me-3 txt-color">
              <label for="employ_own_child" class="col-sm-4 col-form-label p-0">
                تعداد افراد تحت تکفل<span class="text-danger fs-4"> </span>
              </label>
              <div class="col-sm-8 pe-0 small">
                <input
                  type="text"
                  class="form-control-file w-75"
                  id="employ_own_child"
                  v-model="employ.own_child"
                />
              </div>
            </div>
            <div class="form-group row me-3 txt-color">
              <label
                for="employ_address_code"
                class="col-sm-4 col-form-label p-0"
              >
                کد پستی<span class="text-danger fs-4"> * </span>
              </label>
              <div class="col-sm-8 pe-0 small">
                <input
                  type="text"
                  class="form-control-file w-75"
                  id="employ_address_code"
                  v-model="employ.address_code"
                />
              </div>
            </div>
            <div class="form-group row me-3 txt-color">
              <label
                for="employ_address"
                class="col-sm-4 col-form-label p-0 pt-3"
              >
                آدرس پستی<span class="text-danger fs-4"> * </span>
              </label>
              <div class="col-sm-8 pe-0 small">
                <textarea
                  rows="2"
                  class="form-control-file w-100"
                  id="employ_address"
                  v-model="employ.address"
                />
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="form-group row me-3 txt-color">
              <label for="employ_family" class="col-sm-4 col-form-label p-0">
                نام خانوادگی<span class="text-danger fs-4"> * </span>
              </label>
              <div class="col-sm-8 pe-0 small">
                <input
                  type="text"
                  class="form-control-file w-75"
                  id="employ_family"
                  v-model="employ.family"
                />
              </div>
            </div>
            <div class="form-group row me-3 txt-color">
              <label
                for="employ_shenasname_num"
                class="col-sm-4 col-form-label p-0"
              >
                شماره شناسنامه<span class="text-danger fs-4"> * </span>
              </label>
              <div class="col-sm-8 pe-0 small">
                <input
                  type="text"
                  class="form-control-file w-75"
                  id="employ_shenasname_num"
                  v-model="employ.shenasname_num"
                />
              </div>
            </div>
            <div class="form-group row me-3 txt-color">
              <label
                for="employ_birth_date"
                class="col-sm-4 col-form-label p-0"
              >
                تاریخ تولد<span class="text-danger fs-4"> * </span>
              </label>
              <div class="col-sm-8 pe-0 small">
                <input
                  type="text"
                  class="form-control-file w-75"
                  id="employ_birth_date"
                  v-model="employ.birth_date"
                />
              </div>
            </div>
            <div class="form-group row me-3 txt-color">
              <label for="employ_male" class="col-sm-4 col-form-label p-0">
                جنسیت<span class="text-danger fs-4"> * </span>
              </label>
              <div class="col-sm-8 pe-0 small">
                <select
                  class="form-select form-select-sm w-50 px-4"
                  aria-label=".form-select-sm example"
                  id="employ_male"
                  v-model="employ.male"
                >
                  <option disabled value="" class="">--انتخاب--</option>
                  <option value="مرد">مرد</option>
                  <option value="زن">زن</option>
                </select>
              </div>
            </div>
            <div class="form-group row me-3 txt-color">
              <label
                for="employ_single_maried"
                class="col-sm-4 col-form-label p-0"
              >
                جنسیت<span class="text-danger fs-4"> * </span>
              </label>
              <div class="col-sm-8 pe-0 small">
                <select
                  class="form-select form-select-sm w-50 px-4"
                  aria-label=".form-select-sm example"
                  id="employ_single_maried"
                  v-model="employ.single_maried"
                >
                  <option disabled value="" class="">--انتخاب--</option>
                  <option value="متاهل">متاهل</option>
                  <option value="مجرد">مجرد</option>
                </select>
              </div>
            </div>
            <div class="form-group row me-3 txt-color">
              <label for="employ_tell" class="col-sm-4 col-form-label p-0">
                شماره تماس<span class="text-danger fs-4"> * </span>
              </label>
              <div class="col-sm-8 pe-0 small">
                <input
                  type="text"
                  class="form-control-file w-75"
                  id="employ_tell"
                  v-model="employ.tell"
                />
              </div>
            </div>
            <div class="form-group row me-3 txt-color">
              <label
                for="employ_natinality"
                class="col-sm-4 col-form-label p-0"
              >
                ملیت<span class="text-danger fs-4"> * </span>
              </label>
              <div class="col-sm-8 pe-0 small">
                <select
                  class="form-select form-select-sm w-50 px-4"
                  aria-label=".form-select-sm example"
                  id="employ_natinality"
                  v-model="employ.natinality"
                >
                  <option disabled value="" class="">--انتخاب--</option>
                  <option value="ایرانی">ایرانی</option>
                  <option value="غیر ایرانی">غیر ایرانی</option>
                </select>
              </div>
            </div>
            <div class="form-group row me-3 txt-color">
              <label for="employ_mail" class="col-sm-4 col-form-label p-0">
                پست الکترونیکی<span class="text-danger fs-4"> * </span>
              </label>
              <div class="col-sm-8 pe-0 small">
                <input
                  type="text"
                  class="form-control-file w-75"
                  id="employ_mail"
                  v-model="employ.mail"
                />
              </div>
            </div>
          </div>
        </div>
      </my-legend>
      <my-legend title="سوابق تحصیلی">
        <div class="txt-color">
          <div class="p-1 text-light" style="background: rgb(14, 73, 161)">
            <span>
              <span class="font-weight:800">توجه : </span> برای ثبت درخواست باید
              حداقل یک سابقه تحصیلی وارد شود.
            </span>
          </div>
          <table
            class="table table-borderless align-top text-end txt-color"
            style="line-height: 9px"
          >
            <thead>
              <tr>
                <td scope="col" style="width: 15%" class="align-top">
                  نام موسسه آموزشی <span class="text-danger fs-4"> * </span>
                </td>
                <td scope="col" style="width: 15%" class="align-top">
                  مدرک تحصیلی<span class="text-danger fs-4"> * </span>
                </td>
                <td scope="col" style="width: 15%" class="align-top">
                  رشته تحصیلی<span class="text-danger fs-4"> * </span>
                </td>
                <td scope="col" style="width: 15%" class="align-top">
                  وضعیت تحصیلی<span class="text-danger fs-4"> * </span>
                </td>
                <td scope="col" style="width: 5%" class="align-top">
                  سال<span class="text-danger fs-4"> </span>
                </td>
                <td scope="col" style="width: 5%" class="align-top">
                  ماه<span class="text-danger fs-4 align-top bg-danger"> </span>
                </td>
                <td scope="col" style="width: 7%" class="align-top">
                  معدل<span class="text-danger fs-4"> * </span>
                </td>
                <td scope="col" style="width: 15%" class="align-top">
                  دستاوردهای ممتاز تحصیلی<span class="text-danger fs-4"> </span>
                </td>
                <td scope="col" style="width: 8%"></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="width: 15%"  class="align-middle">
                  <input type="text" class="form-control-file w-100" />
                </td>
                <td style="width: 15%"  class="align-middle">
                  <select
                    class="form-select form-select-sm w-100 px-4"
                    aria-label=".form-select-sm example"
                  >
                    <option disabled value="" class="">--انتخاب--</option>
                    <option value="دیپلم">دیپلم</option>
                    <option value="کاردانی">کاردانی</option>
                    <option value="کارشناسی">کارشناسی</option>
                    <option value="کارشناسی ارشد">کارشناسی ارشد</option>
                    <option value="دکتری">دکتری</option>
                    <option value="فوق دکتری">فوق دکتری</option>
                  </select>
                </td>
                <td style="width: 15%"  class="align-middle">
                  <input type="text" class="form-control-file w-100" />
                </td>
                <td style="width: 15%"  class="align-middle">
                  <select
                    class="form-select form-select-sm w-100 px-4"
                    aria-label=".form-select-sm example"
                  >
                    <option disabled value="">--انتخاب--</option>
                    <option value="فارغ تحصیل">فارغ تحصیل</option>
                    <option value="در حال تحصیل">در حال تحصیل</option>
                  </select>
                </td>
                <td style="width: 5%"  class="align-middle">
                  <input type="text" class="form-control-file w-100" />
                </td>
                <td style="width: 5%"  class="align-middle">
                  <input type="text" class="form-control-file w-100" />
                </td>
                <td style="width: 7%"  class="align-middle">
                  <input type="text" class="form-control-file w-100" />
                </td>
                <td style="width: 15%"  class="align-middle">
                  <textarea rows="2" class="form-control-file w-100" />
                </td>
                <td style="width: 8%"  class="align-middle">
                  <button class="btn btn-danger w-100">حذف</button>
                </td>
              </tr>
            </tbody>
          </table>
          <button class="btn btn-primary btn-sm px-3 small">افزودن سابقه تحصیلی</button>
        </div>
      </my-legend>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import MyLegend from "./MyLegend";
export default {
  components: { MyLegend },
  setup() {
    const store = useStore();
    const employ = ref({
      date: "",
      underestand: "",
      time_job: "",
      type_job: "",
      name_newspaper: "",
      name: "",
      father_name: "",
      meli_number: "",
      birth_lacate: "",
      nezam_vazife: "",
      own_child: "",
      mobile: "",
      address: "",
      address_code: "",
      family: "",
      shenasname_num: "",
      birth_date: "",
      male: "",
      single_maried: "",
      tell: "",
      natinality: "",
      mail: "",
    });
    const introduced = ref({
      name: "",
      job: "",
      tell: "",
      address: "",
      relative: "",
    });
    fetchJobs();
    const titles = computed(() => store.getters["employ/allTitles"]);

    async function fetchJobs() {
      // loading.value = true;
      await store.dispatch("employ/fetchTitles");
      // loading.value = false;
    }
    return {
      titles,
      introduced,
      employ,
    };
  },
};
</script>

<style scoped>
.my-container {
  overflow: scroll;
  background: url("../../../public/img/bg-employ.png") repeat fixed center;
}
.my-contain {
  width: 820px;
  margin: 0px auto;
  background: rgb(245, 245, 245);
  border: 1px solid lightgray;
  border-radius: 4px;
}
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
.bg-lightgray {
  background: lightgray;
}
</style>
// $("input:not(:checkbox):not(:radio), select").addClass('myClass');
