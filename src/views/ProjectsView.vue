<template>
  <div class="projects-container">
    <div class="heading">
      <h1 class="animate-slide-in">My Projects</h1>
    </div>
    
    <!-- Tab Navigation -->
    <div class="tab-navigation">
      <button 
        class="tab-button" 
        :class="{ active: activeTab === 'client' }"
        @click="activeTab = 'client'"
      >
        Client Projects
      </button>
      <span class="tab-divider">|</span>
      <button 
        class="tab-button" 
        :class="{ active: activeTab === 'personal' }"
        @click="activeTab = 'personal'"
      >
        Personal Projects
      </button>
    </div>

    <!-- Client Projects Grid -->
    <div v-if="activeTab === 'client'" class="projects-grid">
      <div
        v-for="(project, index) in clientProjects"
        :key="`client-${index}`"
        class="project-card animate-fade-in"
      >
        <div class="card-content">
          <div class="card" :style="{ backgroundImage: `url(${project.image})` }">
            <div class="content">
              <h2 class="title">{{ project.title }}</h2>
              <p class="copy">{{ project.copy }}</p>
              <div class="button-group">
                <button 
                  v-if="project.status === 'development'" 
                  class="btn status-btn"
                  disabled
                >
                  In Development
                </button>
                <button 
                  v-else-if="project.screenshots" 
                  @click="viewScreenshots(project)"
                  class="btn"
                >
                  View Screenshots
                </button>
                <a 
                  v-else 
                  :href="project.link" 
                  target="_blank" 
                  class="btn"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Personal Projects Grid -->
    <div v-if="activeTab === 'personal'" class="projects-grid">
      <div
        v-for="(card, index) in personalProjects"
        :key="`personal-${index}`"
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

    <!-- Screenshot Modal with Carousel -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="closeModal">&times;</button>
        <h2 class="modal-title">{{ selectedProject.title }}</h2>
        
        <div class="carousel-container">
          <!-- Left Arrow -->
          <button 
            class="carousel-arrow left-arrow" 
            @click="previousImage"
            :disabled="currentImageIndex === 0"
          >
            <i class="fas fa-chevron-left"></i>
          </button>

          <!-- Image Display -->
          <div class="carousel-image-wrapper">
            <img 
              :src="selectedProject.screenshotImages[currentImageIndex]"
              :alt="`${selectedProject.title} Screenshot ${currentImageIndex + 1}`"
              class="carousel-image"
            />
            
            <!-- Image Counter -->
            <div class="image-counter">
              {{ currentImageIndex + 1 }} / {{ selectedProject.screenshotImages.length }}
            </div>
          </div>

          <!-- Right Arrow -->
          <button 
            class="carousel-arrow right-arrow" 
            @click="nextImage"
            :disabled="currentImageIndex === selectedProject.screenshotImages.length - 1"
          >
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>

        <!-- Thumbnail Navigation -->
        <div class="thumbnail-navigation">
          <div 
            v-for="(screenshot, index) in selectedProject.screenshotImages" 
            :key="index"
            class="thumbnail"
            :class="{ active: currentImageIndex === index }"
            @click="currentImageIndex = index"
            :style="{ backgroundImage: `url(${screenshot})` }"
          ></div>
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
      activeTab: 'client', // Start with client projects
      showModal: false,
      selectedProject: null,
      currentImageIndex: 0,
      clientProjects: [
        {
          title: "RFID Staff Attendance Tracking System",
          copy: "Developed an RFID-based system to monitor employee and staff presence on-site. Each staff member was issued an RFID tag, which was scanned at entry and exit points using RFID readers. The system logged real-time check-ins and check-outs to a centralized database.",
          status: "completed",
          screenshots: true,
          image: "https://via.placeholder.com/400x300/3E7CB1/ffffff?text=RFID+System",
          screenshotImages: [
            "https://danielumetor.github.io/allimages/login.jpg",
            "https://danielumetor.github.io/allimages/date%20range.jpg",
            "https://danielumetor.github.io/allimages/departments.jpg",
            'https://danielumetor.github.io/allimages/page.jpg'
            
          ]
        },
       
        {
          title: "Python Scraper",
          copy: "",
          status: "development",
          image: "https://via.placeholder.com/400x300/666666/ffffff?text=In+Development"
        },
       
       
      ],
      personalProjects: [
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
          title: "Quiz Game",
          copy: "A basic General Knowledge Quiz to test your knowledge.",
          link: "https://game-demo-rnz2i58cw-daniels-projects-c927e4ab.vercel.app/",
          github: "https://github.com/DanielUmetor/Game_Demo.git",
          image: "https://danielumetor.github.io/allimages/download%20quiz.png",
        },
        {
          title: "Wristify",
          copy: "A E-Commerce Watch Website built using Javascript.",
          link: "https://wristify.vercel.app/",
          github: "https://github.com/DanielUmetor/js-ecommerce.git",
          image: "https://danielumetor.github.io/allimages/second%20logo%20for%20wristify.webp"
        },
        {
          title: "Temperature Converter",
          copy: "A temperature converter used to convert temperature units.",
          link: "https://temperature-converter-bay.vercel.app/",
          github: "https://github.com/DanielUmetor/temperatureConverter.git",
          image: "https://danielumetor.github.io/allimages/tc%20converter.png"    
        }
      ],
    };
  },
  methods: {
    viewScreenshots(project) {
      this.selectedProject = project;
      this.showModal = true;
      this.currentImageIndex = 0; // Reset to first image
    },
    closeModal() {
      this.showModal = false;
      this.selectedProject = null;
      this.currentImageIndex = 0;
    },
    nextImage() {
      if (this.currentImageIndex < this.selectedProject.screenshotImages.length - 1) {
        this.currentImageIndex++;
      }
    },
    previousImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--;
      }
    }
  }
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
  margin: 0 auto;
}

.projects-container h1 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: var(--accent-color);
  border-bottom: 2px solid var(--accent-color);
  display: inline-block;
  padding-bottom: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

/* Tab Navigation Styles */
.tab-navigation {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  gap: 15px;
}

.tab-button {
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  padding: 10px 20px;
  transition: all 0.3s ease;
  position: relative;
  font-family: 'Roboto', sans-serif;
}

.tab-button:hover {
  color: var(--accent-color);
}

.tab-button.active {
  color: #02D8E9;
}

.tab-button.active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 2px;
  background-color: #02D8E9;
}

.tab-divider {
  color: var(--text-color);
  opacity: 0.5;
  font-size: 1.2rem;
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
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
  height: 300px;
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
  font-size: 1rem;
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
  background: #00ffff;
  color: #000;
  transform: translateY(-4px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
}

.github-btn:hover {
  background: #00ffff;
  color: #000;
  transform: translateY(-4px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
}

.github-btn i {
  margin-right: 8px;
}

/* Status button for in-development projects */
.status-btn {
  background: linear-gradient(45deg, #666, #888) !important;
  cursor: not-allowed !important;
  opacity: 0.7;
}

.status-btn:hover {
  background: linear-gradient(45deg, #666, #888) !important;
  color: white !important;
  transform: none !important;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
}

.modal-content {
  background: var(--card-background);
  border: 2px solid var(--card-border);
  border-radius: 12px;
  padding: 30px;
  max-width: 90%;
  max-height: 90vh;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 30px;
  color: var(--text-color);
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.3s;
  z-index: 10;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #00ffff;
}

.modal-title {
  color: #02D8E9;
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
}

/* Carousel Styles */
.carousel-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  position: relative;
}

.carousel-image-wrapper {
  position: relative;
  max-width: 800px;
  width: 100%;
}

.carousel-image {
  width: 100%;
  height: auto;
  max-height: 60vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.carousel-arrow {
  background: rgba(62, 124, 177, 0.8);
  border: none;
  color: white;
  font-size: 24px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
}

.left-arrow {
  left: -25px;
}

.right-arrow {
  right: -25px;
}

.carousel-arrow:hover:not(:disabled) {
  background: #00ffff;
  color: #000;
  transform: translateY(-50%) scale(1.1);
}

.carousel-arrow:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.image-counter {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 14px;
}

/* Thumbnail Navigation */
.thumbnail-navigation {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.thumbnail {
  width: 60px;
  height: 40px;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  cursor: pointer;
  opacity: 0.6;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.thumbnail:hover {
  opacity: 0.9;
}

.thumbnail.active {
  opacity: 1;
  border-color: #00ffff;
  transform: scale(1.1);
}

/* Animation classes */
.animate-slide-in {
  animation: slideIn 0.5s ease-out;
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .projects-container {
    padding: 20px;
  }

  .projects-container h1 {
    font-size: 2rem;
  }

  .tab-button {
    font-size: 1rem;
    padding: 8px 15px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .card .title {
    font-size: 1.5rem;
  }

  .card .copy {
    font-size: 1rem;
  }

  .modal-content {
    padding: 20px;
    max-width: 95%;
  }

  .modal-title {
    font-size: 1.5rem;
  }

  .carousel-arrow {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }

  .left-arrow {
    left: 10px;
    position: relative;
  }

  .right-arrow {
    right: 10px;
    position: relative;
  }

  .carousel-container {
    flex-direction: row;
  }

  .thumbnail {
    width: 50px;
    height: 35px;
  }
}
</style>