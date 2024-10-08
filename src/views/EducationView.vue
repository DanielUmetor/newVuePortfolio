<template>
  <div class="education-experience-container">
    <div class="education-section">
      <h2 class="section-heading">Education</h2>

      <div class="timeline">
        <div class="timeline-item" v-for="(event, index) in educationTimeline" :key="index">
          <div class="timeline-date">{{ event.date }}</div>
          <div class="timeline-content">
            <h3 class="timeline-title">{{ event.title }}</h3>
            <p class="timeline-description">{{ event.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="experience-section">
      <h2 class="section-heading">Experience</h2>

      <div class="timeline">
        <div class="timeline-item" v-for="(job, index) in experienceTimeline" :key="index">
          <div class="timeline-date">{{ job.date }}</div>
          <div class="timeline-content">
            <h3 class="timeline-title">{{ job.title }}</h3>
            <p class="timeline-description">{{ job.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EducationView',
  setup() {
    const educationTimeline = [
      {
        date: 'April 2024 - September 2024',
        title: 'Full Stack Coding Course at LifeChoices Coding Academy',
        description: 'Graduated from an intensive full-stack development bootcamp focused on modern web technologies.'
      },
      {
        date: '2018 - 2023',
        title: 'Bellville Technical High School',
        description: 'Completed Matric with a Bachelor\'s Pass, specializing in technology and engineering subjects.'
      }
    ];

    const experienceTimeline = [
      {
        date: 'September 2024 - Present',

        title: 'Intern at LC Studio',
        description: 'Began working as a Intern at LC Studio'
      }
    ];

    return {
      educationTimeline,
      experienceTimeline
    };
  }
};
</script>

<style scoped>
.education-experience-container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two equal columns */
  gap: 40px;
  padding: 20px;
  background-color: #0D0D0D;
  color: #EEEEEE;
  font-family: 'Roboto', sans-serif;
  justify-content: center;
}

/* For smaller screens, stack the sections vertically */
@media (max-width: 768px) {
  .education-experience-container {
    grid-template-columns: 1fr; /* Single column layout */
  }
}

.section-heading {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #3E7CB1;
  text-align: center;
}

/* Timeline layout for both sections */
.timeline {
  padding: 20px;
  background-color: #1E1E1E;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
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
  background-color: #2A2A2A;
  border-radius: 8px;
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
