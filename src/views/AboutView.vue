<template>
  <div class="about-container">
    <section class="intro">
      <h1 class="animate-slide-in">About Me</h1>
      <p class="animate-fade-in">
        I am Daniel Umetor, a 19-year-old high school graduate with a passion for coding. My journey started in Grade 9 when I attended a Scratch course to create basic games. I later joined LifeChoices to kickstart my career in the Tech Industry. I am currently doing a Full-Stack Web Development course in LifeChoices Academy. I enjoy playing video games and learning new programming languages. These activities keep me engaged and constantly evolving as a developer.
      </p>
    </section>

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
        <li>Leadership</li>
        <li>Communication</li>
        <li>Teamwork</li>
        <li>Problem-Solving</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
};
</script>

<style scoped>
@import '~@fortawesome/fontawesome-free/css/all.css';
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Roboto&display=swap');

/* Colors */
:root {
  --primary-color: #333333; /* Dark grey */
  --accent-color: #3E7CB1;  /* Muted blue */
  --background-color: #F5F5F5; /* Light grey background */
  --text-color: #4A4A4A; /* Darker grey for text */
}

.about-container {
  padding: 40px;
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: 'Lora', serif;
}

.intro {
  text-align: center;
  margin-bottom: 50px;
}

.intro h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
  color: var(--primary-color);
  border-bottom: 2px solid var(--accent-color);
  display: inline-block;
  padding-bottom: 10px;
}

.intro p {
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
}

.skills, .soft-skills, .hobbies {
  margin-bottom: 50px;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
  color: var(--primary-color);
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
/* Updated hover effect with blue outline */
/* Updated hover effect with navbar color */
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

.soft-skills ul {
  list-style-type: none;
  padding: 0;
}

.soft-skills li {
  font-size: 1.2rem;
  margin: 5px 0;
  padding: 5px 0;
  border-bottom: 1px solid var(--accent-color);
}

.hobbies p {
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
  color: var(--text-color);
}

.contact {
  margin-top: 40px;
  text-align: center;
}

.contact a {
  color: var(--accent-color);
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.contact a:hover {
  color: var(--primary-color);
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

/* Animation classes */
.animate-fade-in {
  animation: fadeIn 0.8s ease forwards;
  opacity: 0;
}

.animate-slide-in {
  animation: slideIn 1s ease forwards;
  opacity: 0;
}

.animate-pop-in {
  animation: popIn 0.6s ease forwards;
  opacity: 0;
}
</style>
