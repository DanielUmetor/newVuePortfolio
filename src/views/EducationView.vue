<template>
  <div class="education-experience-container">
    <!-- Existing Sections -->
    <h2 class="section-heading">Education</h2>
    <div class="timeline">
      <!-- LifeChoices Academy -->
      <div class="timeline-item left-animated">
        <div class="timeline-content move-left">
          <h3>Full Stack Coding Course at LifeChoices Coding Academy</h3>
          <p class="timeline-date">April 2024 - September 2024</p>
          <p>
            Graduated from an intensive full-stack development bootcamp focused on modern web technologies as well as personal and professional development.
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
            Completed Matric with a Bachelor’s Pass, specializing in technology and engineering subjects.
          </p>
        </div>
      </div>
    </div>

    <h2 class="section-heading">Experience</h2>
    <div class="timeline">
      <div class="timeline-item left-animated">
        <div class="timeline-content move-left">
          <h3>Intern at LC Studio</h3>
          <p class="timeline-date">September 2024 - Present</p>
          <p>
            Engaging in web development projects, focusing on leveraging technology to empower youth talent in South Africa.
          </p>
        </div>
        <img src="https://danielumetor.github.io/allimages/download%20(1).png" alt="Intern at LC Studio" class="timeline-image" />
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
          <p class="certificate-date">Issued: October 2024</p>
        </div>
      </div>

      <!-- Certificate 2 -->
      <div class="certificate-card">
        <img src="https://danielumetor.github.io/allimages/certifications/sample-cert.png" alt="JavaScript Advanced" class="certificate-image" />
        <div class="certificate-content">
          <h3>AWS</h3>
          <p class="certificate-date">Issued: September 2024</p>
        </div>
      </div>

      <!-- Certificate 3 -->
      <div class="certificate-card">
        <img src="https://danielumetor.github.io/allimages/certifications/sample-cert.png" alt="Python for Data Science" class="certificate-image" />
        <div class="certificate-content">
          <h3>Python for Data Science</h3>
          <p class="certificate-date">Issued: August 2024</p>
        </div>
      </div>

      <!-- Certificate 4 -->
      <div class="certificate-card">
        <img src="https://danielumetor.github.io/allimages/certifications/sample-cert.png" alt="React Development" class="certificate-image" />
        <div class="certificate-content">
          <h3>React Development</h3>
          <p class="certificate-date">Issued: July 2024</p>
        </div>
      </div>

      <!-- Certificate 5 -->
      <div class="certificate-card">
        <img src="https://danielumetor.github.io/allimages/certifications/sample-cert.png" alt="Node.js & Express" class="certificate-image" />
        <div class="certificate-content">
          <h3>Node.js & Express</h3>
          <p class="certificate-date">Issued: June 2024</p>
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
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
}

.certificate-content {
  text-align: center;
}

.certificate-date {
  color: #00ADB5;
  font-weight: 600;
  margin-top: 10px;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: auto;
  padding: 10px 0;
}

.timeline-item {
  display: flex;
  align-items: center;
  margin: 20px 0;
}

.left-animated {
  justify-content: flex-start;
}

.right-animated {
  justify-content: flex-end;
}

.move-left {
  transform: translateX(-5rem);
}

.move-right {
  transform: translateX(5rem);
}

.timeline-content {
  width: 45%;
  background-color: #030509;
  padding: 20px;
  border-radius: 8px;
}

.timeline-image {
  width: 17rem;
  height: 17rem;
  margin-left: 60px;
}

.in-view {
  animation: fadeIn 0.8s ease forwards;
}

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
}

@media (max-width: 768px) {
  .timeline-item { flex-direction: column; }
  .timeline-image { margin-left: 0; }
}
</style>
