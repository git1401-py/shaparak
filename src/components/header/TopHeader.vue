<template>
  <div class="container">
    <div class="row mt-2">
      <div class="col-md-6 col-12 text-end">
        <img src="../../../public/img/logo.png" alt="" />
      </div>
      <div class="col-md-6 col-12 p-0">
        <div class="row m-3">
          <div class="col-6"></div>
          <div class="col-6 d-flex align-items-center justify-content-between">
            <img src="../../../public/img/parcham.png" alt="" />
            پنج شنبه 21 مرداد 1400
          </div>
        </div>
        <div class="row m-3 mx-0">
          <div class="col-sm-6">
            <div class="btn btn-success w-100" style="color: #fff">
              <font-awesome-icon
                class=""
                :icon="['fa', 'user-friends']"
                style="width: 12px;"
              />
              امور اعضاء
            </div>
          </div>
          <div class="col-sm-6">
            <div class="input-group" style="direction: ltr">
              <span class="input-group-text bg-primary" id="basic-addon1">
                <font-awesome-icon
                  class=""
                  :icon="['fa', 'search']"
                  style="width: 10px; color: #fff"
                />
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="جستجو"
                aria-label="Username"
                aria-describedby="basic-addon1"
                style="direction: rtl; background:#ccc;"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  components: { FontAwesomeIcon },
};
</script>

<style>
.searchIcon {
  width: 10px !important;
  color: #fff;
  background: blue;
  padding: 2px;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
}
</style>
