<template>
  <div class="education-experience-container">
    <!-- Education Section -->
    <div class="education-section">
      <h2 class="section-heading">Education</h2>
      
      <!-- LifeChoices Academy -->
      <div class="education-item left-animated">
        <img src="https://danielumetor.github.io/allimages/images/download.png" alt="LifeChoices Academy" class="education-image">
        <div class="education-text">
          <h3>Full Stack Coding Course at LifeChoices Coding Academy</h3>
          <p>April 2024 - September 2024</p>
          <p>
            Graduated from an intensive full-stack development bootcamp focused on modern web technologies as well as personal and professional development. 
            Learned how to work in a fast-paced environment, collaborate with teams, and tackle real-world coding challenges.
          </p>
        </div>
      </div>

      <!-- Bellville Technical High School -->
      <div class="education-item right-animated">
        <div class="education-text">
          <h3>Bellville Technical High School</h3>
          <p>2018 - 2023</p>
          <p>
            Completed Matric with a Bachelor’s Pass, specializing in technology and engineering subjects. 
            Excelled in key subjects such as Engineering Graphics and Design (EGD), Mathematics, and Physical Sciences, fostering a strong analytical mindset.
          </p>
        </div>
        <img src="https://danielumetor.github.io/allimages/images/bths.jfif" alt="Bellville Technical High School" class="education-image">
      </div>
    </div>

    <!-- Experience Section -->
    <div class="experience-section">
      <h2 class="section-heading">Experience</h2>
      
      <!-- LC Studio -->
      <div class="experience-item left-animated">
        <img src="https://danielumetor.github.io/allimages/download%20(1).png" alt="LC Studio" class="experience-image">
        <div class="experience-text">
          <h3>Intern at LC Studio</h3>
          <p>September 2024 - Present</p>
          <p>
            At LC Studio, I gained hands-on experience in WordPress website development, collaborating with experienced developers on various projects. 
            This opportunity helped refine my understanding of front-end and back-end development and strengthened my skills in problem-solving, debugging, and working within a team-oriented environment.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EducationExperienceView',
  mounted() {
    // Scroll animations for items as they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, {
      threshold: 0.2
    });

    // Targeting all education and experience items
    const items = document.querySelectorAll('.education-item, .experience-item');
    items.forEach(item => observer.observe(item));
  }
};

</script>

