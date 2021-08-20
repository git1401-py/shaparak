<template>
  <div class="txt-color">
    <div class="p-1 text-light" style="background: rgb(14, 73, 161)">
      <span>
        <span class="font-weight:800">توجه : </span> برای ثبت درخواست باید حداقل
        یک سابقه تحصیلی وارد شود.
      </span>
    </div>
    <table
      class="table table-borderless align-top text-end txt-color"
      style="line-height: 16px"
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
          <td scope="col" style="width: 8%" class="align-top">
            معدل<span class="text-danger fs-4"> * </span>
          </td>
          <td scope="col" style="width: 15%" class="align-top">
            دستاوردهای ممتاز تحصیلی<span class="text-danger fs-4"> </span>
          </td>
          <td scope="col" style="width: 8%"></td>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in Education_items" :key="item.id">
          <tr v-if="item.status">
            <td style="width: 15%" class="align-middle">
              <input
                type="text"
                class="form-control w-100"
                v-model="item.academy_name"
                required
              />
            </td>
            <td style="width: 15%" class="align-middle">
              <select
                class="form-select form-select-sm w-100 px-4"
                aria-label=".form-select-sm example"
                v-model="item.state"
                required
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
            <td style="width: 15%" class="align-middle">
              <input
                type="text"
                class="form-control w-100"
                v-model="item.edu_name"
                required
              />
            </td>
            <td style="width: 15%" class="align-middle">
              <select
                class="form-select form-select-sm w-100 px-4"
                aria-label=".form-select-sm example"
                v-model="item.edu_status"
                required
              >
                <option disabled value="">--انتخاب--</option>
                <option value="فارغ تحصیل">فارغ تحصیل</option>
                <option value="در حال تحصیل">در حال تحصیل</option>
              </select>
            </td>
            <td style="width: 5%" class="align-middle">
              <input
                type="text"
                class="form-control w-100"
                v-model="item.year"
              />
            </td>
            <td style="width: 5%" class="align-middle">
              <input
                type="text"
                class="form-control w-100"
                v-model="item.mounth"
              />
            </td>
            <td style="width: 8%" class="align-middle">
              <input
                type="text"
                class="form-control w-100"
                v-model="item.mark"
                required
              />
            </td>
            <td style="width: 15%" class="align-middle">
              <textarea
                rows="2"
                class="form-control w-100"
                v-model="item.degrees"
              />
            </td>
            <td style="width: 8%" class="align-middle">
              <button
                @click="Education_status_fn(item.id)"
                class="btn btn-danger w-100"
              >
                حذف
              </button>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <button @click="addEducation" class="btn btn-primary btn-sm px-3 small">
      افزودن سابقه تحصیلی
    </button>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
export default {
  setup(props, context) {
    const Education_items = reactive([
      {
        id: 1,
        status: true,
        academy_name: "",
        state: "",
        edu_name: "",
        edu_status: "",
        year: "",
        mounth: "",
        mark: "",
        degrees: "",
      },
    ]);
    const Education_num = ref(1);
    function addEducation() {
      Education_items.push({
        id: Education_num.value++,
        status: true,
      });
    }
    function Education_status_fn(id) {
      Education_items[id].status = false;
    }
    context.emit("Education_items", Education_items);
    return {
      Education_items,
      addEducation,
      Education_status_fn,
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
