<template>
  <div class="container-fluid p-0" style="background: lightgray">
    <div class="row p-4 m-0 text-end" style="background:#fff">
      <h4>
        انتقادات و پیشنهادات
      </h4>
      بازخورد خود را به وسیله فرم ذیل برای شبکه الکترونیکی پرداخت کارت (شاپرک) ارسال نمایید.
    </div>
    <div
      class="position-relative"
      style="top: 0; left: 0; width: 100vw; height: 100vh"
    >
     <div class="position-absolute" style="top: 50px; left: 10%; z-index:2;">
        <div class="position-relative">
          <img
          src="../../public/img/iran.png"
          style="width: 600px"
        />
        <img
          src="../../public/img/location.png"
          class="position-absolute"
          style="top: 200px; left: 35%; z-index: 3"
        />
        </div>
        
      </div>
      <div class="position-absolute" style="z-index:5; top: 0; left: 0; width: 100vw; height: 100vh"
      >
        <div class="row " 
          style=" width: 100vw; height: 100vh">
          <div class="col-sm-1 col-md-2 col-lg-1"></div>
          <div class="col-sm-10 col-md-5 col-lg-6 ">
            <form action="">
            <input type="text" class="form-control m-3 w-100" placeholder="نام و نام خانوادگی را در این قسمت وارد نمایید.">
            <input type="text" class="form-control m-3 w-100" placeholder="آدرس ایمیل را در این قسمت وارد نمایید.">
            <select name="" id="" class="form-select bg-primary m-3 pe-4 w-100">
              <option value=""> دسته بندی پیام </option>
              <option value="مغایرت ها"> مغایرت ها </option>
              <option value="گزارشات"> گزارشات </option>
              <option value="تخلفات"> تخلفات </option>
              <option value="شکایات"> شکایات </option>
              <option value="روابط عمومی"> روابط عمومی </option>
            </select>
            <textarea name="" class=" m-3 w-100" cols="30" rows="10"></textarea>
            <input type="text" class="form-control m-3 w-100" placeholder="کد درج شده در تصویر زیر را وارد نمایید.">
            <button class="btn btn-primary w-75 p-1">ارسال پیام</button>


            </form>
          </div>
          <div class="col-sm-1 col-md-5 col-lg-5"></div>
        </div>
      </div>
     
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
