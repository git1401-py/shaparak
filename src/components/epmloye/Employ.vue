<template>
  <div class="my-container p-md-0 p-lg-5 pt-lg-0 text-end">
    <div class="my-contain small p-4">
      <my-legend title="آگهی استخدام">
        <list-jobs :titles="titles" />
      </my-legend>
      <my-legend title="شغل انتخابی">
        <job-selected :titles="titles"/>
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
        <persion-info />
      </my-legend>
      <my-legend title="سوابق تحصیلی">
          <edu-info />   
      </my-legend>
      <my-legend title="سوابق آموزشی">
          <teach-info />   
      </my-legend>
      <my-legend title="اطلاعات شغلی">
          <job-info />   
      </my-legend>
      <my-legend title="مهارت های حرفه ای">
          <skills />   
      </my-legend>
      <my-legend title="شرایط همکاری">
          <cooperation />   
      </my-legend>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
import MyLegend from "./MyLegend";
import ListJobs from "./ListJobs.vue";
import JobSelected from "./JobSelected.vue";
import PersionInfo from "./PersionInfo.vue";
import EduInfo from "./EduInfo.vue";
import TeachInfo from "./TeachInfo.vue";
import JobInfo from "./JobInfo.vue";
import Skills from "./Skills.vue";
import Cooperation from "./Cooperation.vue";
export default {
  components: { MyLegend,ListJobs,JobSelected,PersionInfo, EduInfo,TeachInfo, JobInfo,Skills,Cooperation },
  setup() {
    const store = useStore();
    
    
    fetchJobs();
    const titles = computed(() => store.getters["employ/allTitles"]);

    async function fetchJobs() {
      // loading.value = true;
      await store.dispatch("employ/fetchTitles");
      // loading.value = false;
    }
    
    return {
      titles,
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
