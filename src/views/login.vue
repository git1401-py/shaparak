<template>
  <div class="container-fluid bg-primary" style="height: 100vh">
    <div class="row p-5">
      <div class="col-sm-1 col-md-3"></div>
      <div class="col-sm-10 col-md-6 p-5 contain">
        <img src="../../public/img/logoFooter.png" style="width: 170px" />
        <h1 class="text-white">شرکت شاپرک</h1>
        <h5 class="text-white">امور اعضا</h5>
        <h5 class="">ورود به حساب کاربری</h5>
        <hr />
        <form action="">
          <input
            type="text"
            class="input-group text-center mb-3 w-100"
            placeholder="نام کاربری"
          />
          <input
            type="password"
            class="input-group text-center mb-3 w-100"
            placeholder="کلمه عبور"
          />
          <input
            type="text"
            class="input-group text-center mb-3 w-100"
            placeholder="کد اعتبار سنجی"
          />
          <h5 class="text-muted mb-3 small">
            برای تولید مجدد کد روی آن کلیک نمایید.
          </h5>
          <h5 class="mb-2">فراموشی کلمه عبور</h5>
          <button class="bth btn-primary mb-2 w-100">ورود به پنل کاربری</button>
          <button class="bth btn-light w-100">بازگشت به وب سایت</button>
        </form>
      </div>
      <div class="col-sm-1 col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contain {
  background: lightblue;
  height: 90vh;
}
input, select,button{
    border: none;
    border-radius: 5px;
}
</style>
