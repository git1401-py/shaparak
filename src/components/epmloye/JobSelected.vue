<template>
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
          <option disabled value="" class="">--انتخاب نوع همکاری--</option>
          <option value="تمام وقت">تمام وقت</option>
          <option value="نیمه وقت">نیمه وقت</option>
          <option value="اقماری">اقماری</option>
          <option value="همه موارد">همه موارد</option>
        </select>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <span
          >نحوه اطلاع از فراخوان و ارسال درخواست<span class="text-danger fs-4">
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
          <option value="از طریق وب سایت شاپرک">از طریق وب سایت شاپرک</option>
        </select>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-6">
      <my-legend title="اطلاعات معرف" class="ps-5 pe-4">
        <div class="form-group row txt-color">
          <label for="introduced_name" class="col-sm-5 p-0 col-form-label">
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
          <label for="introduced_tell" class="col-sm-5 p-0 col-form-label">
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
          <label for="introduced_relative" class="col-sm-5 p-0 col-form-label">
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
</template>

<script>
import {  ref } from "@vue/reactivity";
export default {
    props:['titles'],
  setup() {
    const employ = ref({
      date: "",
      underestand: "",
      time_job: "",
      type_job: "",
      name_newspaper: "",
    });
    const introduced = ref({
      name: "",
      job: "",
      tell: "",
      address: "",
      relative: "",
    });


    return {
      introduced,
      employ,
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
