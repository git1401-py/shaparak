<template>
<TopHeader />
  <div class="my-container p-md-0 p-lg-5 pt-lg-0 text-end">
    <div
      v-if="toperror"
      class="bg-danger small text-light p-1 w-50 mt-4"
      style="margin: 20px 25%"
    >
      {{ toperror }}
    </div>
    <div class="my-contain small p-4 mt-4">
      <div
        v-if="error && toperror"
        class="p-2 mb-3 txt-color"
        style="border: 2px solid red; background: pink; border-radius: 5px"
      >
        <h6 class="pe-3" style="font-weight: bold">
          لطفاً خطاهای زیر را اصلاح نمایید:
        </h6>
        <ul>
          <li v-for="err in error" :key="err" style="margin-right: -30px">
            {{ err }}
          </li>
        </ul>
      </div>
      <form class="needs-validation" novalidate>
        <my-legend title="آگهی استخدام">
          <list-jobs :titles="titles" />
        </my-legend>
        <my-legend title="شغل انتخابی">
          <job-selected
            @employ="employfn"
            @introduced="introducedfn"
            :titles="titles"
          />
        </my-legend>
        <my-legend title="بارگذاری رزومه">
          <div style="border: 1px solid #000; border-radius: 5px">
            <div class="form-group row me-3 txt-color">
              <label for="employ_CV" class="col-sm-2 col-form-label p-0">
                رزومه پیوست<span class="text-danger fs-4"> * </span>
              </label>
              <div class="col-sm-2 pe-0 small">
                <input
                  type="file"
                  class="form-control"
                  id="employ_CV"
                  required
                />
              </div>
            </div>
          </div>
        </my-legend>
        <my-legend title="مشخصات فردی">
          <persion-info @persion_info="persion_infofn" />
        </my-legend>
        <my-legend title="سوابق تحصیلی">
          <edu-info @Education_items="Education_itemsfn" />
        </my-legend>
        <my-legend title="سوابق آموزشی">
          <teach-info @Teaching_items="Teaching_itemsfn" />
        </my-legend>
        <my-legend title="اطلاعات شغلی">
          <job-info @job_info="job_infofn" />
        </my-legend>
        <my-legend title="مهارت های حرفه ای">
          <skills @skills="skillsfn" />
        </my-legend>
        <my-legend title="شرایط همکاری">
          <cooperation @coorporate="coorporatefn" />
        </my-legend>
        <my-legend title="ثبت درخواست">
          <div class="form-group row me-3 txt-color">
            <label for="years_job" class="col-sm-2 col-form-label p-0"> </label>
            <div class="col-sm-3 pe-0 small">
              <a class="btn btn-primary">hlkdj </a>
            </div>
          </div>
          <div class="form-group row me-3 txt-color my-3">
            <label
              for="years_job"
              class="col-sm-2 bg-danger col-form-label p-0"
              style="width: 70px; margin-right: 50px"
            >
              عبارت امنیتی
            </label>
            <div class="col-sm-3 pe-0 small">
              <input
                type="text"
                class="form-control-file w-100"
                id="years_job"
                v-model="years_job"
              />
            </div>
          </div>
          <div class="form-group row me-3 txt-color">
            <label for="years_job" class="col-sm-2 col-form-label p-0"> </label>
            <div class="col-sm-3 pe-0 small">
              <button
                @submit.prevent="errorfn"
                type="submit"
                class="btn btn-primary"
              >
                ثبت درخواست
              </button>
            </div>
          </div>
        </my-legend>
      </form>
    </div>
  </div>
  <FooterCopyRight />
</template>

<script>
import { useStore } from "vuex";
import { computed, reactive, ref } from "vue";
import MyLegend from "./MyLegend";
import ListJobs from "./ListJobs.vue";
import JobSelected from "./JobSelected.vue";
import PersionInfo from "./PersionInfo.vue";
import EduInfo from "./EduInfo.vue";
import TeachInfo from "./TeachInfo.vue";
import JobInfo from "./JobInfo.vue";
import Skills from "./Skills.vue";
import Cooperation from "./Cooperation.vue";
import TopHeader from "./TopHeader.vue";
import FooterCopyRight from "./FooterCopyRight.vue";
export default {
  components: {
    MyLegend,
    ListJobs,
    JobSelected,
    PersionInfo,
    EduInfo,
    TeachInfo,
    JobInfo,
    Skills,
    Cooperation,
    TopHeader,
    FooterCopyRight
  },
  setup() {
    const store = useStore();

    fetchJobs();
    const titles = computed(() => store.getters["employ/allTitles"]);

    async function fetchJobs() {
      // loading.value = true;
      await store.dispatch("employ/fetchTitles");
      // loading.value = false;
    }
    const toperror = ref("");
    const error = reactive([]);
    const information = reactive({
      introduced_info: {},
      employ_info: {},
      persion_info: {},
      Education_items: [],
      Teaching_items: [],
      job_info: [],
      skills: {},
      coorporate: {},
    });
    function errorfn() {
      // error.forEach(()=> error.shift());
      toperror.value = "";
      let le = ref(error.length);
      for (let index = 0; index < le.value; index++) {
        error.pop();
      }
      information.Education_items.forEach((element) => {
        if (!element.academy_name) {
          error.push("وارد کردن فیلد نام موسسه آموزشی الزامیست.");
        }
        if (!element.state) {
          error.push("وارد کردنفیلد مدرک تحصیلی الزامیست.");
        }
        if (!element.edu_name) {
          error.push("وارد کردن فیلد نام رشته تحصیلی الزامیست.");
        }
        if (!element.edu_status) {
          error.push("وارد کردن فیلد وضعیت تحصیلی الزامیست.");
        }
      });
      if (!information.skills.langs[0].speaking) {
        error.push("وارد کردن فیلد مکالمه الزامیست.");
      }
      if (!information.skills.langs[0].reading) {
        error.push("وارد کردن فیلد خواندن  الزامیست.");
      }
      if (!information.skills.langs[0].writing) {
        error.push("وارد کردن فیلد نوشتن  الزامیست.");
      }
      if (!information.skills.win) {
        error.push(
          "وارد کردن فیلد سیستم عامل ویندوز، مفاهيم تئوري استفاده و مديريت فايل​ها الزامیست."
        );
      }
      if (!information.skills.office) {
        error.push(
          "وارد کردن فیلد مجموعه نرم​ افزارهای Office شامل Word ،Excel، PowerPoint الزامیست."
        );
      }
      if (!information.skills.outlook) {
        error.push(
          "وارد کردن فیلد خدمات اطلاعاتي شبکه - اينترنت و پست الکترونيک Outlook الزامیست."
        );
      }
      if (!information.skills.m_project) {
        error.push(
          "وارد کردن فیلد مدیریت و کنترل پروژه با نرم​ افزار Microsoft Office Project الزامیست."
        );
      }
      if (!information.coorporate.salery) {
        error.push(
          "وارد کردن فیلد میانگین آخرین حقوق دریافتی (ریال) الزامیست."
        );
      }
      if (!information.coorporate.starting_date) {
        error.push(
          "وارد کردن فیلد زمان آمادگی برای شروع کار در صورت گزینش الزامیست."
        );
      }
      if (error) {
        toperror.value =
          "خطا در ثبت درخواست، لطفاً ورودی های مشخص شده را مجددا بررسی نمایید.";
      }
    }
    function employfn(info) {
      information.employ_info = info;
    }
    function introducedfn(info) {
      information.introduced_info = info;
    }
    function persion_infofn(info) {
      information.persion_info = info;
    }
    function Education_itemsfn(info) {
      information.Education_items = info;
    }
    function Teaching_itemsfn(info) {
      information.Teaching_items = info;
    }
    function job_infofn(info) {
      information.job_info = info;
    }
    function skillsfn(info) {
      information.skills = info;
    }
    function coorporatefn(info) {
      information.coorporate = info;
    }
    (function () {
      "use strict";
      window.addEventListener(
        "load",
        function () {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName("needs-validation");
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener(
              "submit",
              function (event) {
                if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
                }
                form.classList.add("was-validated");
                errorfn();
              },
              false
            );
          });
          console.log(validation);
        },
        false
      );
    })();

    return {
      titles,
      employfn,
      introducedfn,
      persion_infofn,
      Education_itemsfn,
      Teaching_itemsfn,
      job_infofn,
      skillsfn,
      coorporatefn,
      toperror,
      error,
      errorfn,
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
