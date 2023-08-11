<template>
  <div id="app">
    <!-- Include the LandingPage component -->
    <!-- <LandingPage /> -->
    <!-- <CarouselForm /> -->
    <DashBoard />
    <!-- <LoginPage /> -->
    <!-- <BudgetOptimised /> -->
  </div>
</template>

<script>
// Import the LandingPage component
// import LandingPage from './components/landing_page.vue';
// import FinancialDetails from './components/FinancialForm.vue';
// import CarouselForm from './components/CarouselForm.vue';
import DashBoard from './components/DashBoard.vue';
// import LoginPage from './components/LoginPage.vue';
// import BudgetOptimised from './components/BudgetOptimised.vue';

export default {
  components: {
    // LandingPage,     
    // CarouselForm,
    DashBoard,
    // LoginPage,
    // BudgetOptimised,
  },
};
</script>

<style>
/* Add your global app styles here */
</style>

