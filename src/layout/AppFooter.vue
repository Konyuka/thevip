<template>
    <footer class="footer has-cards">
        <div class="container">
            <div class="row row-grid align-items-center my-md">
                <div class="col-lg-6">
                    <h3 class="text-primary font-weight-light mb-2">Let your story unfold...</h3>
                    <h4 class="mb-0 font-weight-light">One indulgence at a time</h4>
                </div>
                <div class="col-lg-6 text-lg-center btn-wrapper">
                    <a target="_blank" rel="noopener" href="https://twitter.com/vip_madeya"
                       class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Follow us">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://www.facebook.com/VIPMadeya/"
                       class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Like us">
                        <i class="fab fa-facebook-square"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://www.instagram.com/vip_madeya/"
                       class="btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round" data-toggle="tooltip"
                       data-original-title="Follow us">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a target="_blank" rel="noopener" href="https://www.youtube.com/channel/UCZ9xIjUruVd2AL8xT2_fa5w"
                       class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" data-toggle="tooltip"
                       data-original-title="Star on Github">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
            <hr>
            <div class="row align-items-center justify-content-md-between">
                
                <div class="col-md-6">
                    <ul class="nav nav-footer justify-content-end">
                        <li class="nav-item">
                            <router-link to="/book">
                            <a  class="nav-link" target="_blank" rel="noopener">Bookings</a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/profile">
                            <a href="https://www.creative-tim.com/presentation" class="nav-link" target="_blank" rel="noopener">About
                                Us</a>
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <a href="tel:+254 702 690 371" class="nav-link" rel="noopener">Contacts</a>
                        </li>
                        <li class="nav-item">
                            <a href="https://www.instagram.com/vip_madeya/"
                               class="nav-link" target="_blank" rel="noopener">Gallery</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <div class="copyright">
                        
                        <a href="mailto:michaelsaiba84@gmail.com" target="_blank" rel="noopener">Developer michaelsaiba84@gmail.com</a> 
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  name: 'app-footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
<style>

.btn-github{
    background-color: #ff0000 !important;
    border-color: #ff0000 !important;
}

</style>
