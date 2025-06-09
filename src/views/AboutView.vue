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
            I am Daniel Umetor, a 20-year-old graduate with a passion for coding. My journey started in Grade 9 when I attended a Scratch course to create basic games. I later joined LifeChoices to kickstart my career in the Tech Industry. I am currently doing a Full-Stack Web Development course in LifeChoices Academy. I enjoy playing video games and learning new programming languages. These activities keep me engaged and constantly evolving as a developer.
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
            <i class="fab fa-js-square"></i>
            <span>JavaScript</span>
          </div>
          <div class="skill animate-pop-in">
            <i class="fab fa-python"></i>
            <span>Python</span>
          </div>
          <div class="skill animate-pop-in">
            <i class="fab fa-vuejs"></i>
            <span>Vue.js</span>
          </div>
          <div class="skill animate-pop-in">
            <i class="fab fa-node"></i>
            <span>Node.js</span>
          </div>
          <div class="skill animate-pop-in">
            <i class="fas fa-database"></i>
            <span>MySQL</span>
          </div>
          <div class="skill animate-pop-in">
            <i class="fas fa-database"></i>
            <span>PostgreSQL</span>
          </div>
          <div class="skill animate-pop-in">
            <i class="fab fa-git"></i>
            <span>Git</span>
          </div>
          <div class="skill animate-pop-in">
            <i class="fab fa-bootstrap"></i>
            <span>Bootstrap</span>
          </div>
          <div class="skill animate-pop-in">
            <i class="fab fa-figma"></i>
            <span>Figma</span>
          </div>
          <div class="skill animate-pop-in">
            <i class="fas fa-paper-plane"></i>
            <span>Postman</span>
          </div>
          <div class="skill animate-pop-in">
            <i class="fab fa-aws"></i>
            <span>AWS</span>
          </div>
        </div>
      </section>

      <hr class="section-divider" />

      <section class="soft-skills animate-fade-in">
        <h2>Soft Skills</h2>
        <div class="soft-skills-grid">
          <div class="soft-skill-item">
            <i class="fas fa-user-tie"></i>
            <span>Leadership</span>
          </div>
          <div class="soft-skill-item">
            <i class="fas fa-comments"></i>
            <span>Communication</span>
          </div>
          <div class="soft-skill-item">
            <i class="fas fa-users"></i>
            <span>Teamwork</span>
          </div>
          <div class="soft-skill-item">
            <i class="fas fa-lightbulb"></i>
            <span>Problem-Solving</span>
          </div>
          <div class="soft-skill-item">
            <i class="fas fa-lightbulb"></i>
            <span>Attention to detail</span>
            
          </div>
          <div class="soft-skill-item">
            <i class="fas fa-lightbulb"></i>
            <span>Work-ethic</span>
          </div>
        </div>
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
  --primary-color: #333333;
  --accent-color: #3E7CB1;
  --background-color: #030509;
  --text-color: #b2b2b2;
  --heading-color: #00ADB5;
  --card-bg: #0a0f1b;
}

.about-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 40px;
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: 'Lora', serif;
  min-height: 100vh;
}

.about-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  gap: 60px;
  margin-bottom: 60px;
}

.profile-pic {
  width: 45%;
  max-width: 450px;
  height: auto;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 173, 181, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-pic:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 173, 181, 0.3);
}

.about-text {
  flex: 1;
}

.intro {
  text-align: left;
}

.intro h1 {
  font-size: 3rem;
  margin-bottom: 30px;
  font-family: 'Roboto', sans-serif;
  color: var(--heading-color);
  position: relative;
  padding-bottom: 15px;
}

.intro h1::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 80px;
  height: 3px;
  background-color: var(--accent-color);
}

.intro p {
  font-size: 1.1rem;
  line-height: 1.9;
  font-family: 'Open Sans', sans-serif;
  color: var(--text-color);
}

.centered-content {
  width: 100%;
  max-width: 1200px;
  text-align: center;
}

.skills h2, 
.soft-skills h2 {
  font-size: 2.5rem;
  margin-bottom: 50px;
  font-family: 'Roboto', sans-serif;
  color: var(--heading-color);
  position: relative;
  display: inline-block;
}

.skills h2::before,
.soft-skills h2::before {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background-color: var(--accent-color);
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 40px;
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
}

.skill {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 20px;
  background-color: var(--card-bg);
  border-radius: 10px;
  border: 1px solid rgba(0, 173, 181, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
}

.skill:hover {
  transform: translateY(-8px);
  border-color: var(--heading-color);
  box-shadow: 0 10px 25px rgba(0, 173, 181, 0.2);
  background-color: rgba(0, 173, 181, 0.05);
}

.skill i {
  font-size: 45px;
  margin-bottom: 15px;
  color: var(--heading-color);
  transition: all 0.3s ease;
}

.skill:hover i {
  transform: scale(1.1);
  color: var(--accent-color);
}

.skill span {
  font-size: 0.95rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Special icon colors for brand consistency */
.fab.fa-html5 { color: #E34C26; }
.fab.fa-css3-alt { color: #1572B6; }
.fab.fa-js-square { color: #F7DF1E; }
.fab.fa-python { color: #3776AB; }
.fab.fa-vuejs { color: #4FC08D; }
.fab.fa-node { color: #339933; }
.fab.fa-bootstrap { color: #7952B3; }
.fab.fa-figma { color: #F24E1E; }
.fab.fa-git { color: #F05032; }
.fab.fa-aws { color: #FF9900; }

.soft-skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.soft-skill-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 20px;
  background-color: var(--card-bg);
  border-radius: 10px;
  border: 1px solid rgba(0, 173, 181, 0.2);
  transition: all 0.3s ease;
}

.soft-skill-item:hover {
  transform: translateY(-5px);
  border-color: var(--heading-color);
  box-shadow: 0 8px 20px rgba(0, 173, 181, 0.2);
}

.soft-skill-item i {
  font-size: 28px;
  color: var(--heading-color);
}

.soft-skill-item span {
  font-size: 1.1rem;
  font-weight: 600;
}

.section-divider {
  margin: 60px auto;
  width: 80%;
  max-width: 600px;
  border: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--accent-color), transparent);
}

/* Animations */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes popIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-slide-in {
  animation: slideIn 0.8s ease-out;
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-pop-in {
  animation: popIn 0.6s ease-out;
}

/* Media Queries */
@media (max-width: 1024px) {
  .skills-container {
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .about-container {
    padding: 40px 20px;
  }

.about-content {
  flex-direction: column;
  gap: 40px;
}

.profile-pic {
  width: 100%;
  max-width: 350px;
}

.about-text {
  width: 100%;
  text-align: center;
}

.intro h1 {
  font-size: 2.5rem;
}

.intro h1::after {
  left: 50%;
  transform: translateX(-50%);
}

.skills h2,
.soft-skills h2 {
  font-size: 2rem;
}

.skills-container {
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  padding: 15px;
}

.skill {
  padding: 20px 15px;
}

.skill i {
  font-size: 40px;
}

.skill span {
  font-size: 0.85rem;
}

.soft-skills-grid {
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
}

@media (max-width: 480px) {
.about-container {
  padding: 30px 15px;
}

.intro h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.intro p {
  font-size: 1rem;
  line-height: 1.7;
}

.skills h2,
.soft-skills h2 {
  font-size: 1.75rem;
  margin-bottom: 30px;
}

.skills-container {
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 10px;
}

.skill {
  padding: 15px 10px;
}

.skill i {
  font-size: 35px;
  margin-bottom: 10px;
}

.skill span {
  font-size: 0.8rem;
}

.soft-skills-grid {
  grid-template-columns: 1fr;
  gap: 15px;
}

.soft-skill-item {
  padding: 15px;
}

.soft-skill-item i {
  font-size: 24px;
}

.soft-skill-item span {
  font-size: 1rem;
}

.section-divider {
  margin: 40px auto;
}
}

/* Additional hover effects for touch devices */
@media (hover: none) {
.skill:active {
  transform: scale(0.95);
}

.soft-skill-item:active {
  transform: scale(0.95);
}
}
</style>