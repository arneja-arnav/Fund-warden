<template>
    <div class="container-fluid d-flex align-items-center justify-content-center">
      <div class="row">
        <div class="col-md-6 d-flex justify-content-center">
          <div class="card mt-5">
            <div class="card-body left">
              <h2 class="card-title">Sign in</h2>
              <!-- <a href="#" class="btn btn-google mb-3">Sign in with Google</a> -->
              <form @submit.prevent="signIn">
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input v-model="loginData.email" type="email" class="form-control" id="email" required />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input v-model="loginData.password" type="password" class="form-control" id="password" required />
                </div>
                <button type="submit" class="btn btn-primary sign">Login</button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-6 d-flex justify-content-center">
          <div class="card mt-5">
            <div class="card-body right">
              <h2 class="card-title">Register</h2>
              <!-- <a href="#" class="btn btn-google mb-3">Register with Google</a> -->
              <form @submit.prevent="signUp">
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input v-model="registerData.name" type="text" class="form-control" id="name" required />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email</label>
                  <input v-model="registerData.email" type="email" class="form-control" id="email" required />
                </div>
                <div class="mb-3">
                  <label for="password" class="form-label">Password</label>
                  <input v-model="registerData.password" type="password" class="form-control" id="password" required />
                </div>
                <button type="submit" class="btn btn-primary sign">Sign Up</button>
              </form>
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
        loginData: {
          email: '',
          password: '',
        },
        registerData: {
          name: '',
          email: '',
          password: '',
        },
      };
    },
    methods: {
      signIn() {
        // Implement your login logic here
        console.log('Login Data:', this.loginData);
      },
      signUp() {
        // Implement your sign up logic here
        console.log('Register Data:', this.registerData);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add custom styles here */
  .btn-google {
    background-color: #dd4b39;
    color: white;
  }
  
  .card {
    margin: 0 auto;
    padding: 20px;
    width: 800px;
    height: 600px;
  }

  .btn{
    background-color: #2ecc71;
    text-align: center;
    padding-left: 335px;
    padding-right: 330px;
  }

  .card-body{
    align-items: center;
  }

  .left{
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .card-title{
    align-items: center;
    text-align: center;
    color: #ecf0f1;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #34495e;
  }

  .container-fluid{
    background-color: #4268EF;
    height: 100vh;
  }

  .mb-3{
    padding: 30px;
    align-items: left;
  }
  .d-flex.align-items-center {
  min-height: 100vh;
}
  .row{
    display: flex;

  }

  .col-md-6{
    flex: 1;
    margin: 0 15px;
  }

  </style>
  