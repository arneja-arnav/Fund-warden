<!-- <template>
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
   -->

   <template>
    <div class="landing-page">
      <div class="container">
        <div class="row align-items-center justify-content-center text-center vh-100">
          <div class="col-md-7">
            <img class="img-prop" src="../assets/logo.png" alt="">
            <h1 class="display-4">{{ title }}</h1>
            <p class="lead">{{ motto }}</p>
            <div class="btn-group" role="group">
              <button class="btn btn-primary btn-lg" @click="showLoginModal">Login</button>
              <!-- <button class="btn btn-secondary btn-lg" @click="showSignupModal">Sign Up</button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // title: 'Fund-Warden',
        // motto: 'Maximize your earning potential!',
      };
    },
    methods: {
      showLoginModal() {
        // Implement your logic to show the login modal
      },
      // showSignupModal() {
      //   // Implement your logic to show the signup modal
      // },
    },
  };
  </script>
  
  <style scoped>
  .landing-page {
    background-color: #4268EF; /* Set your preferred background color */
  }
  
  .vh-100 {
    height: 100vh; /* Make the section cover the entire viewport height */
  }
  
  .btn-group {
    margin-top: 20px;
  }

  .img-prop{
    position:static;
    
    width: 500px;
    height: auto;
  }
  .btn{
    background-color: #2ecc71;
  }

  .btn:hover{
    background-color: #27ae60;
  }

  .display-4 {
    color: #ecf0f1;
    font-weight: bold;
  }

  .lead{
    color: #ecf0f1;
    font-size: medium;

  }
  </style>
  