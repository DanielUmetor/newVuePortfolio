<template>
  <div class="about-container">
    <div class="about-content">
      <!-- Image on the left, ending by the "evolving as a developer" text -->
      <img class="profile-pic" src="https://danielumetor.github.io/allimages/MatricPic.jpg" alt="Daniel Umetor" />
      
      <!-- Text content on the right -->
      <div class="about-text">
        <section class="intro">
          <h1 class="animate-slide-in">About Me</h1>
          <p class="animate-fade-in">
            I am Daniel Umetor, a 19-year-old high school graduate with a passion for coding. My journey started in Grade 9 when I attended a Scratch course to create basic games. I later joined LifeChoices to kickstart my career in the Tech Industry. I am currently doing a Full-Stack Web Development course in LifeChoices Academy. I enjoy playing video games and learning new programming languages. These activities keep me engaged and constantly evolving as a developer.
          </p>
        </section>
      </div>
    </div>

    <!-- Centered content below the image and About Me section -->
    <div class="centered-content">
      <hr class="section-divider" />

      <section class="skills animate-fade-in">
        <h2>Technical Skills</h2>
        <div class="skills-container">
          <div class="skill animate-pop-in">
            <i class="fab fa-html5"></i>
            <span>HTML</span>
          </div>
          <div class="skill animate-pop-in">
            <i class="fab fa-css3-alt"></i>
            <span>CSS</span>
          </div>
          <div class="skill animate-pop-in">
            <i class="fab fa-git"></i>
            <span>Git</span>
          </div>
          <div class="skill animate-pop-in">
            <i class="fab fa-bootstrap"></i>
            <span>Bootstrap</span>
          </div>
          <div class="skill animate-pop-in figma-icon">
            <i class="fab fa-figma"></i>
            <span>Figma</span>
          </div>
          <div class="skill animate-pop-in">
            <i class="fab fa-js-square"></i>
            <span>JavaScript</span>
          </div>
          <div class="skill animate-pop-in vuejs-icon">
            <i class="fab fa-vuejs"></i>
            <span>VueJS</span>
          </div>
          <div class="skill animate-pop-in nodejs-icon">
            <i class="fab fa-node"></i>
            <span>NodeJS</span>
          </div>
          <div class="skill animate-pop-in mysql-icon">
            <i class="fas fa-database"></i>
            <span>MySQL</span>
          </div>
        </div>
      </section>

      <hr class="section-divider" />

      <section class="soft-skills animate-fade-in">
        <h2>Soft Skills</h2>
        <ul>
          <li><i class="fas fa-user-tie"></i> Leadership</li>
          <li><i class="fas fa-comments"></i> Communication</li>
          <li><i class="fas fa-users"></i> Teamwork</li>
          <li><i class="fas fa-lightbulb"></i> Problem-Solving</li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
@import '~@fortawesome/fontawesome-free/css/all.css';
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

/* Colors */
:root {
  --primary-color: #333333; /* Dark grey */
  --accent-color: #3E7CB1;  /* Muted blue */
  --background-color: #F5F5F5; /* Light grey background */
  --text-color: #4A4A4A; /* Darker grey for text */
  --navbar-hover-color: #00ADB5; /* Light blue color for headings and navbar */
}

.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: 'Lora', serif;
}

/* Container to hold both the image and text */
.about-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
}

/* Image styling with fixed height */
.profile-pic {
  width: 40%; /* Set a decent width */
  max-height: 32rem; /* Set height to end by the text */
  object-fit: cover;
  margin-right: 40px; /* Adds space between the image and text */
  border-radius: 8px; /* Optional rounded corners */
}

/* Text content styling */
.about-text {
  width: 50%;
}

/* Center intro text */
.intro {
  text-align: left;
}

.intro h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
  color: #00ADB5; /* Light blue for About Me heading */
  border-bottom: 2px solid var(--accent-color);
  display: inline-block;
  padding-bottom: 10px;
}

.intro p {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0;
  line-height: 1.8;
  font-family: 'Open Sans', sans-serif;
}

/* Center the content below the image */
.centered-content {
  width: 100%;
  text-align: center;
  margin-top: 50px;
}

/* Skills section */
.skills h2, 
.soft-skills h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
  color: #00ADB5; /* Light blue for headings */
  border-left: 4px solid var(--accent-color);
  padding-left: 15px;
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns */
  gap: 40px 30px; /* Adds horizontal and vertical spacing */
  justify-items: center;
  margin-bottom: 30px;
}

.skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0; /* Adds vertical spacing around each skill */
}

.skill i {
  font-size: 50px;
  margin-bottom: 10px;
  color: var(--accent-color);
  transition: transform 0.3s ease, color 0.3s ease, outline 0.3s ease;
}

/* Updated hover effect with blue outline */
.skill:hover i {
  transform: scale(1.1);
  color: var(--primary-color);
  outline: 3px solid #00ADB5; /* Match navbar hover color */
  outline-offset: 5px;
}

.skill span {
  font-size: 1rem;
}

.nodejs-icon {
  grid-column: 2; /* Keeps NodeJS in the middle column */
}

.vuejs-icon {
  grid-column: 2; /* VueJS remains in the middle column */
  grid-row: 2;   /* Moves VueJS to the second row */
}

.mysql-icon {
  grid-column: 3; /* Positions MySQL next to NodeJS */
}

.figma-icon {
  grid-column: 1; /* Positions Figma under Bootstrap */
  grid-row: 2;    /* Moves Figma to the second row */
}

.soft-skills {
  text-align: center; /* Centers the content */
}

.soft-skills ul {
  list-style-type: none;
  padding: 0;
  display: inline-block; /* Ensures the ul is centered */
}

.soft-skills li {
  font-size: 1.2rem;
  margin: 5px 0;
  padding: 5px 0;
  border-bottom: 1px solid var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center; /* Centers the content within each li */
  transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition for hover */
}

.soft-skills li i {
  margin-right: 10px; /* Space between icon and text */
  color: var(--accent-color); /* Match icon color with accent color */
  transition: color 0.3s ease; /* Smooth transition for icon color */
}

.soft-skills li:hover {
  background-color: rgba(224, 247, 250, 0.5); /* Subtle transparent background color on hover */
  color: var(--primary-color); /* Change text color on hover */
}

.soft-skills li:hover i {
  color: var(--primary-color); /* Change icon color on hover */
}

/* Section Divider */
.section-divider {
  margin: 40px 0;
  border: 0;
  border-top: 1px solid var(--accent-color);
}

/* Keyframe animations */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes popIn {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes slideIn {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Animation classes */
.animate-fade-in {
  animation: fadeIn 0.8s ease forwards;
  opacity: 0;
}

.animate-pop-in {
  animation: popIn 0.6s ease forwards;
  opacity: 0;
}

.animate-slide-in {
  animation: slideIn 1s ease forwards;
  opacity: 0;
}
</style>
