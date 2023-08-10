<template>
    <div>
      <!-- Your investment data input form -->
      <form @submit="submitForm">
        <!-- Age and location input fields -->
        <input type="text" v-model="age" placeholder="Age">
        <input type="text" v-model="location" placeholder="Location">
        <!-- Bank statement upload field -->
        <input type="file" ref="bankStatements" accept=".pdf, .csv" @change="handleFileUpload">
        <!-- Submit button -->
        <button type="submit">Generate Investment Portfolio</button>
      </form>
  
      <!-- Display investment recommendations -->
      <div v-if="investmentRecommendations">
        <h2>Investment Recommendations:</h2>
        <p>{{ investmentRecommendations }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        age: '',
        location: '',
        investmentRecommendations: ''
      };
    },
    methods: {
      async submitForm(event) {
        event.preventDefault();
        // Prepare user data to send to the backend
        const formData = new FormData();
        formData.append('age', this.age);
        formData.append('location', this.location);
        formData.append('bankStatements', this.$refs.bankStatements.files[0]);
  
        // Send user data to the backend API endpoint
        try {
          const response = await axios.post('/investment/generate_portfolio/', formData);
          this.investmentRecommendations = response.data.recommendations;
        } catch (error) {
          console.error(error);
          // Handle error
        }
      },
      handleFileUpload(event) {
        // Handle file upload logic
      }
    }
  };
  </script>

  