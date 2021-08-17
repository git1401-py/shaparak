<template>
  <div class="">
    <!-- <div>{{ $filter.moment(new Date(), "jYYYY/jMMMM/dddd") }}</div> -->
    
    <div v-show="false">
      {{ (year = $filter.moment(new Date(), "jYYYY")) }}
      {{ (mounthH = $filter.moment(new Date(), "jMMMM")) }}
      {{ (dayHE = $filter.moment(new Date(), "dddd")) }}
      {{ (dayA = $filter.moment(new Date(), "DD")) }}
    </div>
    <label>{{ dayHF }} {{ DD }} {{ mounthA }} {{ year }}</label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: "",
      mounthH: "",
      dayHE: "",
      dayA: "",
    };
  },
  computed: {
    mounthA() {
      switch (this.mounthH) {
        case "Farvardin":
          return "فروردین";

        case "Ordibehesht":
          return "اردیبهشت";

        case "Khordaad":
          return "خرداد";

        case "Tir":
          return "تیر";

        case "Mordaad":
          return "مرداد";

        case "Shahrivar":
          return "شهریور";

        case "Mehr":
          return "مهر";

        case "Aabaan":
          return "آبان";

        case "Azar":
          return "آذر";

        case "Dey":
          return "دی";

        case "Bahman":
          return "بهمن";

        case "Esfand":
          return "اسفند";
      }
      return "";
    },
    dayHF() {
      switch (this.dayHE) {
        case "Saturday":
          return "شنبه";
        case "Sunday":
          return "یکشنبه";
        case "Monday":
          return "دوشنبه";
        case "Tuesday":
          return "سه شنبه";
        case "Wednesday":
          return "چهارشنبه";
        case "Thursday":
          return "پنج شنبه";
        case "Friday":
          return "جمعه";
      }
      return "";
    },
    DD() {
      let d = parseInt(this.dayA);
      if (
        this.mounthH == "Farvardin" ||
        this.mounthH == "Ordibehesht" ||
        this.mounthH == "Khordaad" ||
        this.mounthH == "Tir" ||
        this.mounthH == "Mordaad" ||
        this.mounthH == "Shahrivar"
      ) {
        let x = 31 - d;
        if (x >= 9) {
          d += 9;
        } else {
          d = 9 - x;
        }
      } else {
        let x = 30 - d;
        if (x >= 9) {
          d += 10;
        } else {
          d = 10 - x;
        }
      }
      return d;
    },
  },
};
</script>

<style></style>
