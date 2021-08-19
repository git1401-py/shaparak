<template>
  <table
    class="table table-borderless align-middle text-end"
    style="border: 1px solid #444; border-radius: 4px"
  >
    <thead>
      <tr>
        <th colspan="4">
          شرکت شبکه الکترونیکی پرداخت کارت ( شاپرک) از واجدین شرایط به شرح ذیل
          در شهر تهران دعوت به همکاری می نماید.
        </th>
      </tr>
      <tr>
        <th scope="col">ردیف</th>
        <th scope="col" style="width: 15%">عنوان شغلی</th>
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
</template>

<script>
export default {
  props: ["titles"],
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
