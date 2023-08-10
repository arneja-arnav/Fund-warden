<!-- 
<template>
  <div class="container-fluid bgc m-0 p-0">
    <div
      id="carouselExampleControls"
      class="carousel slide d-flex align-items-center justify-content-center"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          class="carousel-item"
          :class="{ active: currentIndex === index }"
          v-for="(item, index) in formItems"
          :key="index"
        >
          <div class="d-flex align-items-center justify-content-center w-100 vh-100" :style="carouselItemStyle">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{{ slideTitles[index] }}</h5>
                <form @submit.prevent="submitForm">
                  <div class="mb-3">
                    <label :for="`pdfInput${index}`" class="form-label">{{ slideTitles[index] }}</label>
                    <input type="file" :id="`pdfInput${index}`" class="form-control" accept=".pdf" @change="handleFileChange(index)" />
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" @click="prevSlide">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" @click="nextSlide">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      formItems: [
        { pdfFile: null },
        { pdfFile: null },
        { pdfFile: null },
      ],
      slideTitles: ["Aadhar Card Number", "PAN Card Number", "Banking Statements"],
      carouselItemStyle: {},
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.formItems.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.formItems.length) % this.formItems.length;
    },
    handleFileChange(index) {
      const input = this.$refs[`pdfInput${index}`][0];
      if (input && input.files && input.files[0]) {
        this.formItems[index].pdfFile = input.files[0];
      }
    },
    submitForm() {
      console.log(this.formItems[this.currentIndex].pdfFile);
      // Implement your form submission logic here
    },
  },
};
</script>

<style scoped>
/* Add custom styles here */
.bgc {
  background-color: #4268ef;
}
.carousel-item {
  display: none;
}

.carousel-item.active {
  display: block;
}

.card {
  width: 1500px;
  height: 750px;
}

/* Style for the carousel buttons */
.carousel-control-prev,
.carousel-control-next {
  width: auto;
  background-color: rgba(209, 228, 6, 0); /* Adjust as needed */
  border: 20px;
  color: rgb(210, 13, 13);
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  transition: background-color 0.3s ease-in-out;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
  background-color: rgba(0, 0, 0, 0.8); /* Adjust as needed */
}
</style> -->
<template>
  <div class="container-fluid bgc m-0 p-0">
    <div
      id="carouselExampleControls"
      class="carousel slide d-flex align-items-center justify-content-center"
      :data-interval="false" 
    >
      <div class="carousel-inner">
        <div
          class="carousel-item"
          :class="{ active: currentIndex === index }"
          v-for="(item, index) in formItems"
          :key="index"
        >
          <div class="d-flex align-items-center justify-content-center w-100 vh-100" :style="carouselItemStyle">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{{ slideTitles[index] }}</h5>
                <form>
                  <div class="mb-3">
                    <label :for="`pdfInput${index}`" class="form-label">{{ slideTitles[index] }}</label>
                    <input type="file" :id="`pdfInput${index}`" class="form-control" accept=".pdf" ref="pdfInputRefs" />
                  </div>
                  <button type="button" class="btn btn-primary" @click="submitForm(index)">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" @click="prevSlide">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" @click="nextSlide">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      formItems: [
        { pdfFile: null },
        { pdfFile: null },
        { pdfFile: null },
      ],
      slideTitles: ["Aadhar Card Number", "PAN Card Number", "Banking Statements"],
      carouselItemStyle: {},
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.formItems.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.formItems.length) % this.formItems.length;
    },
    submitForm(index) {
      console.log(this.formItems[index].pdfFile);
      // Implement your form submission logic here
      
      // Move to the next slide
      this.nextSlide();
    },
  },
};
</script>

<style scoped>
/* Add custom styles here */
.bgc {
  background-color: #4268ef;
}
.carousel-item {
  display: none;
}

.carousel-item.active {
  display: block;
}

.card {
  width: 1500px;
  height: 750px;
}

/* Style for the carousel buttons */
.carousel-control-prev,
.carousel-control-next {
  width: auto;
  background-color: rgba(209, 228, 6, 0); /* Adjust as needed */
  border: 20px;
  color: rgb(210, 13, 13);
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  transition: background-color 0.3s ease-in-out;
}

.carousel-control-prev:hover,
.carousel-control-next:hover {
  background-color: rgba(0, 0, 0, 0.8); /* Adjust as needed */
}
</style>
