<template>
  <nav class="navbar" :class="{ hidden: isHidden }">
    <div class="logo">
      <img src="https://danielumetor.github.io/allimages/images/mylogo.png" alt="Logo">
    </div>

    <!-- Burger Menu Icon -->
    <div class="burger" @click="toggleMenu">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>

    <!-- Navigation Links -->
    <ul class="nav-links" :class="{ active: isMenuOpen }">
      <li><router-link to="/" exact-active-class="active" active-class="active-link">Home</router-link></li>
      <li><router-link to="/about" exact-active-class="active" active-class="active-link">About Me</router-link></li>
      <li><router-link to="/education" exact-active-class="active" active-class="active-link">Education & Experience</router-link></li>
      <li><router-link to="/projects" exact-active-class="active" active-class="active-link">Projects</router-link></li>
      <li><router-link to="/contact" exact-active-class="active" active-class="active-link">Contact Info</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBarView',
  data() {
    return {
      isHidden: false,
      lastScrollY: 0,
      isMenuOpen: false, // State for burger menu
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScrollY = window.scrollY;
      this.isHidden = currentScrollY > this.lastScrollY; // Hide when scrolling down
      this.lastScrollY = currentScrollY;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Toggle menu visibility
    },
  },
};
</script>

<style scoped>
/* Original Styling */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

.navbar {
  background: linear-gradient(135deg, #0D0D0D, #1A1A1A);
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0;
  z-index: 1000;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease-in-out;
}

.navbar.hidden {
  transform: translateY(-100%);
}

.logo img {
  width: 50px;
  margin-right: 20px;
}

.nav-links {
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  flex-grow: 1;
}

.nav-links li {
  margin: 0 20px;
}

.nav-links a {
  color: #EEEEEE;
  text-decoration: none;
  font-size: 1.2em;
  font-weight: 600;
  position: relative;
  transition: color 0.3s ease;
}

.nav-links a::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -5px;
  left: 0;
  background-color: #00ADB5;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out;
}

.nav-links a:hover::before,
.nav-links a.active-link::before {
  visibility: visible;
  transform: scaleX(1);
}

.nav-links a:hover,
.nav-links a.active-link {
  color: #00ADB5;
}

/* Responsive Styling */
.burger {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  cursor: pointer;
}

.burger .line {
  width: 100%;
  height: 3px;
  background-color: #EEEEEE;
  border-radius: 2px;
}

.nav-links.active {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  right: 0;
  background: #1A1A1A;
  width: 100%;
  padding: 10px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  z-index: 999;
}

.nav-links.active li {
  margin: 10px 0;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .nav-links {
    display: none; /* Hide links by default in mobile view */
  }

  .burger {
    display: flex; /* Show burger icon in mobile view */
  }
}
</style>
