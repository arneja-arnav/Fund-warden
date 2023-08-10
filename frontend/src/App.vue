<template>
  <div id="app">
    <!-- Include the LandingPage component -->
    <!-- <LandingPage /> -->
    <!-- <CarouselForm /> -->
    <LoginPage />
  </div>
</template>

<script>
// Import the LandingPage component
// import LandingPage from './components/landing_page.vue';
// import FinancialDetails from './components/FinancialForm.vue';
// import CarouselForm from './components/CarouselForm.vue';
import LoginPage from './components/LoginPage.vue';


export default {
  components: {
    // LandingPage,
    // CarouselForm,
    LoginPage,
  },
};
</script>

<style>
/* Add your global app styles here */
</style>

