<template>
  <div class="education-experience-container">
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
        <img src="https://danielumetor.github.io/allimages/images/bths.jfif" alt="Bellville Technical High School" class="bths" width="300px" />
        <div class="timeline-content move-right">
          <h3>Bellville Technical High School</h3>
          <p class="timeline-date">2018 - 2023</p>
          <p>
            Completed Matric with a Bachelor’s Pass, specializing in technology and engineering subjects.
            Excelled in key subjects such as Engineering Graphics and Design (EGD), Mathematics, and Physical Sciences, fostering a strong analytical mindset.
          </p>
        </div>
      </div>
    </div>

    <h2 class="section-heading">Experience</h2>
    <div class="timeline">
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
    </div>

    <!-- Certificates Section -->
    <h2 class="section-heading">Certificates</h2>
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
          <h3>AWS</h3>
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
        <img src="https://danielumetor.github.io/allimages/certifications/sample-cert.png" alt="Pending...." class="certificate-image" />
        <div class="certificate-content">
          <h3>Ethical Hacking</h3>
          <p class="certificate-date">Issued: November 2024</p>
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

    const items = document.querySelectorAll('.timeline-item');
    items.forEach(item => observer.observe(item));
  }
};
</script>

<style scoped>
.education-experience-container {
  padding: 40px;
  background-color: #030509; /* Dark background */
  color: #b2b2b2; /* Light gray text */
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
  background-color: #00ADB5; /* Color for the vertical line */
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
  width: 45%; /* Width of the content */
  background-color: #030509; /* Background for content */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative; /* Relative positioning for the timeline */
  transition: transform 0.5s; /* Smooth transform animation */
}

/* Timeline Image */
.timeline-image {
  width: 17rem; /* Adjust as necessary */
  height: 17rem; /* Keep aspect ratio */
  margin-left: 60px; /* Increased space between content and image */
}

/* Timeline Dates */
.timeline-date {
  font-size: 1rem;
  color: #00ADB5; /* Color for the dates */
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
    transform: translateY(10px); /* Slight upward movement */
  }
  100% {
    opacity: 1;
    transform: translateY(0); /* Final position */
  }
}

.certificates-section {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 40px;
}

.certificate-card {
  background-color: #030509;
  border: 1px solid #00ADB5;
  border-radius: 8px;
  width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.certificate-card:hover {
  transform: translateY(-10px);
}

.certificate-image {
  width: 17rem; /* Fixed width and height for certificate images */
  height: 17rem;
  object-fit: cover;
  border-radius: 8px;
}

.certificate-content {
  text-align: center;
  margin-top: 15px;
}

.certificate-date {
  font-size: 1rem;
  color: #00ADB5;
  font-weight: 600;
}
</style>
