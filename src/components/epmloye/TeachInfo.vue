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
        <template v-for="item in Education_items" :key="item.id">
          <tr v-if="item.status">
            <td style="width: 30%" class="align-middle">
              <input type="text" class="form-control-file w-100" />
            </td>
            <td style="width: 10%" class="align-middle">
              <input type="text" class="form-control-file w-100" />
            </td>
            <td style="width: 15%" class="align-middle">
              <input type="text" class="form-control-file w-100" />
            </td>
            <td style="width: 15%" class="align-middle">
              <input type="text" class="form-control-file w-100" />
            </td>
            <td style="width: 15%" class="align-middle">
              <input type="text" class="form-control-file w-100" />
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
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const Education_items = ref([{}]);
    const Education_num = ref(1);
    function addEducation() {
      Education_items.value.push({
        id: Education_num.value++,
        status: true,
      });
    }
    function Education_status_fn(id) {
      Education_items.value[id].status = false;
    }
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
