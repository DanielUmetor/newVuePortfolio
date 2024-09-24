<template>
  <div class="projects-container">
    <h1 class="animate-slide-in">My Projects</h1>
    <div class="projects-grid">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="project-card animate-fade-in"
      >
        <div class="card-content">
          <div class="card" :style="{ backgroundImage: `url(${card.image})` }">
            <div class="content">
              <h2 class="title">{{ card.title }}</h2>
              <p class="copy">{{ card.copy }}</p>
              <!-- Updated button with styling class and target="_blank" -->
              <a :href="card.link" target="_blank" class="btn">{{ card.button }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsView",
  data() {
    return {
      cards: [
        {
          title: "GameVaults",
          copy: "A Gaming E-Commerce Store Selling The Best Games Available.",
          button: "View More",
          link: "https://capstone-dfd59.web.app/",
          image: "https://danielumetor.github.io/allimages/game%20store%20icon.png",
        },
        {
          title: "To-Do List",
          copy: "My very first functional project that I will always remember.",
          button: "View More",
          link: "https://to-do-list-17dnvyqll-daniels-projects-c927e4ab.vercel.app/",
          image: "https://danielumetor.github.io/allimages/todolisticon.png",
        },
        {
          title: "Calculator",
          copy: "A modern looking calculator.",
          button: "View More",
          link: "https://calculator-js-navy-two.vercel.app/",
          image: "https://danielumetor.github.io/allimages/calclatoricon.png",
        },
        {
          title: "Keyboard",
          copy: "A keyboard built using HTML, CSS and Javascript.",
          button: "View More",
          link: "https://keyboard-js.vercel.app/",
          image: "https://danielumetor.github.io/allimages/keyboard.jpeg",
        },
      ],
    };
  },
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
  animation: cardAppear 0.6s ease-out;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.card {
  position: relative;
  display: flex;
  align-items: flex-end;
  background-color: whitesmoke;
  width: 100%;
  height: 350px;
  text-align: center;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card .content {
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  color: white;
  background: rgba(0, 0, 0, 0.5);
}

.card .title {
  font-size: 1.5rem;
  font-weight: bold;
}

.card .copy {
  font-size: 1.1rem;
  font-style: italic;
}

/* Styling for the 'View More' button */
.card .btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
  background-color: var(--accent-color);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.card .btn:hover {
  background-color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.card .btn:active {
  transform: translateY(0);
  box-shadow: none;
}

/* Animation */
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

.animate-fade-in {
  animation: fadeIn 0.8s ease forwards;
  opacity: 0;
}
</style>
