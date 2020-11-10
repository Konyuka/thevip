<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span class="floating"></span>
                <span></span>
                <span class="floating"></span>
                <span></span>
                <span class="floating"></span>
                <span class="floating"></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="'img/logo.png'" class="rounded-circl marg">
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-3 text-lg-right align-self-lg-center">
                                <div class="card-profile-actions py-4 mt-lg-0">
                                    <a href="tel:+254 702 690 371">
                                    <base-button type="primary" size="sm" class="mr-4"> <i class="fa fa-phone"></i> Mobile</base-button>
                                    </a>
                                    <a href="mailto:michaelsaiba84@gmail.com">
                                    <base-button type="primary" size="sm" class="float-right" > <i class="fas fa-paper-plane"></i> Mail</base-button>
                                    </a>
                                </div>
                            </div>
                            <div class="col-lg-4 order-lg-1">
                                <div class="card-profile-stats d-flex justify-content-center">
                                    <div>
                                        <span class="heading">590</span>
                                        <span class="description">Visits</span>
                                    </div>
                                    <div>
                                        <span class="heading">142</span>
                                        <span class="description">Reviews</span>
                                    </div>
                                    <div>
                                        <span class="heading">25</span>
                                        <span class="description">Revisits</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <h3>The Villa Intenational Palace Hotel Limited <br>
                                <span class="font-weight-light">The V.I.P Hotel</span>
                            </h3>
                            <div class="h6 font-weight-300"><i class="ni location_pin mr-2"></i>Madeya, Siaya</div>
                            <div class="h5 mt-4"><i class="ni business_briefcase-24 mr-2"></i>State of the Art Hospitality</div>
                            <!-- <div><i class="ni education_hat mr-2"></i>University of Computer Science</div> -->
                        </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p>
                                        The Villa International Palace Hotel is a unique luxury brand in Siaya County, Kenya. <br>
                                        The Hotel derives its name and inspiration from the words...<br>
                                        <b>Villa</b> meaning a large and cosy house in the country side. <br>
                                        <b>International</b> Kenyan by birth, international by choice. <br>
                                        <b>Palace</b> meaning a grand residence of royal stature. <br>
                                        At the heart of every individual is the desire to be treated exceptionally. <br>
                                        This is why we aim to make your stay a tremendous one. <br>
                                        Our serene environment makes it a natural choice for accommodation. <br>
                                        The pool terrace, executive lounges and barbecue area are all located at a vantage point of beautiful lawn and gardens.
                                        Thank you for choosing The V.I.P Hotel. <br>

                                    </p>
                                    <router-link to="/book">
                                    <a >Bookings & Reservations</a>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
export default {};
</script>
<style>
@font-face { font-family: Sweet; src: url('/fonts/Sweet.ttf'); }
.sweet{
    font-family: Sweet !important;
    font-size: 30px !important;
}

.rounded-circl {
    border-radius: 30% !important;
}

</style>
