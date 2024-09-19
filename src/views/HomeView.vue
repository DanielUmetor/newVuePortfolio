<template>
  <div class="home">
    <div class="content">
      <div class="text-section">
        <h1 class="welcome-text">Welcome, I'm Daniel Umetor</h1>
        <h2 class="sub-text">An Aspiring Software Developer</h2>
        <div class="intro-text">
        </div>
      </div>
      <div class="image-section">
        <img class="profile-image" src="https://danielumetor.github.io/allimages/20240422_092918.jpg" alt="Daniel Umetor" loading="lazy">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
};
</script>

<style scoped>
/* Font Styling */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

.home {
  background: linear-gradient(135deg, #0D0D0D, #1A1A1A);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #EEEEEE;
  font-family: 'Poppins', sans-serif;
  padding: 0 20px;
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
}

.text-section {
  max-width: 600px;
}

.welcome-text {
  font-size: 3em;
  color: #EEEEEE;
  margin: 0;
  animation: fadeIn 2s ease-in-out;
}

.sub-text {
  font-size: 1.8em;
  color: #00ADB5;
  margin: 10px 0;
  animation: fadeIn 3s ease-in-out;
}

.intro-text p {
  font-size: 1.2em;
  color: #EEEEEE;
  margin-top: 20px;
  animation: fadeIn 5s ease-in-out;
}

/* Right-aligned profile image with larger circle */
.image-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -30px; /* Moves the image slightly to the left */
}

.profile-image {
  border-radius: 50%;
  width: 450px; /* Increased size for the circle */
  height: 450px; /* Increased size */
  object-fit: cover;
  object-position: top; /* Ensures the head is fully shown */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  animation: fadeIn 4s ease-in-out;
}

/* Animation for fade-in effect */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
