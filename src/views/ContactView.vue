<template>
  <transition name="fade" mode="out-in">
    <div class="contact-page" key="contact-page">
      <h1 class="contact-title">Get In Touch</h1>

      <div class="contact-wrapper">
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
            <i class="fas fa-linkedin"></i>
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

        <!-- Contact Form Section -->
        <div class="contact-form-wrapper">
          <form class="contact-form" @submit.prevent="sendEmail">
            <div class="form-group">
              <i class="fas fa-user"></i>
              <input type="text" v-model="name" placeholder="Your Name" required />
            </div>
            <div class="form-group">
              <i class="fas fa-envelope"></i>
              <input type="email" v-model="email" placeholder="Your Email" required />
            </div>
            <div class="form-group">
              <i class="fas fa-comment-alt"></i>
              <textarea v-model="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" class="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'ContactView',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    sendEmail() {
      const templateParams = {
        name: this.name,
        email: this.email,
        message: this.message
      };

      emailjs.send('service_7357hhg', 'template_p0t9xep', templateParams, 'PSidWaskJKJOGbTns')
        .then((response) => {
          console.log('Email sent successfully:', response.status, response.text);
          alert('Message sent successfully!');
        }, (error) => {
          console.error('Failed to send message:', error);
          alert('Failed to send message. Please try again later.');
        });
    }
  }
};
</script>

<style scoped>
/* Page layout */
.contact-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Change to flex-start */
  min-height: 100vh;
  background-color: #121212;
  color: #FFFFFF;
  font-family: 'Poppins', sans-serif;
  padding: 20px; /* Reduced padding */
  box-sizing: border-box;
}

/* Fade Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease; /* Added transform */
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateY(20px); /* Move content up slightly when entering */
}

/* Title Styling */
.contact-title {
  font-size: 2.5rem; /* Reduced font size */
  margin-top: 0; /* Removed margin-top */
  margin-bottom: 20px; /* Reduced bottom margin */
}

/* Contact Info & Form Section */
.contact-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
  gap: 40px; /* Reduced gap */
  padding: 20px; /* Adjusted padding */
}

/* Contact Info */
.contact-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px; /* Reduced gap */
}

/* Individual Contact Item */
.contact-item {
  display: flex;
  align-items: center;
  background-color: #1C1C1C;
  padding: 10px; /* Reduced padding */
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid #00ADB5;
}

.contact-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px #00ADB5;
}

.contact-item i {
  font-size: 1.5rem;
  margin-right: 10px; /* Reduced margin */
  color: #00ADB5;
}

.info-text h3 {
  margin: 0;
  font-size: 1rem;
  color: #00ADB5;
}

.info-text p,
.info-text a {
  margin: 0;
  color: #FFFFFF;
  text-decoration: none;
}

.info-text a:hover {
  text-decoration: underline;
}

/* Contact Form */
.contact-form-wrapper {
  flex: 1;
  background-color: #1C1C1C;
  padding: 20px; /* Reduced padding */
  border-radius: 10px;
  border: 2px solid #00ADB5;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px; /* Reduced gap */
}

.form-group {
  display: flex;
  align-items: center;
  background-color: #262626;
  padding: 8px; /* Reduced padding */
  border-radius: 5px;
}

.form-group i {
  color: #00ADB5;
  margin-right: 8px; /* Reduced margin */
  font-size: 1.2rem;
}

input,
textarea {
  flex: 1;
  background-color: transparent;
  border: none;
  color: #FFFFFF;
  font-size: 1rem;
  padding: 8px; /* Reduced padding */
  outline: none;
}

input::placeholder,
textarea::placeholder {
  color: #BBBBBB;
}

textarea {
  resize: none;
  height: 100px; /* Adjusted height */
}

/* Submit Button */
.submit-btn {
  padding: 10px; /* Reduced padding */
  background-color: #00ADB5;
  color: #121212;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #00ADB5;
}
</style>
