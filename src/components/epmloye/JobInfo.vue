<template>
  <div class="txt-color">
    <div class="row">
      <div class="col-5">
        <div class="form-group row me-3 txt-color">
          <label for="Y_N" class="col-sm-6 col-form-label p-0">
            دارای سابقه شغلی می باشم <span class="text-danger fs-4"> * </span>
          </label>
          <div class="col-sm-6 pe-0 small">
            <select
              class="form-select form-select-sm w-50 pe-4"
              aria-label=".form-select-sm example"
              id="Y_N"
              v-model="Y_N"
            >
              <option value="بلی">بلی</option>
              <option value="خیر">خیر</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div v-if="Y_N == 'بلی'">
      <div class="row">
        <div class="col-5">
          <div class="form-group row me-3 txt-color">
            <label for="years_job" class="col-sm-6 col-form-label p-0">
              میزان سابقه کار به سال <span class="text-danger fs-4"> * </span>
            </label>
            <div class="col-sm-6 pe-0 small">
              <input
                type="text"
                class="form-control-file w-100"
                id="years_job"
                v-model="years_job"
              />
            </div>
          </div>
        </div>
      </div>
      <template v-for="item in Education_items" :key="item.id">
        <div v-if="item.status">
          <div class="row mb-4">
            <div class="col-3">
              <div class="form-group row me-3 txt-color">
                <label for="start_year" class="col-sm-5 col-form-label p-0">
                  سال شروع
                  <span class="text-danger fs-4"> * </span>
                </label>
                <div class="col-sm-2 pe-0 small">
                  <input
                    type="text"
                    class="form-control-file w-75"
                    id="start_year"
                    v-model="job_info[item.id].start_year"
                  />
                </div>
              </div>
              <div class="form-group row me-3 txt-color">
                <label for="end_year" class="col-sm-5 col-form-label p-0">
                  سال خاتمه
                  <span class="text-danger fs-4"> * </span>
                </label>
                <div class="col-sm-2 pe-0 small">
                  <input
                    type="text"
                    class="form-control-file w-75"
                    id="end_year"
                    v-model="job_info[item.id].end_year"
                  />
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="form-group row me-3 txt-color">
                <label for="start_mounth" class="col-sm-5 col-form-label p-0">
                  ماه شروع
                  <span class="text-danger fs-4"> * </span>
                </label>
                <div class="col-sm-2 pe-0 small">
                  <input
                    type="text"
                    class="form-control-file w-75"
                    id="start_mounth"
                    v-model="job_info[item.id].start_mounth"
                  />
                </div>
              </div>
              <div class="form-group row me-3 txt-color">
                <label for="end_mounth" class="col-sm-5 col-form-label p-0">
                  ماه خاتمه
                  <span class="text-danger fs-4"> * </span>
                </label>
                <div class="col-sm-2 pe-0 small">
                  <input
                    type="text"
                    class="form-control-file w-75"
                    id="end_mounth"
                    v-model="job_info[item.id].end_mounth"
                  />
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="form-group row me-3 txt-color">
                <label for="Last_incom" class="col-sm-5 col-form-label p-0">
                  آخرین حقوق
                  <span class="text-danger fs-4"> </span>
                </label>
                <div class="col-sm-7 pe-0 small">
                  <input
                    type="text"
                    class="form-control-file w-100"
                    id="Last_incom"
                    v-model="job_info[item.id].Last_incom"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <div class="form-group row me-3 txt-color">
                <label for="compony_name" class="col-sm-4 col-form-label p-0">
                  نام شرکت
                  <span class="text-danger fs-4"> * </span>
                </label>
                <div class="col-sm-8 px-0 small">
                  <input
                    type="text"
                    class="form-control-file w-100"
                    id="compony_name"
                    v-model="job_info[item.id].compony_name"
                  />
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="form-group row me-3 txt-color">
                <label for="compony_degree" class="col-sm-4 col-form-label p-0">
                  سمت
                  <span class="text-danger fs-4"> * </span>
                </label>
                <div class="col-sm-8 px-0 small">
                  <input
                    type="text"
                    class="form-control-file w-100"
                    id="compony_degree"
                    v-model="job_info[item.id].compony_degree"
                  />
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="form-group row me-3 txt-color">
                <label for="successes" class="col-sm-6 col-form-label p-0">
                  دستاوردها و موفقیت ها
                  <span class="text-danger fs-4"> </span>
                </label>
                <div class="col-sm-6 px-0 small">
                  <textarea
                    rows="2"
                    class="form-control-file w-100"
                    id="successes"
                    v-model="job_info[item.id].successes"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-3">
              <div class="form-group row me-3 txt-color">
                <label for="tell" class="col-sm-4 col-form-label p-0">
                  تلفن
                  <span class="text-danger fs-4"> </span>
                </label>
                <div class="col-sm-8 px-0 small">
                  <input
                    type="text"
                    class="form-control-file w-100"
                    id="tell"
                    v-model="job_info[item.id].tell"
                  />
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="form-group row me-3 txt-color">
                <label for="compony_job" class="col-sm-4 col-form-label p-0">
                  زمینه کار
                  <span class="text-danger fs-4"> </span>
                </label>
                <div class="col-sm-8 px-0 small">
                  <input
                    type="text"
                    class="form-control-file w-100"
                    id="compony_job"
                    v-model="job_info[item.id].compony_job"
                  />
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="form-group row me-3 txt-color">
                <label for="why_end" class="col-sm-6 col-form-label p-0">
                  علت خاتمه همکاری
                  <span class="text-danger fs-4"> * </span>
                </label>
                <div class="col-sm-6 px-0 small">
                  <input
                    type="text"
                    class="form-control-file w-100"
                    id="why_end"
                    v-model="job_info[item.id].why_end"
                  />
                </div>
              </div>
            </div>
          </div>
          <button @click="Education_status_fn(item.id)" class="btn btn-danger">
            حذف
          </button>
        </div>
      </template>
      <button @click="addEducation" class="btn btn-primary btn-sm px-3 mt-3 small">
        افزودن سابقه شغلی
      </button>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
export default {
  setup(props,context) {
    const Y_N = ref("بلی");
    const years_job = ref("");
    const job_info = reactive([
      {
        start_year: "",
        start_mounth: "",
        end_year: "",
        end_mounth: "",
        Last_incom: "",
        compony_name: "",
        compony_degree: "",
        successes: "",
        tell: "",
        compony_job: "",
        why_end: "",
      },
      {
        start_year: "",
        start_mounth: "",
        end_year: "",
        end_mounth: "",
        Last_incom: "",
        compony_name: "",
        compony_degree: "",
        successes: "",
        tell: "",
        compony_job: "",
        why_end: "",
      },
      {
        start_year: "",
        start_mounth: "",
        end_year: "",
        end_mounth: "",
        Last_incom: "",
        compony_name: "",
        compony_degree: "",
        successes: "",
        tell: "",
        compony_job: "",
        why_end: "",
      },
      {
        start_year: "",
        start_mounth: "",
        end_year: "",
        end_mounth: "",
        Last_incom: "",
        compony_name: "",
        compony_degree: "",
        successes: "",
        tell: "",
        compony_job: "",
        why_end: "",
      },
      {
        start_year: "",
        start_mounth: "",
        end_year: "",
        end_mounth: "",
        Last_incom: "",
        compony_name: "",
        compony_degree: "",
        successes: "",
        tell: "",
        compony_job: "",
        why_end: "",
      },
      {
        start_year: "",
        start_mounth: "",
        end_year: "",
        end_mounth: "",
        Last_incom: "",
        compony_name: "",
        compony_degree: "",
        successes: "",
        tell: "",
        compony_job: "",
        why_end: "",
      },
    ]);
    const Education_items = ref([
      {
        id: 0,
        status: true,
      },
    ]);
    const Education_num = ref(0);
    function addEducation() {
      Education_items.value.push({
        id: Education_num.value++,
        status: true,
      });
    }
    function Education_status_fn(id) {
      Education_items.value[id].status = false;
    }
    context.emit('job_info',job_info);
    return {
      Education_items,
      addEducation,
      Education_status_fn,
      Y_N,
      years_job,
      job_info,
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
