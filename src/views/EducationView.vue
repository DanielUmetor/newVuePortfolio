<template>
  <div class="education-experience-container">
    <h2 class="section-heading">Experience</h2>
    <div class="timeline">
      <!-- Second New Job Experience -->
      <div class="timeline-item right-animated">
        <img src="https://danielumetor.github.io/allimages/hexSoftwares.png" alt="Company Name 2" class="bths" />
        <div class="timeline-content move-right">
          <h3>Web Developer Intern at HexSoftwares</h3>
          <p class="timeline-date">January 2025 - February 2025</p>  
          <p>
            I collaborated remotely with a team at HexSoftwares on web development projects, where I demonstrated strong problem-solving skills and technical expertise. I consistently met project deadlines, contributed to key tasks, and communicated effectively with my team. Adapting well to the virtual work environment, I reinforced my commitment to delivering high-quality solutions.
          </p>
        </div>
      </div>

      <!-- LC Studio -->
      <div class="timeline-item left-animated">
        <div class="timeline-content move-left">
          <h3>Intern at LC Studio</h3>
          <p class="timeline-date">September 2024 - Present</p>
          <p>
            At LC Studio, you engage in web development projects, focusing on leveraging technology to empower youth talent in South Africa. The agency emphasizes providing tech services while supporting youth skill development in areas like web design and development.
            This opportunity helped refine my understanding of front-end and back-end development and strengthened my skills in problem-solving, debugging, and working within a team-oriented environment.
          </p>
        </div>
        <img src="https://danielumetor.github.io/allimages/lc%20studio.jpg" alt="Intern at LC Studio" class="timeline-image" />
      </div>

      <!-- Outlier Experience -->
      <div class="timeline-item right-animated">
        <img src="https://danielumetor.github.io/allimages/outlier.jpeg" alt="Outlier" class="bths" />
        <div class="timeline-content move-right">
          <h3>Freelance AI Prompter at Outlier</h3>
          <p class="timeline-date">November 2024 - Present</p>
          <p>
            At Outlier, I worked as an AI prompter, crafting, testing, and optimizing prompts to enhance AI output. I collaborated asynchronously and remotely, using Python, JavaScript, and Java to refine prompt structures, analyze data, and implement solutions for specific use cases.
          </p>
        </div>
      </div>
    </div>

    <h2 class="section-heading">Education</h2>
    <div class="timeline">
      <!-- LifeChoices Academy -->
      <div class="timeline-item left-animated">
        <div class="timeline-content move-left">
          <h3>Full Stack Coding Course at LifeChoices Coding Academy</h3>
          <p class="timeline-date">April 2024 - September 2024</p>
          <p>
            Graduated from an intensive full-stack development bootcamp focused on modern web technologies as well as personal and professional development.
            Learned how to work in a fast-paced environment, collaborate with teams, and tackle real-world coding challenges.
          </p>
        </div>
        <img src="https://danielumetor.github.io/allimages/images/download.png" alt="LifeChoices Academy" class="timeline-image" />
      </div>

      <!-- Bellville Technical High School -->
      <div class="timeline-item right-animated">
        <img src="https://danielumetor.github.io/allimages/images/bths.jfif" alt="Bellville Technical High School" class="bths" />
        <div class="timeline-content move-right">
          <h3>Bellville Technical High School</h3>
          <p class="timeline-date">2018 - 2023</p>
          <p>
            Completed Matric with a Bachelor's Pass, specializing in technology and engineering subjects.
            Excelled in key subjects such as Engineering Graphics and Design (EGD), Mathematics, and Physical Sciences, fostering a strong analytical mindset.
          </p>
        </div>
      </div>
    </div>

    <!-- Certificates Section -->
    <h2 class="section-heading">Certificates</h2>
    <div class="certificates-container">
      <div class="certificates-section">
        <!-- Certificate 1 -->
        <div class="certificate-card">
          <img src="https://danielumetor.github.io/allimages/certifications/LC%20Academy.jpeg" alt="Full Stack Web Development Certificate" class="certificate-image" />
          <div class="certificate-content">
            <h3>Full Stack Web Development</h3>
            <p class="certificate-date">Issued: September 2024</p>
          </div>
        </div>

        <!-- Certificate 2 -->
        <div class="certificate-card">
          <img src="https://danielumetor.github.io/allimages/Screenshot%202024-11-20%20123715.png" alt="AWS" class="certificate-image" />
          <div class="certificate-content">
            <h3>AWS Cloud Practitioner Exam Prep</h3>
            <p class="certificate-date">Issued: October 2024</p>
          </div>
        </div>

        <!-- Certificate 3 -->
        <div class="certificate-card">
          <img src="https://danielumetor.github.io/allimages/Screenshot%202024-11-20%20155720.png" alt="CyberSecurity" class="certificate-image" />
          <div class="certificate-content">
            <h3>Junior CyberSecurity Analyst</h3>
            <p class="certificate-date">Issued: November 2024</p>
          </div>
        </div>

        <!-- Certificate 4 -->
        <div class="certificate-card">
          <img src="https://danielumetor.github.io/allimages/certifications/Screenshot%202024-11-28%20154736.png" alt="Ethical Hacker" class="certificate-image" />
          <div class="certificate-content">
            <h3>Ethical Hacking</h3>
            <p class="certificate-date">Issued: November 2024</p>
          </div>
        </div>

        <!-- Certificate 5 -->
        <div class="certificate-card">
          <img src="https://danielumetor.github.io/allimages/certifications/Screenshot%202024-11-28%20154736.png" alt="Operating System Basics" class="certificate-image" />
          <div class="certificate-content">
            <h3>Operating System Basics</h3>
            <p class="certificate-date">Issued: November 2024</p>
          </div>
        </div>
        
        <!-- Certificate 6 -->
        <div class="certificate-card">
          <img src="https://danielumetor.github.io/allimages/certifications/hexsoftwares-page-001.jpg" alt="HexSoftwares" class="certificate-image" />
          <div class="certificate-content">
            <h3>Web Development Internship</h3>
            <p class="certificate-date">Issued: February 2025</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EducationExperienceView',
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, { threshold: 0.2 });

    const items = document.querySelectorAll('.timeline-item, .certificate-card');
    items.forEach(item => observer.observe(item));
  }
};
</script>

<style scoped>
.education-experience-container {
  padding: 40px 20px;
  background-color: #030509;
  color: #b2b2b2;
  font-family: 'Lora', serif;
}

.section-heading {
  text-align: center;
  font-size: 2rem;
  color: #00ADB5;
  margin-bottom: 40px;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: auto;
  padding: 10px 0;
}

/* Vertical Line */
.timeline::before {
  content: '';
  position: absolute;
  width: 4px;
  background-color: #00ADB5;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

/* Timeline Items */
.timeline-item {
  display: flex;
  align-items: center;
  margin: 20px 0;
  position: relative;
}

.bths {
  margin-right: 5rem;
  height: 17rem;
  width: 17rem;
}

/* Left Side Items */
.timeline-item.left-animated {
  justify-content: flex-start;
}

/* Right Side Items */
.timeline-item.right-animated {
  justify-content: flex-end;
}

/* Move text 5rem to the left */
.move-left {
  transform: translateX(-5rem);
}

/* Move text 5rem to the right */
.move-right {
  transform: translateX(5rem);
}

/* Timeline Content */
.timeline-content {
  width: 45%;
  background-color: #030509;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: transform 0.5s;
}

/* Timeline Image */
.timeline-image {
  width: 17rem;
  height: 17rem;
  margin-left: 60px;
}

/* Timeline Dates */
.timeline-date {
  font-size: 1rem;
  color: #00ADB5;
  font-weight: 600;
  margin-bottom: 10px;
}

/* Animation Class */
.in-view {
  animation: fadeIn 0.8s ease forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Certificates Container */
.certificates-container {
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
}

.certificates-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  justify-content: center;
  margin-top: 40px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
}

.certificate-card {
  background-color: #030509;
  border: 1px solid #00ADB5;
  border-radius: 8px;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.certificate-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 173, 181, 0.2);
}

/* Updated to make images uniform */
.certificate-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
}

.certificate-content {
  text-align: center;
  margin-top: 15px;
  width: 100%;
}

.certificate-content h3 {
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #e0e0e0;
}

.certificate-date {
  font-size: 1rem;
  color: #00ADB5;
  font-weight: 600;
}

/* Responsive Design Improvements */
@media (max-width: 1200px) {
  .timeline-image,
  .bths {
    width: 15rem;
    height: 15rem;
  }
  
  .timeline-image {
    margin-left: 40px;
  }
  
  .bths {
    margin-right: 4rem;
  }
}

@media (max-width: 1024px) {
  .certificates-section {
    grid-template-columns: repeat(2, 1fr);
    gap: 35px;
  }
  
  .timeline-content {
    width: 50%;
  }
  
  .move-left,
  .move-right {
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .education-experience-container {
    padding: 20px 15px;
  }
  
  .section-heading {
    font-size: 1.75rem;
  }
  
  /* Stack timeline items vertically on mobile */
  .timeline::before {
    left: 20px;
  }
  
  .timeline-item {
    flex-direction: column;
    align-items: flex-start;
    margin: 40px 0;
  }
  
  .timeline-item.right-animated {
    flex-direction: column;
  }
  
  .timeline-content {
    width: calc(100% - 60px);
    margin-left: 60px;
    transform: translateX(0) !important;
  }
  
  .timeline-image,
  .bths {
    width: 12rem;
    height: 12rem;
    margin: 0 0 20px 60px;
    order: -1;
  }
  
  .certificates-section {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .certificate-card {
    max-width: 350px;
    margin: 0 auto;
    width: 100%;
  }
}

@media (max-width: 480px) {
  .education-experience-container {
    padding: 15px 10px;
  }
  
  .section-heading {
    font-size: 1.5rem;
    margin-bottom: 30px;
  }
  
  .timeline::before {
    left: 15px;
    width: 3px;
  }
  
  .timeline-content {
    width: calc(100% - 40px);
    margin-left: 40px;
    padding: 15px;
  }
  
  .timeline-content h3 {
    font-size: 1.1rem;
  }
  
  .timeline-content p {
    font-size: 0.9rem;
  }
  
  .timeline-image,
  .bths {
    width: 10rem;
    height: 10rem;
    margin-left: 40px;
    margin-bottom: 15px;
  }
  
  .certificate-card {
    padding: 15px;
  }
  
  .certificate-image {
    height: 180px;
  }
  
  .certificate-content h3 {
    font-size: 1rem;
  }
  
  .certificate-date {
    font-size: 0.9rem;
  }
}

/* Additional hover effect for timeline items */
.timeline-content:hover {
  box-shadow: 0 4px 12px rgba(0, 173, 181, 0.2);
  transform: translateY(-2px);
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>