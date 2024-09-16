<template>
    <nav class="navbar">
      <div class="logo">
        <img src="https://danielumetor.github.io/allimages/images/mylogo.png" alt="Logo">
      </div>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About Me</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="/education">Education & Experience</router-link></li>
        <li><router-link to="/contact">Contact Info</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBarView'
  };
  </script>
  
  <style scoped>
  /* Font Styling */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
  
  .navbar {
    background: linear-gradient(135deg, #0D0D0D, #1A1A1A); /* Subtle gradient */
    padding: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    position: sticky;
    top: 0;
    z-index: 1000;
    font-family: 'Poppins', sans-serif;
    display: flex;
    align-items: center;
  }
  
  .logo img {
    width: 50px;
    margin-right: 20px;
  }
  
  .nav-links {
    list-style: none;
    display: flex;
    justify-content: center; /* Centers the links horizontally */
    padding: 0;
    margin: 0;
    flex-grow: 1;
  }
  
  .nav-links li {
    margin: 0 20px; /* Spacing between links */
  }
  
  .nav-links a {
    color: #EEEEEE; /* Light Gray */
    text-decoration: none;
    font-size: 1.2em; /* Adjust font size */
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
    background-color: #00ADB5; /* Aqua Blue */
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }
  
  .nav-links a:hover::before {
    visibility: visible;
    transform: scaleX(1);
  }
  
  .nav-links a:hover {
    color: #00ADB5;
  }
  </style>
  