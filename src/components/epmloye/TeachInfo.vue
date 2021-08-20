<template>
  <div class="txt-color">
    <div class="p-1 text-light" style="background: rgb(14, 73, 161)">
      <span>
        <span class="font-weight:800">توجه : </span> درصورتی که دارای سوابق
        آموزشی نمی باشید این قسمت را حذف کنید.
      </span>
    </div>
    <table
      class="table table-borderless align-top text-end txt-color"
      style="line-height: 9px"
    >
      <thead>
        <tr>
          <td scope="col" style="width: 30%" class="align-top">
            عنوان گواهینامه <span class="text-danger fs-4"> * </span>
          </td>
          <td scope="col" style="width: 10%" class="align-top">
            سال اخذ <span class="text-danger fs-4"> </span>
          </td>
          <td scope="col" style="width: 15%" class="align-top">
            نام کامل موسسه<span class="text-danger fs-4"> </span>
          </td>
          <td scope="col" style="width: 15%" class="align-top">
            محل اخذ<span class="text-danger fs-4"> </span>
          </td>
          <td scope="col" style="width: 15%" class="align-top">
            مدت اعتبار<span class="text-danger fs-4"> </span>
          </td>
          <td scope="col" style="width: 8%"></td>
        </tr>
      </thead>
      <tbody>
        <template v-for="item in Teaching_items" :key="item.id">
          <tr v-if="item.status">
            <td style="width: 30%" class="align-middle">
              <input
                type="text"
                class="form-control w-100"
                v-model="item.title"
                required
              />
            </td>
            <td style="width: 10%" class="align-middle">
              <input
                type="text"
                class="form-control w-100"
                v-model="item.year"
              />
            </td>
            <td style="width: 15%" class="align-middle">
              <input
                type="text"
                class="form-control w-100"
                v-model="item.academy_name"
              />
            </td>
            <td style="width: 15%" class="align-middle">
              <input
                type="text"
                class="form-control w-100"
                v-model="item.lacate_det"
              />
            </td>
            <td style="width: 15%" class="align-middle">
              <input
                type="text"
                class="form-control w-100"
                v-model="item.accepted_time"
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
      افزودن سابقه آموزشی
    </button>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
export default {
  setup(props,context) {
    const Teaching_items = reactive([
      {
        id: 0,
        status: "false",
        title: "",
        year: "",
        academy_name: "",
        lacate_det: "",
        accepted_time: "",
      },
    ]);
    const Education_num = ref(1);
    function addEducation() {
      Teaching_items.push({
        id: Education_num.value++,
        status: true,
      });
    }
    function Education_status_fn(id) {
      Teaching_items[id].status = false;
    }
    context.emit('Teaching_items',Teaching_items)
    return {
      Teaching_items,
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
