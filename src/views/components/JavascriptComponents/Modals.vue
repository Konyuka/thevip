<template>
    <div class="container">
    <div class="">

        <div class="shape shape-style-1 shape-default mt-3">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="container py-0 pb-sm checkit">
            <h1 class="text-white font-weight-light text-center cremona fiti">@ The V.I.P Hotel, Everyone Is A VIP</h1>
            <div class="row justify-content-between align-items-center">
                <div class="col-lg-12 mb-lg-auto">
                    <div class="rounded shadow-lg overflow-hidden">
                        <b-carousel id="carousel1"
                                    controls
                                    indicators>
                            <!-- Text slides with image -->
                            <b-carousel-slide img-src="img/png/hall.png"></b-carousel-slide>
                            <b-carousel-slide img-src="https://cf.bstatic.com/images/hotel/max1024x768/245/245144873.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/png/pool.png"></b-carousel-slide>
                            <b-carousel-slide img-src="img/png/eat.png"></b-carousel-slide>
                            <b-carousel-slide img-src="img/png/bed.png"></b-carousel-slide>
                            <b-carousel-slide img-src="https://q-xx.bstatic.com/xdata/images/hotel/max500/213086366.jpg?k=991f6b88a417cb3f46ebae066457a32641bb73a577ecd8348e6c592ff7b0b1e9&o="></b-carousel-slide>
                            <b-carousel-slide img-src="https://cf.bstatic.com/images/hotel/max1024x768/245/245143902.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="https://q-xx.bstatic.com/xdata/images/hotel/max500/213091754.jpg?k=5177704a070a078f12c81f49a93d682fe74289d20b63f5b4ad2717ec2a284f1f&o="></b-carousel-slide>
                            <b-carousel-slide img-src="img/png/children.png"></b-carousel-slide>
                            <b-carousel-slide img-src="img/png/grounds.png"></b-carousel-slide>
                            <b-carousel-slide img-src="img/png/sun.png"></b-carousel-slide>
                            <b-carousel-slide img-src="img/png/tunnel.png"></b-carousel-slide>
                        </b-carousel>
                    </div>
                </div>
            </div>
        </div>
        </div>    
    <div class="row">
        
        
        <div class="col-md-3 hover">
            <base-button block type="warning" class="mb-3" @click="modals.modal1 = true">
                <div class="fit">
                Accomodations
            </div>
            </base-button>

            <modal :show.sync="modals.modal1"
                   gradient="danger"
                   modal-classes="modal-danger modal-dialog-centered">
                <h6 slot="header" class="modal-title" id="modal-title-notification">Accomodation</h6>
                <div class="row justify-content-between align-items-center">
                <div class="col-lg-12 mb-lg-auto">
                    <div class="rounded shadow-lg overflow-hidden">
                        <b-carousel id="carousel1"
                                    controls
                                    indicators>
                            <!-- Text slides with image -->
                            <b-carousel-slide img-src="img/accom1.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/accom2.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/accom3.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/accom4.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/accom5.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/accom6.jpg"></b-carousel-slide>
                        </b-carousel>
                    </div>
                </div>
            </div>
                <div class="py-3 ">
                    <div class="text-center" >
                    <i class="fa fa-igloo ni-3x"></i>
                    <h4 class="heading mt-4">Accomodating your peace of mind</h4>
                    </div>
                    <hr>
                    <p>
                       <i class="fa fa-star"></i>  All the Rooms have King or Twin Beds<br> 
                       <i class="fa fa-star"></i>  Luxurious Showers and Bathrooms<br> 
                       <i class="fa fa-star"></i>  Fast Connections & Satelite TV <br> 
                       <i class="fa fa-star"></i>  Laundry & Fine Room Service <br> 

                    </p>
                </div>

                <template slot="footer">
                    <router-link to="/book"><base-button  @click="modals.modal1 = false" type="white"> Bookings  </base-button></router-link>
                    <base-button type="link"
                                 text-color="white"
                                 class="ml-auto"
                                 @click="modals.modal1 = false">
                        Close
                    </base-button>
                </template>
            </modal>
        </div>
        <div class="col-md-3 hover">
            <base-button block type="warning" class=" mb-3" @click="modals.modal2 = true">
              
              <div class="fit">

                Conferencing
            </div>
            </base-button>

            <modal :show.sync="modals.modal2"
                   gradient="danger"
                   modal-classes="modal-danger modal-dialog-centered">
                <h6 slot="header" class="modal-title" id="modal-title-notification">Conferencing</h6>
                <div class="row justify-content-between align-items-center">
                <div class="col-lg-12 mb-lg-auto">
                    <div class="rounded shadow-lg overflow-hidden">
                        <b-carousel id="carousel1"
                                    controls
                                    indicators>
                            <!-- Text slides with image -->
                            <b-carousel-slide img-src="img/conf1.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/conf2.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/conf4.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/conf3.jpg"></b-carousel-slide>
                        </b-carousel>
                    </div>
                </div>
            </div>
                <div class="py-3 ">
                    <div class="text-center" >
                    <i class="fa fa-users ni-3x"></i>
                    <h4 class="heading mt-4">Engaging minds, empowering success</h4>
                    </div>
                    <hr>
                    <p>
                       <i class="fa fa-star"></i>  Latest audio Visual Equipment<br> 
                       <i class="fa fa-star"></i>  Projector & Screens<br> 
                       <i class="fa fa-star"></i>  Air Conditioning & Buffet <br> 
                       <i class="fa fa-star"></i>  Ample Parking & Security <br> 

                    </p>
                </div>

                <template slot="footer">
                    <router-link to="/book"><base-button  @click="modals.modal2 = false" type="white"> Bookings  </base-button></router-link>
                    <base-button type="link"
                                 text-color="white"
                                 class="ml-auto"
                                 @click="modals.modal2 = false">
                        Close
                    </base-button>
                </template>
            </modal>

        </div>
        <div class="col-md-3 hover">
            <base-button block type="warning" class=" mb-3" @click="modals.modal3 = true">
                <div class="fit">

                Parties
            </div>
            </base-button>

            <modal :show.sync="modals.modal3"
                   gradient="danger"
                   modal-classes="modal-danger modal-dialog-centered">
                <h6 slot="header" class="modal-title" id="modal-title-notification">Parties</h6>
                <div class="row justify-content-between align-items-center">
                <div class="col-lg-12 mb-lg-auto">
                    <div class="rounded shadow-lg overflow-hidden">
                        <b-carousel id="carousel1"
                                    controls
                                    indicators>
                            <!-- Text slides with image -->
                            <b-carousel-slide img-src="img/party1.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/party2.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/party4.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/party6.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/party5.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/party7.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/party9.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/party8.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/party10.jpg"></b-carousel-slide>
                        </b-carousel>
                    </div>
                </div>
            </div>
                <div class="py-3 ">
                    <div class="text-center" >
                    <i class="fa fa-glass-cheers ni-3x"></i>
                    <h4 class="heading mt-4">You gotta have life your way</h4>
                    </div>
                    <hr>
                    <p>
                       <i class="fa fa-star"></i>  Pool Parties <br> 
                       <i class="fa fa-star"></i>  Open Bars<br> 
                       <i class="fa fa-star"></i>  Music & Food <br> 
                       <i class="fa fa-star"></i>  Photography <br> 

                    </p>
                </div>

                <template slot="footer">
                    <router-link to="/book"><base-button @click="modals.modal3 = false" type="white"> Bookings  </base-button></router-link>
                    <base-button type="link"
                                 text-color="white"
                                 class="ml-auto"
                                 @click="modals.modal3 = false">
                        Close
                    </base-button>
                </template>
            </modal>
        </div>
        <div class="col-md-3 hover">
            <base-button block type="warning" class=" mb-3" @click="modals.modal4 = true">
               <div class="fit">

                Recreations
               </div>
            </base-button>

            <modal :show.sync="modals.modal4"
                   gradient="danger"
                   modal-classes="modal-danger modal-dialog-centered">
                <h6 slot="header" class="modal-title" id="modal-title-notification">Recreations</h6>
                <div class="row justify-content-between align-items-center">
                <div class="col-lg-12 mb-lg-auto">
                    <div class="rounded shadow-lg overflow-hidden">
                        <b-carousel id="carousel1"
                                    controls
                                    indicators>
                            <!-- Text slides with image -->
                            <b-carousel-slide img-src="img/rec1.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/rec2.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/rec4.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/rec3.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/rec5.jpg"></b-carousel-slide>
                        </b-carousel>
                    </div>
                </div>
            </div>
                <div class="py-3 ">
                    <div class="text-center" >
                    <i class="fa fa-puzzle-piece ni-3x"></i>
                    <h4 class="heading mt-4">We're more than just fun and games.</h4>
                    </div>
                    <hr>
                    <p>
                       <i class="fa fa-star"></i>  Team Building <br> 
                       <i class="fa fa-star"></i>  Swimming & Pools <br> 
                       <i class="fa fa-star"></i>  Swings, Slides, Bouncing Castles <br> 
                       <i class="fa fa-star"></i>  Music & Food <br> 
                       <i class="fa fa-star"></i>  Photography <br> 

                    </p>
                </div>

                <template slot="footer">
                    <router-link to="/book"><base-button @click="modals.modal4 = false" type="white"> Bookings  </base-button></router-link>
                    <base-button type="link"
                                 text-color="white"
                                 class="ml-auto"
                                 @click="modals.modal4 = false">
                        Close
                    </base-button>
                </template>
            </modal>
        </div>
        <div class="col-md-3 hover">
            <base-button block type="warning" class=" mb-3" @click="modals.modal5 = true">
                <div class="fit">

                Team Buildings
               </div>
            </base-button>

            <modal :show.sync="modals.modal5"
                   gradient="danger"
                   modal-classes="modal-danger modal-dialog-centered">
                <h6 slot="header" class="modal-title" id="modal-title-notification">Team Building</h6>
                <div class="row justify-content-between align-items-center">
                <div class="col-lg-12 mb-lg-auto">
                    <div class="rounded shadow-lg overflow-hidden">
                        <b-carousel id="carousel1"
                                    controls
                                    indicators>
                            <!-- Text slides with image -->
                            <b-carousel-slide img-src="img/tb1.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/tb2.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/tb3.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/tb4.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/tb5.jpg"></b-carousel-slide>
                        </b-carousel>
                    </div>
                </div>
            </div>
                <div class="py-3 ">
                    <div class="text-center" >
                    <i class="fa fa-users-cog ni-3x"></i>
                    <h4 class="heading mt-4">One spirit, one team, one win...</h4>
                    </div>
                    <hr>
                    <p>
                       <i class="fa fa-star"></i>  Team Building <br> 
                       <i class="fa fa-star"></i>  Swimming & Pools <br> 
                       <i class="fa fa-star"></i>  Swings, Slides, Bouncing Castles <br> 
                       <i class="fa fa-star"></i>  Music & Food <br> 
                       <i class="fa fa-star"></i>  Photography <br> 

                    </p>
                </div>

                <template slot="footer">
                    <router-link to="/book"><base-button @click="modals.modal5 = false" type="white"> Bookings  </base-button></router-link>
                    <base-button type="link"
                                 text-color="white"
                                 class="ml-auto"
                                 @click="modals.modal5 = false">
                        Close
                    </base-button>
                </template>
            </modal>
        </div>
        <div class="col-md-3 hover">
            <base-button block type="warning" class=" mb-3" @click="modals.modal6 = true">
               <div class="fit">

                Weddings
               </div>
            </base-button>

            <modal :show.sync="modals.modal6"
                   gradient="danger"
                   modal-classes="modal-danger modal-dialog-centered">
                <h6 slot="header" class="modal-title" id="modal-title-notification">Weddings</h6>
                 <div class="row justify-content-between align-items-center">
                <div class="col-lg-12 mb-lg-auto">
                    <div class="rounded shadow-lg overflow-hidden">
                        <b-carousel id="carousel1"
                                    controls
                                    indicators>
                            <!-- Text slides with image -->
                            <b-carousel-slide img-src="img/wed1.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/wed2.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/wed3.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/wed4.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/wed5.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/wed6.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/wed7.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/wed8.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/wed9.jpg"></b-carousel-slide>
                        </b-carousel>
                    </div>
                </div>
            </div>
                <div class="py-3 ">
                    <div class="text-center" >
                    <i class="fa fa-ring ni-3x"></i>
                    <h4 class="heading mt-4">Together is a beautiful place to be</h4>
                    </div>
                    <hr>
                    <p>
                       <i class="fa fa-star"></i>  Digital P.A System <br> 
                       <i class="fa fa-star"></i>  Ample Parking <br> 
                       <i class="fa fa-star"></i>  Photography <br> 
                       <i class="fa fa-star"></i>  Music & Food <br> 
                       <i class="fa fa-star"></i>  Open Bar <br> 

                    </p>
                </div>

                <template slot="footer">
                    <router-link to="/book"><base-button @click="modals.modal6 = false" type="white"> Bookings  </base-button></router-link>
                    <base-button type="link"
                                 text-color="white"
                                 class="ml-auto"
                                 @click="modals.modal6 = false">
                        Close
                    </base-button>
                </template>
            </modal>
        </div>
        <div class="col-md-3 hover">
            <base-button block type="warning" class="mb-3" @click="modals.modal7 = true">
            <div class="fit">
                Private Functions
            </div>
            </base-button>

            <modal :show.sync="modals.modal7"
                   gradient="danger"
                   modal-classes="modal-danger modal-dialog-centered">
                <h6 slot="header" class="modal-title" id="modal-title-notification">Private Functions</h6>
                <div class="row justify-content-between align-items-center">
                <div class="col-lg-12 mb-lg-auto">
                    <div class="rounded shadow-lg overflow-hidden">
                        <b-carousel id="carousel1"
                                    controls
                                    indicators>
                            <!-- Text slides with image -->
                            <b-carousel-slide img-src="img/priv1.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/priv2.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/priv3.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/priv4.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/priv5.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/priv6.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/priv7.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/priv8.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/priv9.jpg"></b-carousel-slide>
                        </b-carousel>
                    </div>
                </div>
            </div>
                <div class="py-3 ">
                    <div class="text-center" >
                    <i class="fa fa-campground ni-3x"></i>
                    <h4 class="heading mt-4">Why Stress about Parking?</h4>
                    </div>
                    <hr>
                    <p>
                       <i class="fa fa-star"></i>  Ample Parking <br> 
                       <i class="fa fa-star"></i>  Swimming & Pools <br> 
                       <i class="fa fa-star"></i>  Swings, Slides, Bouncing Castles <br> 
                       <i class="fa fa-star"></i>  Music & Food <br> 
                       <i class="fa fa-star"></i>  Photography <br> 

                    </p>
                </div>

                <template slot="footer">
                    <router-link to="/book"><base-button @click="modals.modal7 = false" type="white"> Bookings  </base-button></router-link>
                    <base-button type="link"
                                 text-color="white"
                                 class="ml-auto"
                                 @click="modals.modal7 = false">
                        Close
                    </base-button>
                </template>
            </modal>
        </div>
        <div class="col-md-3 hover">
            <base-button block type="warning" class=" mb-3" @click="modals.modal8 = true">
               <div class="fit">

                Open Bars
               </div>
            </base-button>

            <modal :show.sync="modals.modal8"
                   gradient="danger"
                   modal-classes="modal-danger modal-dialog-centered">
                <h6 slot="header" class="modal-title" id="modal-title-notification">Open Bars</h6>
                   <div class="row justify-content-between align-items-center">
                <div class="col-lg-12 mb-lg-auto">
                    <div class="rounded shadow-lg overflow-hidden">
                        <b-carousel id="carousel1"
                                    controls
                                    indicators>
                            <!-- Text slides with image -->
                            <b-carousel-slide img-src="img/open1.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/open2.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/open4.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/open3.jpg"></b-carousel-slide>
                            <b-carousel-slide img-src="img/open5.jpg"></b-carousel-slide>
                        </b-carousel>
                    </div>
                </div>
            </div>
                <div class="py-3 ">
                    <div class="text-center" >
                    <i class="fa fa-wine-bottle ni-3x"></i>
                    <h4 class="heading mt-4">A life full of celebration</h4>
                    </div>
                    <hr>
                    <p>
                       <i class="fa fa-star"></i>  Cocktails <br> 
                       <i class="fa fa-star"></i>  Music & Food <br> 
                       <i class="fa fa-star"></i>  Swimming & Pools <br> 
                       <i class="fa fa-star"></i>  Photography <br> 
                       <i class="fa fa-star"></i>  Games <br> 
                    </p>
                </div>

                <template slot="footer">
                   <router-link to="/book"><base-button @click="modals.modal8 = false" type="white"> Bookings  </base-button></router-link>
                    <base-button type="link"
                                 text-color="white"
                                 class="ml-auto"
                                 @click="modals.modal8 = false">
                        Close
                    </base-button>
                </template>
            </modal>
        </div>

    </div>
    </div>

    <!-- Modals -->
    
</template>
<script>
import Modal from "@/components/Modal.vue";
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";

export default {
  components: {
    Modal,
    BCarousel,
    BCarouselSlide
  },
  data() {
    return {
      modals: {
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false,
        modal5: false,
        modal6: false,
        modal7: false,
        modal8: false
      }
    };
  }
};
</script>
<style>
.checkit {
    padding-bottom: 2rem !important;
}

@media only screen and (max-width: 1063px) {
  .fit {
      font-size: 9px;
  }
}

@media only screen and (max-width: 640px) {
  .fiti {
      font-size: 20px !important;
  }
}

@media only screen and (max-width: 219px) {
  .fit {
      font-size: 5px;
  }
}

@font-face { font-family: Cremona; src: url('/fonts/Cremona.ttf'); }
.cremona{
    font-family: Cremona !important;
}


.btn-warning{
    background-color: #ee7f37 !important; 
    border-color: #6f4b31 !important;
}

.hover:hover {
  background-color: #ffffff0f
}
</style>
