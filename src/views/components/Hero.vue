<template>
    <section class="section-hero section-shaped my-0">
        <div class="shape shape-style-1 shape-primary">
            <span class="span-150"></span>
            <span class="span-50"></span>
            <span class="span-50 floating"></span>
            <span class="span-75 "></span>
            <span class="span-100 floating"></span>
            <span class="span-75"></span>
            <span class="span-50 floating"></span>
            <span class="span-100"></span>
            <span class="span-50 floating"></span>
            <span class="span-100 floating"></span>
        </div>
        <div class="container shape-container d-flex align-items-center">
            <div class="col px-0">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-7 text-center pt-l">
                        <!-- <img src="img/logo.png" alt="logo"> -->
                        <img src="/img/logo.png" style="width: 400px;" class="img-fluid floating">
                        <div class="container">
                
                </div>
                <hr>
                        <p class="lead text-black mt-2 mb-2 cremona">The Villa International Palace Hotel Limited</p>
                        <div class="btn-wrapper mb-1">
                                <router-link to="/book"> 
                            <base-button tag="a"
                                         href="/book"
                                         class="mb-3 mb-sm-0 mr-2"
                                         type="primary"
                                         icon="fa fa-swatchbook">

                                Reservations
                            </base-button>
                            </router-link>
                            <base-button tag="a"
                                         href="tel:+254 702 690 371"
                                         class="mb-3 mb-sm-0"
                                         type="primary"
                                         icon="fa fa-phone">
                                Contact Us
                            </base-button>
                        </div>
                    </div>
                </div>
                <!-- <div class="row align-items-center justify-content-around stars-and-coded">
                    <div class="col-sm-4">
                        <span class="text-white alpha-7 ml-3">Star us on</span>
                        <a href="https://github.com/creativetimofficial/argon-design-system" target="_blank" title="Support us on Github">
                            <img src="img/brand/github-white-slim.png" style="height: 22px; margin-top: -3px">
                        </a>
                    </div>
                    <div class="col-sm-4 mt-4 mt-sm-0 text-right">
                        <span class="text-white alpha-7">Coded by</span>
                        <a href="https://www.creative-tim.com" target="_blank" title="Creative Tim - Premium Bootstrap Themes and Templates">
                            <img src="img/brand/creativetim-white-slim.png" class="ml-3" style="height: 30px;">
                        </a>
                    </div>
                </div> -->
            </div>
        </div>
    </section>
</template>
<script>
export default {};
</script>
<style>
@font-face { font-family: Cremona; src: url('/fonts/Cremona.ttf'); }
.cremona{
    font-family: Cremona !important;
}

waititu.{
    color: #ffffff !important;
}

.pt-lg {
    padding-top: 1rem !important;
}

.back1 {
  background-repeat: no-repeat;
}

.pads{
    
}

</style>
