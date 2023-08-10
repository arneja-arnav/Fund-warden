<template>
  <div id="app">
    <!-- Include the LandingPage component -->
    <LandingPage />
    <!-- <FinancialDetails /> -->
  </div>
</template>

<script>
// Import the LandingPage component
import LandingPage from './components/landing_page.vue';
// import FinancialDetails from './components/FinancialForm.vue';


export default {
  components: {
    LandingPage,
    // FinancialDetails,
  },
};
</script>

<style>
/* Add your global app styles here */
</style>

