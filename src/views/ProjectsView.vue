<template>
  <div class="projects-container">
    <h1 class="animate-slide-in">My Projects</h1>
    <div class="projects-grid">
      <div class="project-card animate-fade-in">
        <div class="card-content">
          <img src="https://danielumetor.github.io/allimages/game%20store%20icon.png" alt="Full Stack Gaming Store" class="project-image" />
          <div class="card-overlay">
            <h2>Full Stack Gaming Store</h2>
            <p>This is a Full Stack project that demonstrates how to create an online gaming store with technologies like Vue.js and Node.js.</p>
            <a href="#" class="project-link">View Project</a>
          </div>
        </div>
      </div>

      <div class="project-card animate-fade-in">
        <div class="card-content">
          <img src="../../public/img/Screenshot%202024-09-18%20160136.png" alt="Project 2" class="project-image" />
          <div class="card-overlay">
            <h2>Project 2</h2>
            <p>This project involves building a responsive web app using modern front-end technologies and best practices in UI/UX.</p>
            <a href="#" class="project-link">View Project</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectsView'
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

/* Colors */
:root {
  --primary-color: #333333;
  --accent-color: #3E7CB1;
  --background-color: #1E1E1E;
  --card-background: #2E2E2E;
  --text-color: #EEEEEE;
  --card-border: #3E7CB1;
}

.projects-container {
  padding: 40px;
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: 'Roboto', sans-serif;
}

.projects-container h1 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: var(--primary-color);
  text-align: center;
  border-bottom: 2px solid var(--accent-color);
  display: inline-block;
  padding-bottom: 10px;
}

/* Grid layout */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

/* Project card */
.project-card {
  background-color: var(--card-background);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: cardAppear 0.6s ease-out; /* Add animation */
}

/* Hover effect */
.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

/* Card content */
.card-content {
  position: relative;
}

.project-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  transition: opacity 0.3s ease;
}

/* Overlay effect */
.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .card-overlay {
  opacity: 1;
}

.card-overlay h2 {
  color: var(--accent-color);
  font-size: 1.6rem;
  margin-bottom: 10px;
}

.card-overlay p {
  color: var(--text-color);
  text-align: center;
  padding: 0 15px;
}

.project-link {
  margin-top: 15px;
  padding: 8px 16px;
  background-color: var(--accent-color);
  color: #FFFFFF;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.project-link:hover {
  background-color: var(--primary-color);
}

/* Keyframe animations */
@keyframes cardAppear {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes popIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
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
