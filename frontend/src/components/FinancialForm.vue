<template>
  <div class="card-form-container">
    <div class="card-form-inner" ref="cardFormInner">
      <div class="card-form-card" v-for="(card, index) in formCards" :key="index">
        <!-- Customize your card content here -->
        <div class="card">
          <div class="card-body">
            <!-- Card content goes here -->
            <h5 class="card-title">{{ card.title }}</h5>
            <p class="card-text">{{ card.description }}</p>
            <!-- More fields, inputs, etc. can be added here -->
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
      formCards: [
        { title: 'Card 1', description: 'Description for Card 1' },
        { title: 'Card 2', description: 'Description for Card 2' },
        // Add more cards as needed
      ],
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initHorizontalScroll();
    });
  },
  methods: {
    initHorizontalScroll() {
      const container = this.$refs.cardFormInner;
      container.addEventListener('wheel', (e) => {
        container.scrollLeft += e.deltaY;
        e.preventDefault();
      });
    },
  },
};
</script>

<style scoped>
.card-form-container {
  overflow-x: scroll;
  white-space: nowrap;
  padding: 20px;
}

.card-form-inner {
  display: inline-flex;
}

.card-form-card {
  min-width: 1100px;
  margin-right: 400px;
}
</style>
