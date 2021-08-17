<template>
  <div class="container-fluid bg-primary text-light">
    <div class="row px-5 py-4">
      <div class="col-md-8">
        <div class="row text-end mb-3">
          <img
            style="width: 50px; height: 25px"
            src="../../../public/img/addressfooter.png"
            alt=""
          />
          نشانی: تهران، بلوار میرداماد، میدان مادر <br />ابتدای خیابان شهید شاه
          نظری، کوچه دوم، پلاک 41
        </div>
        <div class="row mb-3">
          <img
            style="width: 50px"
            src="../../../public/img/emailfooter.png"
            alt=""
          />

          پست الکترونیکی: info@shaparak.ir
        </div>
        <div class="row">
          <div class="col-4" style="margin-right: -5px">
            <img
              style="width: 25px"
              src="../../../public/img/tellfooter.png"
              alt=""
            />
            تلفن:<span class="num-font">(0098) (21) 75105000</span> 
          </div>
          <div class="col-4">
            <img
              style="width: 25px"
              src="../../../public/img/faxfooter.png"
              alt=""
            />
            
            فکس:<span class="num-font">(0098) (21) 22228121</span> 
          </div>
          <div class="col-4">
            <img
              style="width: 25px"
              src="../../../public/img/postfooter.png"
              alt=""
            />
            کد پستی:<span class="num-font">1547914811</span> 
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <img src="../../../public/img/logoFooter.png" alt="شرکت شاپرک" />
      </div>
    </div>
    <div class="row" style="background: rgb(51, 86, 133)">
      <div class="col-md-12 col-lg-6 p-3 text-lg-end small">
        <div id="navFooter">
          <router-link class="mynav-item" to="/">پیوندها</router-link>|
          <router-link class="mynav-item" to="/">همکاری</router-link>|
          <router-link class="mynav-item" to="/contactus"
            >تماس با ما</router-link
          >|
          <router-link class="mynav-item" to="/sugestion"
            >انتقادات و پیشنهادات</router-link
          >
        </div>
      </div>
      <div class="col-md-12 col-lg-6 p-3 text-lg-end small">
        کلیه حقوق این وب سایت متعلق به شرکت شبکه الکترونیکی پرداخت کارت شاپرک می
        باشد.
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#navFooter {
  padding: 3px 0;

  a {
    color: rgb(51, 86, 133);
    color: #f0f3f5;
    padding: 11px 10px;
    text-decoration: none;

    &.router-link-exact-active {
      color: #fff;
      font-weight: bold;
    }
  }
}
</style>
