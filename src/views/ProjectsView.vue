<template>
  <div class="projects-container">
    <div class="heading">
      <h1 class="animate-slide-in">My Projects</h1>
    </div>
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
              <div class="button-group">
                <a :href="card.link" target="_blank" class="btn">View Project</a>
                <a :href="card.github" target="_blank" class="btn github-btn">
                  <i class="fab fa-github"></i> GitHub
                </a>
              </div>
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
          copy: "A Full Stack Gaming E-Commerce Store Selling The Best Games Available.",
          button: "View More",
          link: "https://capstone-dfd59.web.app/",
          github: "https://github.com/DanielUmetor/Capstone.git", 
          image: "https://danielumetor.github.io/allimages/game%20store%20icon.png",
        },
        {
          title: "To-Do List",
          copy: "My very first functional project that I will always remember.",
          link: "https://to-do-list-17dnvyqll-daniels-projects-c927e4ab.vercel.app/",
          github: "https://github.com/DanielUmetor/To-Do-List.git",
          image: "https://danielumetor.github.io/allimages/todolisticon.png",
        },
        {
          title: "Calculator",
          copy: "A modern looking calculator.",
          link: "https://calculator-js-navy-two.vercel.app/",
          github: "https://github.com/DanielUmetor/calculator-js.git",
          image: "https://danielumetor.github.io/allimages/calclatoricon.png",
        },
        {
          title: "Keyboard",
          copy: "A keyboard built using HTML and CSS.",
          link: "https://keyboard-js.vercel.app/",
          github: "https://github.com/DanielUmetor/keyboard-js.git",
          image: "https://danielumetor.github.io/allimages/keyboard.jpeg",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');

:root {
  --primary-color: #333333;
  --accent-color: #3E7CB1;
  --background-color: #1E1E1E;
  --card-background: #2E2E2E;
  --text-color: #EEEEEE;
  --card-border: #3E7CB1;
  --shadow-color: rgba(62, 124, 177, 0.5);
}

.heading{
  color: #02D8E9;

}

.projects-container {
  padding: 40px;
  background-color: var(--background-color); 
  color: var(--text-color);
  font-family: 'Roboto', sans-serif;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto; /* Center the content */
}

.projects-container h1 {
  font-size: 2.5rem;
  margin-bottom: 50px; /* More spacing for the title */
  color: var(--accent-color);
  border-bottom: 2px solid var(--accent-color);
  display: inline-block;
  padding-bottom: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Improved grid */
  gap: 30px; /* More space between cards */
}

.project-card {
  background-color: var(--card-background);
  border: 2px solid var(--card-border);
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 16px var(--shadow-color);
}

.card {
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 300px; /* Slightly reduced height */
  text-align: center;
  background-size: cover;
  background-position: center;
}

.card .content {
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: white;
  background: rgba(0, 0, 0, 0.6);
}

.card .title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.card .copy {
  font-size: 1.1rem;
  font-style: italic;
  margin-bottom: 1rem;
}

.button-group {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.card .btn {
  padding: 0.75rem 1.5rem;
  font-size: 1rem; /* Slightly larger font */
  font-weight: bold;
  text-transform: uppercase;
  background: linear-gradient(45deg, var(--accent-color), #5ea6db);
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.card .btn:hover {
  background: #00ffff; /* Aqua blue color */
  color: #000; /* Black text for visibility */
  transform: translateY(-4px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
}

.github-btn:hover {
  background: #00ffff; /* Aqua blue color */
  color: #000; /* Black text for visibility */
  transform: translateY(-4px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
}


.github-btn:hover {
  background-color: #161b22;
}

.github-btn i {
  margin-right: 8px;
}
</style>
