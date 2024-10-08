<template>
  <div class="education-experience-container">
    <div class="education-section">
      <h2 class="section-heading">Education</h2>

      <div class="timeline">
        <div 
          class="timeline-item"
          v-for="(event, index) in educationTimeline" 
          :key="index"
          :class="index % 2 === 0 ? 'image-left' : 'image-right'"
        >
          <img 
            v-if="event.logo" 
            :src="event.logo" 
            alt="Logo"
            class="timeline-logo"
          />
          <div class="timeline-content">
            <div class="timeline-date">{{ event.date }}</div>
            <h3 class="timeline-title">{{ event.title }}</h3>
            <p class="timeline-description">{{ event.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="experience-section">
      <h2 class="section-heading">Experience</h2>

      <div class="timeline">
        <div 
          class="timeline-item"
          v-for="(job, index) in experienceTimeline" 
          :key="index"
          :class="index % 2 === 0 ? 'image-left' : 'image-right'"
        >
          <img 
            v-if="job.logo" 
            :src="job.logo" 
            alt="Logo"
            class="timeline-logo"
          />
          <div class="timeline-content">
            <div class="timeline-date">{{ job.date }}</div>
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
        description: 'Graduated from an intensive full-stack development bootcamp focused on modern web technologies as well as Personal and Professional  Development.',

        logo: 'https://danielumetor.github.io/allimages/images/download.png' // LifeChoices Academy logo
      },
      {
        date: '2018 - 2023',
        title: 'Bellville Technical High School',
        description: 'Completed Matric with a Bachelor\'s Pass, specializing in technology and engineering subjects. At Bellville Technical High School, students participate in various activities and learn technical skills, with a focus on vocational subjects starting in Grade 8. Engineering Graphics and Design is a required subject.  ',
        logo: 'https://danielumetor.github.io/allimages/images/bths.jfif' // Bellville Technical High School logo
      }
    ];

    const experienceTimeline = [
      {
        date: 'September 2024 - Present',
        title: 'Intern at LC Studio',
        description: 'At LC Studio, individuals can learn about WordPress website development, participate in a comprehensive 6-month full-stack web development course, and engage in an industry-related internship for 6 months. The program includes a technical assessment as part of potential employment interviews, focusing on practical skills in web development.',
        logo: 'https://danielumetor.github.io/allimages/download%20(1).png' // Add your LC Studio logo link here
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
/* Only the font has been changed without affecting layout or sizes */
.education-experience-container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Two equal columns */
  gap: 40px;
  padding: 20px;
  background-color: #0D0D0D;
  color: #EEEEEE;
  font-family: 'Lato', sans-serif; /* Changed to 'Lato' */
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  gap: 20px;
}

.timeline-content {
  padding: 10px;
  background-color: #2A2A2A;
  border-radius: 8px;
  width: 60%;
}

.timeline-logo {
  width: 12rem;
  object-fit: contain;
}

/* Align image on left and text on right */
.image-left {
  flex-direction: row;
}

/* Align image on right and text on left */
.image-right {
  flex-direction: row-reverse;
}

.timeline-date {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5px;
  color: #3E7CB1;
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
