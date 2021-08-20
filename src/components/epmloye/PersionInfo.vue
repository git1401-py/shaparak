<template>
  <div class="row txt-color">
    <div class="col-6">
      <div class="form-group row me-3 txt-color">
        <label for="persion_info_name" class="col-sm-4 col-form-label p-0">
          نام <span class="text-danger fs-4"> * </span>
        </label>
        <div class="col-sm-8 pe-0 small">
          <input
            type="text"
            class="form-control w-75"
            id="persion_info_name"
            v-model="persion_info.name"
             required
          />
        </div>
      </div>
      <div class="form-group row me-3 txt-color">
        <label
          for="persion_info_father_name"
          class="col-sm-4 col-form-label p-0"
        >
          نام پدر <span class="text-danger fs-4"> * </span>
        </label>
        <div class="col-sm-8 pe-0 small">
          <input
            type="text"
            class="form-control w-75"
            id="persion_info_father_name"
            v-model="persion_info.father_name"
             required
          />
        </div>
      </div>
      <div class="form-group row me-3 txt-color">
        <label
          for="persion_info_meli_number"
          class="col-sm-4 col-form-label p-0"
        >
          کد ملی <span class="text-danger fs-4"> * </span>
        </label>
        <div class="col-sm-8 pe-0 small">
          <input
            type="text"
            class="form-control w-75"
            id="persion_info_meli_number"
            v-model="persion_info.meli_number"
             required
          />
        </div>
      </div>
      <div class="form-group row me-3 txt-color">
        <label
          for="persion_info_birth_lacate"
          class="col-sm-4 col-form-label p-0"
        >
          محل تولد <span class="text-danger fs-4"> * </span>
        </label>
        <div class="col-sm-8 pe-0 small">
          <input
            type="text"
            class="form-control w-75"
            id="persion_info_birth_lacate"
            v-model="persion_info.birth_lacate"
             required
          />
        </div>
      </div>
      <div class="form-group row me-3 mb-3 txt-color">
        <label
          for="persion_info_nezam_vazife"
          class="col-sm-4 col-form-label p-0"
        >
          وضعیت نظام وظیفه
        </label>
        <div class="col-sm-8 pe-0 small">
          <select
            class="form-select form-select-sm w-75 px-4"
            aria-label=".form-select-sm example"
            id="persion_info_nezam_vazife"
            v-model="persion_info.nezam_vazife"
          >
            <option disabled value="" class="">--وضعیت نظام وظیفه--</option>
            <option value="مشمول نبودم">مشمول نبودم</option>
            <option value=" اتمام">اتمام</option>
            <option value="ندارم"></option>
          </select>
        </div>
      </div>
      <div class="form-group row me-3 txt-color">
        <label for="persion_info_own_child" class="col-sm-4 col-form-label p-0">
          تعداد افراد تحت تکفل<span class="text-danger fs-4"> </span>
        </label>
        <div class="col-sm-8 pe-0 small">
          <input
            type="text"
            class="form-control w-75"
            id="persion_info_own_child"
            v-model="persion_info.own_child"
          />
        </div>
      </div>
      <div class="form-group row me-3 txt-color">
        <label
          for="persion_info_mobile"
          class="col-sm-4 col-form-label p-0"
        >
          موبایل <span class="text-danger fs-4"> * </span>
        </label>
        <div class="col-sm-8 pe-0 small">
          <input
            type="text"
            class="form-control w-75"
            id="persion_info_mobile"
            v-model="persion_info.mobile"
             required
          />
        </div>
      </div>
      <div class="form-group row me-3 txt-color">
        <label
          for="persion_info_address_code"
          class="col-sm-4 col-form-label p-0"
        >
          کد پستی<span class="text-danger fs-4"> * </span>
        </label>
        <div class="col-sm-8 pe-0 small">
          <input
            type="text"
            class="form-control w-75"
            id="persion_info_address_code"
            v-model="persion_info.address_code"
             required
          />
        </div>
      </div>
      <div class="form-group row me-3 txt-color">
        <label
          for="persion_info_address"
          class="col-sm-4 col-form-label p-0 pt-3"
        >
          آدرس پستی<span class="text-danger fs-4"> * </span>
        </label>
        <div class="col-sm-8 pe-0 small">
          <textarea
            rows="2"
            class="form-control w-100"
            id="persion_info_address"
            v-model="persion_info.address"
             required
          />
        </div>
      </div>
    </div>
    <div class="col-6">
      <div class="form-group row me-3 txt-color">
        <label for="persion_info_family" class="col-sm-4 col-form-label p-0">
          نام خانوادگی<span class="text-danger fs-4"> * </span>
        </label>
        <div class="col-sm-8 pe-0 small">
          <input
            type="text"
            class="form-control w-75"
            id="persion_info_family"
            v-model="persion_info.family"
             required
          />
        </div>
      </div>
      <div class="form-group row me-3 txt-color">
        <label
          for="persion_info_shenasname_num"
          class="col-sm-4 col-form-label p-0"
        >
          شماره شناسنامه<span class="text-danger fs-4"> * </span>
        </label>
        <div class="col-sm-8 pe-0 small">
          <input
            type="text"
            class="form-control w-75"
            id="persion_info_shenasname_num"
            v-model="persion_info.shenasname_num"
             required
          />
        </div>
      </div>
      <div class="form-group row me-3 txt-color">
        <label
          for="persion_info_birth_date"
          class="col-sm-4 col-form-label p-0"
        >
          تاریخ تولد<span class="text-danger fs-4"> * </span>
        </label>
        <div class="col-sm-8 pe-0 small">
          <input
            type="text"
            class="form-control w-75"
            id="persion_info_birth_date"
            v-model="persion_info.birth_date"
             required
          />
        </div>
      </div>
      <div class="form-group row me-3 txt-color">
        <label for="persion_info_male" class="col-sm-4 col-form-label p-0">
          جنسیت<span class="text-danger fs-4"> * </span>
        </label>
        <div class="col-sm-8 pe-0 small">
          <select
            class="form-select form-select-sm w-50 px-4"
            aria-label=".form-select-sm example"
            id="persion_info_male"
            v-model="persion_info.male"
             required
          >
            <option disabled value="" class="">--انتخاب--</option>
            <option value="مرد">مرد</option>
            <option value="زن">زن</option>
          </select>
        </div>
      </div>
      <div class="form-group row me-3 txt-color">
        <label
          for="persion_info_single_maried"
          class="col-sm-4 col-form-label p-0"
        >
          جنسیت<span class="text-danger fs-4"> * </span>
        </label>
        <div class="col-sm-8 pe-0 small">
          <select
            class="form-select form-select-sm w-50 px-4"
            aria-label=".form-select-sm example"
            id="persion_info_single_maried"
            v-model="persion_info.single_maried"
             required
          >
            <option disabled value="" class="">--انتخاب--</option>
            <option value="متاهل">متاهل</option>
            <option value="مجرد">مجرد</option>
          </select>
        </div>
      </div>
      <div class="form-group row me-3 txt-color">
        <label for="persion_info_tell" class="col-sm-4 col-form-label p-0">
          شماره تماس<span class="text-danger fs-4"> * </span>
        </label>
        <div class="col-sm-8 pe-0 small">
          <input
            type="text"
            class="form-control w-75"
            id="persion_info_tell"
            v-model="persion_info.tell"
             required
          />
        </div>
      </div>
      <div class="form-group row me-3 txt-color">
        <label
          for="persion_info_natinality"
          class="col-sm-4 col-form-label p-0"
        >
          ملیت<span class="text-danger fs-4">  </span>
        </label>
        <div class="col-sm-8 pe-0 small">
          <select
            class="form-select form-select-sm w-50 px-4"
            aria-label=".form-select-sm example"
            id="persion_info_natinality"
            v-model="persion_info.natinality"
          >
            <option disabled value="" class="">--انتخاب--</option>
            <option value="ایرانی">ایرانی</option>
            <option value="غیر ایرانی">غیر ایرانی</option>
          </select>
        </div>
      </div>
      <div class="form-group row me-3 txt-color">
        <label for="persion_info_mail" class="col-sm-4 col-form-label p-0">
          پست الکترونیکی<span class="text-danger fs-4">  </span>
        </label>
        <div class="col-sm-8 pe-0 small">
          <input
            type="text"
            class="form-control w-75"
            id="persion_info_mail"
            v-model="persion_info.mail"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
export default {
  setup(props, context) {
    const persion_info = reactive({
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
    context.emit("persion_info", persion_info);
    return {
      persion_info,
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
