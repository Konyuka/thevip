<template>
    <div class="row">
        <div class="col-md-12 mt-md-0">
            <div class="input-daterange datepicker row align-items-center">
                <div class="col">
                    <base-input addon-left-icon="ni ni-calendar-grid-58">
                        <flat-picker slot-scope="{focus, blur}"
                                     @on-open="focus"
                                     @on-close="blur"
                                     :config="{allowInput: true, mode: 'range',}"
                                     class="form-control datepicker"
                                     v-model="contactFormData.dates.range">
                        </flat-picker>
                    </base-input>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
export default {
  components: {
    flatPicker
  },
  data() {
    return {
      contactFormData:{
        dates: {
          simple: "2018-07-17",
          range: "2020-09-22 to 2020-09-30"
        }
      }
    };
  }
};
</script>
