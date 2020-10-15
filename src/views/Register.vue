<template>
    <section class="section section-shaped section-lg my-0">
        <div class="shape shape-style-1 bg-gradient-default">
            <span class="floating"></span>
            <span></span>
            <span></span>
            <span class="floating"></span>
            <span></span>
            <span class="floating"></span>
            <span class="floating"></span>
            <span class="floating"></span>
        </div>
        <div class="container pt-lg-md">

            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">
                        <!-- <template>
                            <div class="text-muted text-center mb-3">
                                <small>Sign in with</small>
                            </div>
                            <div class="btn-wrapper text-center">
                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/github.svg">
                                    Github
                                </base-button>

                                <base-button type="neutral">
                                    <img slot="icon" src="img/icons/common/google.svg">
                                    Google
                                </base-button>
                            </div>
                        </template> -->
                        <template>
                            <form role="form" @submit.prevent="addBooking">
                                <div class="row">

                                <div class="col-lg-6">
                                <base-input alternative
                                            id="msg-name"
                                            v-model="contactFormData.name"
                                            required
                                            class="mb-3"
                                            placeholder="Name"
                                            addon-left-icon="fas fa-user">
                                </base-input>
                                <base-input alternative
                                            id="msg-phone"
                                            v-model="contactFormData.phone"
                                            required
                                            placeholder="Phone"
                                            addon-left-icon="fas fa-phone">
                                </base-input>
                                <base-input alternative
                                            id="msg-email"
                                            v-model="contactFormData.email"
                                            required
                                            class="mb-3"
                                            placeholder="Email"
                                            addon-left-icon="fas fa-paper-plane">
                                </base-input>
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
                                     v-model="contactFormData.dates">
                        </flat-picker>
                    </base-input>
                </div>
            </div>
        </div>
    </div>
                                <!-- <date-pickers v-model="contactFormData.date"></date-pickers> -->
                                </div>

                                <div class="col-lg-6">
                                <base-input alternative
                                            id="msg-service"
                                            v-model="contactFormData.service"
                                            required
                                            class="mb-3"
                                            placeholder="Service"
                                            addon-left-icon="fas fa-concierge-bell">
                                </base-input>
                                <base-input alternative
                                            id="msg-guests"
                                            v-model="contactFormData.guests"
                                            required
                                            placeholder="Expected Guests"
                                            addon-left-icon="fas fa-users">
                                </base-input>
                                <textarea 
                                    id="msg-description"
                                    v-model="contactFormData.description"
                                    class="form-control form-control-alternative" 
                                    rows="4" placeholder="More info (Optional)">
                                </textarea>
                                </div>
                                
                                </div>
                                
                                <div class="text-center">
                                    <base-button type="submit" class="my-4" @click="addBooking()">Request Booking</base-button>
                                </div>
                            </form>
                        </template>
                    </card>
                </div>
                
            </div>
        </div>
    </section>
</template>
<script>
import {fb, db} from '@/firebase';
import DatePickers from "./components/JavascriptComponents/DatePickers";
//import JavascriptComponents from "./components/JavascriptComponents";

//const DatePickers = () => import("./JavascriptComponents/DatePickers");
import flatPicker from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default {
   components: {
    DatePickers,
    flatPicker
  },
  data: function () {
        return {
            contactFormData: {
                name: '',
                email: '',
                phone: '',
                service:'',
                description:'',
                guests:'',
                dates:''
            },
            success: false,
            error: false,
        }
  },
//   firestore() {
//             return {
//                 bookings: db.collection('bookings')
//             }
//         },
  methods:{
      addBooking() {
        if ( 
            this.contactFormData.name && 
            this.contactFormData.email && 
            this.contactFormData.phone && 
            this.contactFormData.service && 
            this.contactFormData.description && 
            this.contactFormData.guests && 
            this.contactFormData.dates
            ) {

            db.collection("bookings").doc().set(
                this.contactFormData
            )

            Toast.fire({
                type: 'info',
                title: 'Notification sent successfully'
            })

            this.resetForm(); 

        }

        this.errors = [];

        if (!this.contactFormData.name) {
            this.errors.push('Product Name is required.');
        }
        if (!this.contactFormData.email) {
            this.errors.push('Product Category is required.');
        }
        if (!this.contactFormData.phone) {
            this.errors.push('Location is required.');
        }
        if (!this.contactFormData.service) {
            this.errors.push('Contact Name is required.');
        }
        if (!this.contactFormData.description) {
            this.errors.push('Contact Phone is required.');
        }
        if (!this.contactFormData.guests) {
            this.errors.push('Product Price required.');
        }
        if (!this.contactFormData.dates) {
            this.errors.push('Product Type is required.');
        }
    },
        resetForm: function () {
            this.contactFormData = {
                name: '',
                email: '',
                phone: '',
                service:'',
                description:'',
                guests: '',
                dates:''
            };
        },
  }
};
</script>
<style>
</style>
