<template>
    <div class="container-fluid d-flex justify-content-center align-items-center">
      <div class="row">
        <div class="col-md-4 d-flex flex-column align-items-center">
          <div class="card-left mb-3">
            <div class="card-body-left">
              <h5 class="card-title">Risky Stocks</h5>
              <!-- Add content here -->
              <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" id="riskyDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  Select Stock
                </button>
                <ul class="dropdown-menu" aria-labelledby="riskyDropdown">
                  <li><a class="dropdown-item" href="#">Option 1</a></li>
                  <li><a class="dropdown-item" href="#">Option 2</a></li>
                  <li><a class="dropdown-item" href="#">Option 3</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card-left mb-3">
            <div class="card-body-left">
              <h5 class="card-title">Safe Stocks</h5>
              <!-- Add content here -->
              <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" id="safeDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  Select Stock
                </button>
                <ul class="dropdown-menu" aria-labelledby="safeDropdown">
                  <li><a class="dropdown-item" href="#">Option 1</a></li>
                  <li><a class="dropdown-item" href="#">Option 2</a></li>
                  <li><a class="dropdown-item" href="#">Option 3</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card-left mb-3">
            <div class="card-body-left">
              <h5 class="card-title">Medium Stocks</h5>
              <!-- Add content here -->
              <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" id="mediumDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  Select Stock
                </button>
                <ul class="dropdown-menu" aria-labelledby="mediumDropdown">
                  <li><a class="dropdown-item" href="#">Option 1</a></li>
                  <li><a class="dropdown-item" href="#">Option 2</a></li>
                  <li><a class="dropdown-item" href="#">Option 3</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8 d-flex justify-content-center align-items-center">
          <div class="card-right" style="width: 700px; margin-left: 400px; margin-right: 50px;"> <!-- Adjust width and margins -->
            <div class="card-body">
              <h5 class="card-title">Chatbot</h5>
              <!-- Integrate your chatbot component here -->
              <div class="chat-container">
                <div class="chat-message">
                  User: Hello, chatbot!
                </div>
                <div class="chat-message">
                  Bot: Hi there! How can I assist you?
                </div>
                <!-- Add more chat messages here -->
              </div>
              <div class="input-group mt-3">
                <input type="text" class="form-control" placeholder="Type your message...">
                <button class="btn btn-primary">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  // Import necessary components here
  
  export default {
    // Component options
  };
  </script>
  
  <style scoped>
  /* Add custom styles here */
  
  .card-left {
    margin: 50px 50px 0;
    padding: 20px;
    border: 1px solid #ccc;
    background-color: #f8f9fa;
  }
  
  .card-right {
    margin: 50px 50px 0;
    padding: 20px;
    background-color: #ffffff;
    border: 1px solid #ccc;
  }
  
  /* .card-body {
    align-items: center;
  } */
  
  .card-title {
    align-items: center;
    text-align: center;
    color: #ecf0f1;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #34495e;
  }

  .btn{
    background-color: #2ecc71;
    text-align: center;
  }
  
  .container-fluid {
    background-color: #4268EF;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .row {
    display: flex;
  }
  
  .card-body-left{
    width: 500px;
    /* margin-left: 100px; */
    /* padding-left: 100px; */
    /* margin-right: 00px; */
    /* align-items: flex-end; */
  }
  /* Chatbot styles */
  .chat-container {
    max-height: 200px;
    overflow-y: scroll;
  }

  .mb-3{
    margin-left: 200px;
  }
  
  .chat-message {
    margin: 500px 0;
  }
  </style>
  