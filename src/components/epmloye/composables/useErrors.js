import { reactive, ref } from "vue";

export const useErrors = (information) => {
  const toperror = ref("");
  const error = reactive([]);
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
    error.push("وارد کردن فیلد میانگین آخرین حقوق دریافتی (ریال) الزامیست.");
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

  return {
    error,
    toperror,
  };
};
