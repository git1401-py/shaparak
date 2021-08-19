<template>
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
        <label for="employ_father_name" class="col-sm-4 col-form-label p-0">
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
        <label for="employ_meli_number" class="col-sm-4 col-form-label p-0">
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
        <label for="employ_birth_lacate" class="col-sm-4 col-form-label p-0">
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
        <label for="employ_nezam_vazife" class="col-sm-4 col-form-label p-0">
          وضعیت نظام وظیفه
        </label>
        <div class="col-sm-8 pe-0 small">
          <select
            class="form-select form-select-sm w-75 px-4"
            aria-label=".form-select-sm example"
            id="employ_nezam_vazife"
            v-model="employ.nezam_vazife"
          >
            <option disabled value="" class="">--وضعیت نظام وظیفه--</option>
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
        <label for="employ_address_code" class="col-sm-4 col-form-label p-0">
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
        <label for="employ_address" class="col-sm-4 col-form-label p-0 pt-3">
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
        <label for="employ_shenasname_num" class="col-sm-4 col-form-label p-0">
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
        <label for="employ_birth_date" class="col-sm-4 col-form-label p-0">
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
        <label for="employ_single_maried" class="col-sm-4 col-form-label p-0">
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
        <label for="employ_natinality" class="col-sm-4 col-form-label p-0">
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
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const employ = ref({
      
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
    return {
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
}</style>
