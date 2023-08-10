<template>
  <div id="app">
    <!-- Include the LandingPage component -->
    <LandingPage />
  </div>
</template>

<script>
// Import the LandingPage component
import LandingPage from './components/landing_page.vue';

export default {
  name: 'App',
  components: {
    // Register the LandingPage component
    LandingPage
  }
};
</script>

<style>
/* Add your global app styles here */
</style>

