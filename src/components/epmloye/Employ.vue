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
              <th scope="col" tyle="width: 15%">عنوان شغلی</th>
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
                  v-model="job_selected"
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
                  v-model="job_selected"
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
                v-model="type_employ"
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
                v-model="type_underestand"
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
            <my-legend title="اطلاعات معرف">
              <div class="form-group row">
                <label for="introduced_name" class="col-sm-2 col-form-label"
                  >نام و نام خانوادگی معرف</label
                >
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="introduced_name"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="introduced_job" class="col-sm-2 col-form-label"
                  >شغل یا سمت معرف</label
                >
                <div class="col-sm-10">
                  <input type="text" class="form-control" id="introduced_job" />
                </div>
              </div>

              <div class="row txt-color">
                <div class="col-5">
                  <label for="introduced_name">نام و نام خانوادگی معرف</label
                  ><br />
                  <label for="introduced_job">شغل یا سمت معرف</label>
                </div>
                <div class="col-7">
                  <input
                    class="bg-secondary form-control mb-2"
                    type="text"
                    v-model="introduced.name"
                    id="introduced_name"
                  />
                  <input
                    class="bg-secondery form-control"
                    type="text"
                    v-model="introduced.job"
                    id="introduced_job"
                  />
                </div>
              </div>
              <div
                class="input-group ps-4 d-flex justify-content-between"
              ></div>
              <div class="input-group d-flex justify-content-between"></div>
              <input
                class="bg-secondery"
                type="text"
                v-model="introduced.name"
              />
            </my-legend>
          </div>
          <div class="col-6">
            <my-legend title="اطلاعات آگهی"> </my-legend>
          </div>
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
    const job_selected = ref("");
    const type_employ = ref("");
    const type_underestand = ref("");
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
      job_selected,
      type_employ,
      type_underestand,
      introduced,
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
</style>
