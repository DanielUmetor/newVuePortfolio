<template>
  <div class="education-container">
    <h1 class="education-heading">My Educational Journey</h1>

    <div class="timeline">
      <div class="timeline-item" v-for="(event, index) in timelineEvents" :key="index">
        <div class="timeline-date">{{ event.date }}</div>
        <div class="timeline-content">
          <h3 class="timeline-title">{{ event.title }}</h3>
          <p class="timeline-description">{{ event.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EducationView',
  setup() {
    const timelineEvents = [
      {
        date: '2024',
        title: 'Full Stack Coding Course at LifeChoices Academy',
        description: 'Graduated from an intensive full-stack development bootcamp focused on modern web technologies.'
      },
      {
        date: '2023',
        title: 'Bellville Technical High School',
        description: 'Completed Matric with a Bachelor\'s Pass, specializing in technology and engineering subjects.'
      }
    ];

    return {
      timelineEvents
    };
  }
};
</script>

<style scoped>
.education-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 60px); /* Adjust based on your navbar height */
  padding: 0 20px;
  background-color: #0D0D0D;
  color: #EEEEEE;
  font-family: 'Roboto', sans-serif;
  text-align: center; /* Centers text */
}

.education-heading {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #3E7CB1;
  border-bottom: 2px solid #3E7CB1;
  padding-bottom: 10px;
  width: 100%;
}

/* Timeline layout */
.timeline {
  width: 100%; /* Takes full width */
  max-width: 600px; /* Optional: limit the width */
  padding: 20px;
}

.timeline-item {
  margin-bottom: 20px;
}

.timeline-date {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5px;
  color: #3E7CB1;
}

.timeline-content {
  padding: 10px;
  background-color: #1E1E1E;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.timeline-title {
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.timeline-description {
  font-size: 0.9rem;
  line-height: 1.4;
}
</style>
