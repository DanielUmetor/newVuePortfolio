<template>
  <transition name="fade" mode="out-in">
    <div class="contact-page" key="contact-page">
      <h1 class="contact-title">Get In Touch</h1>

      <div class="contact-wrapper">
        <!-- Contact Form Section -->
        <div class="contact-form-wrapper">
          <form class="contact-form" @submit.prevent="sendEmail">
            <div class="form-group">
        
              <input type="text" v-model="name" placeholder="Your Name" required />
            </div>
            <div class="form-group">
        
              <input type="email" v-model="email" placeholder="Your Email" required />
            </div>
            <div class="form-group">
           
              <textarea v-model="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" class="submit-btn">Send Message</button>
          </form>
        </div>

        <!-- Contact Info Section -->
        <div class="contact-info">
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <div class="info-text">
              <h3>Email</h3>
              <p>dnumetor@gmail.com</p>
            </div>
          </div>
          <div class="contact-item">
            <i class="fas fa-phone-alt"></i>
            <div class="info-text">
              <h3>Phone</h3>
              <p>073 878 0358</p>
            </div>
          </div>
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <div class="info-text">
              <h3>Location</h3>
              <p>24 Postma Street, Oakdale, Bellville</p>
            </div>
          </div>
          <div class="contact-item">
            <i class="fab fa-linkedin"></i>
            <div class="info-text">
              <h3>LinkedIn</h3>
              <p><a href="https://www.linkedin.com/in/daniel-umetor-3aa7231aa/" target="_blank">Visit my profile</a></p>
            </div>
          </div>
          <div class="contact-item">
            <i class="fab fa-github"></i>
            <div class="info-text">
              <h3>GitHub</h3>
              <p><a href="https://github.com/DanielUmetor" target="_blank">View my repositories</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>


<script>
export default {
  name: "ContactView",
  data() {
    return {
      name: "",
      email: "",
      message: ""
    };
  },
  methods: {
    sendEmail() {
      // Your email sending logic goes here
      alert('Message sent successfully!');
    }
  }
};
</script>

<style scoped>
.contact-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; 
  min-height: 100vh;
  background-color: #000; /* Black background */
  color: #fff; /* White text */
  font-family: 'Poppins', sans-serif;
  padding: 10px 20px; /* Adjust padding */
}

.contact-title {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #02D8E9;
}

.contact-wrapper {
  display: flex;
  justify-content: space-between; /* Space between form and contact info */
  align-items: flex-start;
  width: 100%;
  max-width: 1200px; /* Adjust max width if needed */
  gap: 40px; /* Space between the two sections */
}

/* Contact Form */
.contact-form-wrapper {
  flex: 1; /* Allow form to take up space */
  padding-right: 20px; /* Add padding to the right for spacing */
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Form Group */
.form-group {
  border-bottom: 2px solid white; /* White lines for form inputs */
  padding-bottom: 10px;
  margin-bottom: 20px;
}

/* Inputs */
input,
textarea {
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  width: 100%; /* Full width */
  font-size: 1rem;
}

input::placeholder,
textarea::placeholder {
  color: #fff;
}

textarea {
  resize: none;
  height: 120px;
}

/* Submit Button */
.submit-btn {
  padding: 15px 20px;
  background-color: #fff; /* White button */
  color: #000; /* Black text */
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #333; /* Darken on hover */
  color: #fff;
}

/* Contact Info */
.contact-info {
  flex: 1; /* Allow contact info to take up space */
  display: flex;
  flex-direction: column;
  gap: 15px; /* Space between contact items */
}

/* Individual Contact Item */
.contact-item {
  display: flex;
  align-items: center;
  background-color: #1C1C1C; /* Dark background for items */
  padding: 10px; 
  border-radius: 10px;
  border: 2px solid white; /* White border */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(255, 255, 255, 0.2);
}

.contact-item i {
  font-size: 1.5rem;
  margin-right: 10px; /* Reduced margin */
  color: #fff; /* White icon color */
}

.info-text h3 {
  margin: 0;
  font-size: 1rem;
  color: #fff; /* White text for headings */
}

.info-text p,
.info-text a {
  margin: 0;
  color: #fff; /* White text for paragraphs */
  text-decoration: none;
}

.info-text a:hover {
  text-decoration: underline; /* Underline on hover */
}
</style>
