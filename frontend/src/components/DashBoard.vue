<template>
  <div class="container-fluid d-flex justify-content-center align-items-center">
    <div class="row">
      <!-- Investment Portfolio Section -->
      <div class="col-md-4 d-flex flex-column align-items-center">
        <div class="card-left mb-3">
          <div class="card-body-left">
            <h5 class="card-title">Investment Portfolio</h5>
            <!-- Add content here -->
            <p class="stocks">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore cupiditate blanditiis voluptatum facilis consequuntur tempora eius reprehenderit fuga, nam earum necessitatibus est harum repellendus asperiores ipsum nobis nulla quae modi.
            </p>
          </div>
        </div>
      </div>

      <!-- Chatbot Section -->
      <div class="col-md-8 d-flex justify-content-center align-items-center">
        <div class="card-right" style="width: 700px; margin-left: 50px; margin-right: 50px;">
          <div class="card-body">
            <h5 class="card-title">Chatbot</h5>
            <div class="chat-container">
              <div v-for="(message, index) in chatMessages" :key="index" class="chat-message">
                <div :class="['message-bubble', message.sender === 'user' ? 'user' : 'bot']">
                  {{ message.text }}
                </div>
              </div>
            </div>
            <div class="input-group mt-3">
              <input
                v-model="userInput"
                type="text"
                class="form-control"
                placeholder="Type your message..."
                @keydown.enter="sendMessage"
              />
              <button class="btn btn-primary" @click="sendMessage">Send</button>
            </div>
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
      userInput: '',
      chatMessages: [
        { text: 'Hello, chatbot!', sender: 'user' },
        { text: 'Hi there! How can I assist you?', sender: 'bot' },
        // Add more initial chat messages here
      ],
    };
  },
  methods: {
    sendMessage() {
      if (this.userInput.trim() === '') return;
      this.chatMessages.push({ text: this.userInput, sender: 'user' });
      this.userInput = '';

      // Simulate bot response (replace with actual response)
      this.chatMessages.push({ text: 'I am just a chatbot responding.', sender: 'bot' });
    },
  },
};
</script>

<style scoped>
/* ... (existing styles) ... */
/* .card-body {
  align-items: center;
} */
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

.stocks{
  font-family:monospace;
  font-size:xx-large;
}
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
  height: 17em; /* Adjust as needed based on your design */
  overflow-y: scroll;
}

.message-bubble {
  display: inline-block;
  padding: 5px 10px;
  border-radius: 15px;
  margin: 5px;
}

.user {
  background-color: #2ecc71;
  color: white;
  align-self: flex-end;
}

.bot {
  background-color: #e1e1e1;
  color: black;
  align-self: flex-start;
}

.form-control {
  border-radius: 10px;
}

.btn-primary {
  border-radius: 10px;
}

/* ... (existing chatbot-specific styles) ... */
</style>
