<template>
    <div class="landing-page">
      <header>
        <h1 class="app-name">{{ appName }}</h1>
        <p class="slogan">{{ slogan }}</p>
      </header>
      <section class="main-content">
        <p class="description">
          Welcome to Fund Warden, your comprehensive financial planning app that helps you maximize your earning potential.
        </p>
        <router-link to="/register" class="cta-button">Get Started</router-link>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LandingPage',
    data() {
      return {
        appName: 'Fund Warden',
        slogan: 'Maximize your earning potential using Fund Warden'
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add your CSS styling here */
  </style>
  