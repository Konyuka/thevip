// <template>
    <div>
        <hero></hero>
        <!-- <basic-elements></basic-elements>
        <inputs></inputs>
        <custom-controls></custom-controls>
        <navigation></navigation>
        <javascript-components></javascript-components>
        <icons></icons>
        <examples></examples>
        <download-section></download-section> -->
        <carousel></carousel>

        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="fa fa-handshake" type="primary" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">Let's Meet Up</h6>
                                    <div>
                                        <badge type="primary" rounded>Conferencing</badge>
                                        <badge type="primary" rounded>Ample Parking</badge>
                                    </div>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="fas fa-campground" type="primary" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">Sweeten Your Stay</h6>
                                    <div>
                                        <badge type="primary" rounded>Cuisines</badge>
                                        <badge type="primary" rounded>Accomodation</badge>
                                    </div>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="fas fa-suitcase-rolling" type="primary" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase">Best Vacay Ever</h6>
                                    <div>
                                        <badge type="primary" rounded>Pool</badge>
                                        <badge type="primary" rounded>Music & Bar</badge>
                                    </div>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section section-lg">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-md-2">
                        <img src="https://media-cdn.tripadvisor.com/media/photo-s/11/84/e7/59/aerial-view-of-the-vip.jpg" class="img-fluid floating">
                    </div>
                    <div class="col-md-6 order-md-1">
                        <div class="pr-md-5">
                            <icon name="fa fa-search-location" class="mb-5" size="lg" type="primary" shadow
                                  rounded></icon>
                            <h3>Our Location</h3>
                            <ul class="list-unstyled mt-5">
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="primary" circle class="mr-3" icon="fa fa-location-arrow"></badge>
                                        <h6 class="mb-0">50 KM from Kisumu</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="primary" circle class="mr-3" icon="fa fa-road"></badge>
                                        <h6 class="mb-0">Main Kisumu-Busia Highway</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="primary" circle class="mr-3" icon="fa fa-compass"></badge>
                                        <h6 class="mb-0">At Madeya Center</h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-1 bg-gradient-warning shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container">
                <card gradient="warning"
                      no-body
                      shadow-size="lg"
                      class="border-0">
                    <div class="p-5">
                        <div class="row align-items-center">
                            <div class="col-lg-8">
                                <h3 class="text-white">The Villa International Palace Hotel</h3>
                            </div>
                            <div class="col-lg-3 ml-lg-auto">
                                <router-link to="/book"> 
                                <base-button tag="a"
                                             type="white" block size="lg">
                                    Bookings
                                </base-button>
                                </router-link>

                            </div>
                        </div>
                    </div>
                </card>
            </div>
            <div class="container py-0">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-lg-2 ml-lg-auto">
                        <card shadow class="shadow-lg--hover mt-5">
                            <div class="d-flex px-3">
                                <div>
                                    <icon name="fas fa-check-double" gradient="success" color="white" shadow
                                          rounded></icon>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-primary">Continental and Local Cuisines</h5>
                                    <p>
                                      Our restaurant majorly serves fusion of continental and local cuisines, 
                                      a blend of tastes from accross the world. Guests too have a choice to select 
                                      and enjoy variety of barbecues (Nyama/Mbuzi/Kuku) carefully and tastefully 
                                      done by our highly acclaimed chefs.  
                                    </p>
                                </div>
                            </div>
                        </card>
                        <card shadow class="shadow-lg--hover mt-5">
                            <div class="d-flex px-3">
                                <div>
                                    <icon name="fas fa-check-double" gradient="warning" color="white" shadow
                                          rounded></icon>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-primary">A business Loft</h5>
                                    <p>
                                      I believe we are going to move into a situation where the more effective
                                      conferences will be more tech and elegant. A conference is held so as to give 
                                      everybody a chance to get sore at everbody else. Experience ample parking and security 
                                      and state art service during your conferences; fully equiped with the best public address and Tech 
                                      innovation to make communication and casting easier. Any form of a winning record in the conference 
                                      is an accomplishment.        
                                    </p>
                                </div>
                            </div>
                        </card>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="d-flex px-3">
                            <div>
                                <icon name="fa fa-laugh-beam" size="lg" class="bg-gradient-white" color="warning" shadow
                                      rounded></icon>
                            </div>
                            <div class="pl-4">
                                <h4 class="display-3 text-white">Unique Hospitality</h4>
                                <p class="text-white">
                                  Check into another world at the Villa Palace
                                </p>
                            </div>
                        </div>
                        <card shadow class="shadow-lg--hover mt-5">
                            <div class="d-flex px-3">
                                <div>
                                    <icon name="fas fa-check-double" gradient="success" color="white" shadow
                                          rounded></icon>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-primary">Executive lounges & Barbeque</h5>
                                    <p>
                                        Imagine good beer of wine as you like it, going down with tasty chunks of Nyama choma.
                                        You might be surprised of our expertise in hospitality and service. Come relax with family 
                                        or friends or both. Finest taste in music is guaranteed!   
                                    </p>
                                </div>
                            </div>
                        </card>
                        <card shadow class="shadow-lg--hover mt-5">
                            <div class="d-flex px-3">
                                <div>
                                    <icon name="fas fa-check-double" gradient="warning" color="white" shadow
                                          rounded></icon>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-primary">First Class Accomodation</h5>
                                    <p>
                                      I feel comfortable here and you are welcomed too. Pretty sure you might get addicted to the 
                                      hospitality but it will always be a legendary welcome, every time. Meet accomodation standards that are 
                                      alive with your style of living. Come and stay at the Heart of Low Country Style, Culture and Cuisine and 
                                      stil experience international luxury and hospitality. 
                                    </p>
                                </div>
                            </div>
                        </card>
                    </div>
                </div>
            </div>
        </section>


    </div>
</template>
<script>
import Hero from "./components/Hero";
import BasicElements from "./components/BasicElements";
import Inputs from "./components/Inputs";
import CustomControls from "./components/CustomControls";
import Navigation from "./components/Navigation";
import JavascriptComponents from "./components/JavascriptComponents";
import Carousel from "./components/Carousel";
import Icons from "./components/Icons";
import Examples from "./components/Examples";
import DownloadSection from "./components/DownloadSection";

export default {
  name: "components",
  components: {
    Hero,
    BasicElements,
    Inputs,
    CustomControls,
    Navigation,
    JavascriptComponents,
    Carousel,
    Icons,
    Examples,
    DownloadSection
  }
};
</script>
<style lang="scss" scoped>

</style>