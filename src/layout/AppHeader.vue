<template>
    <header class="header-global">
        <base-nav class="navbar-main" transparent type="" effect="light" expand>
            <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
                <!-- <img src="img/logo.png" alt="logo"> -->
            </router-link>

            <div class="row" slot="content-header" slot-scope="{closeMenu}">
                <div class="col-6 collapse-brand">
                    <a href="/">
                        <img src="img/logo.png" alt="logo">
                    </a>
                </div>
                <div class="col-6 collapse-close">
                    <close-button @click="closeMenu"></close-button>
                </div>
            </div>

            <ul class="navbar-nav navbar-nav-hover align-items-lg-center">

                <router-link to="/">
                <li class="nav-item d-lg-block ml-lg-4 nav-margin">
                    <a href="" rel="noopener"
                       class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon">
                  <i class="fa fa-concierge-bell mr-2"></i>
                </span>
                        <span class="nav-link-inner--text">Home</span>
                    </a>
                </li>
                </router-link>
                <router-link to="/book">
                <li class="nav-item d-lg-block ml-lg-4 nav-margin">
                    <a href="/" target="_blank" rel="noopener"
                       class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon">
                  <i class="fa fa-ticket-alt mr-2"></i>
                </span>
                        <span class="nav-link-inner--text">Bookings</span>
                    </a>
                </li>
                </router-link>
                <li class="nav-item d-lg-block ml-lg-4 nav-margin">
                    <a href="https://www.instagram.com/vip_madeya/?hl=en" target="_blank" rel="noopener"
                       class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon">
                  <i class="fa fa-images mr-2"></i>
                </span>
                        <span class="nav-link-inner--text">Gallery</span>
                    </a>
                </li>
                <router-link to="/profile">

                <li class="nav-item d-lg-block ml-lg-4 nav-margin">
                    <a href="" target="_blank" rel="noopener"
                       class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon">
                  <i class="fa fa-question-circle mr-2"></i>
                </span>
                        <span class="nav-link-inner--text">About Us</span>
                    </a>
                </li>
                </router-link>
                <!-- <li class="nav-item  d-lg-block ml-lg-4 nav-margin">
                    <a href="/" target="_blank" rel="noopener"
                       class="btn btn-neutral btn-icon">
                <span class="btn-inner--icon">
                  <i class="fa fa-id-card-alt mr-2"></i>
                </span>
                        <span class="nav-link-inner--text">Contacts</span>
                    </a>
                </li>     -->
            </ul>

            <!-- <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                <li class="nav-item d-none">
                    <a class="nav-link nav-link-icon" href="https://www.facebook.com/creativetim" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Like us on Facebook">
                        <i class="fa fa-facebook-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Facebook</span>
                    </a>
                </li>
                <li class="nav-item d-none">
                    <a class="nav-link nav-link-icon" href="https://www.instagram.com/creativetimofficial"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Follow us on Instagram">
                        <i class="fa fa-instagram"></i>
                        <span class="nav-link-inner--text d-lg-none">Instagram</span>
                    </a>
                </li>
                <li class="nav-item d-none">
                    <a class="nav-link nav-link-icon" href="https://twitter.com/creativetim" target="_blank" rel="noopener"
                       data-toggle="tooltip" title="Follow us on Twitter">
                        <i class="fa fa-twitter-square"></i>
                        <span class="nav-link-inner--text d-lg-none">Twitter</span>
                    </a>
                </li>
                <li class="nav-item d-none">
                    <a class="nav-link nav-link-icon" href="https://github.com/creativetimofficial/vue-argon-design-system"
                       target="_blank" rel="noopener" data-toggle="tooltip" title="Star us on Github">
                        <i class="fa fa-github"></i>
                        <span class="nav-link-inner--text d-lg-none">Github</span>
                    </a>
                </li>
                
            </ul> -->
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style>
.nav-margin{
    padding-bottom: 10px;

}


</style>
