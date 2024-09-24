<template>
  <div class="contact-container">
    <h1 class="contact-heading">Contact Me</h1>

    <div class="contact-content">
      <!-- Contact Info Section -->
      <div class="contact-info">
        <div class="contact-item">
          <i class="fas fa-envelope"></i>
          <div class="contact-details">
            <h3>Email</h3>
            <p>dnumetor@gmail.com</p>
          </div>
        </div>
        <div class="contact-item">
          <i class="fas fa-phone-alt"></i>
          <div class="contact-details">
            <h3>Phone</h3>
            <p>073 878 0358</p>
          </div>
        </div>
        <div class="contact-item">
          <i class="fas fa-map-marker-alt"></i>
          <div class="contact-details">
            <h3>Location</h3>
            <p>24 Postma Street, Oakdale, Bellville</p>
          </div>
        </div>
        <div class="contact-item">
          <i class="fas fa-linkedin"></i>
          <div class="contact-details">
            <h3>LinkedIn</h3>
            <p><a href="https://www.linkedin.com/in/daniel-umetor-3aa7231aa/" target="_blank">Visit my profile</a></p>
          </div>
        </div>
        <div class="contact-item">
          <i class="fab fa-github"></i>
          <div class="contact-details">
            <h3>GitHub</h3>
            <p><a href="https://github.com/DanielUmetor" target="_blank">View my repositories</a></p>
          </div>
        </div>
      </div>

      <!-- Contact Form Section -->
      <div class="contact-form-container">
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
            <textarea v-model="message" placeholder="Your Message" rows="4" required></textarea>
          </div>
          <button type="submit" class="submit-btn">Send Message</button>
        </form>
      </div>
    </div>
  </div>
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
.contact-container {
  padding: 20px;
  background-color: #0D0D0D;
  color: #EEEEEE;
  font-family: 'Roboto', sans-serif;
  margin-top: 0; /* Reset top margin */
}

.contact-heading {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #3E7CB1;
  border-bottom: 2px solid #3E7CB1;
  display: inline-block;
  padding-bottom: 5px;
  margin-top: 20px; /* Move the header right below the navbar */
}

.contact-content {
  display: flex;
  justify-content: center; /* Center the form */
  align-items: flex-start;
  gap: 60px;
  margin-top: 20px;
}

.contact-info {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  text-align: left;
}

.contact-item {
  background-color: #2E2E2E;
  border: 2px solid #3E7CB1;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.contact-details h3 {
  margin: 0;
  font-size: 0.9rem;
  color: #3E7CB1;
}

.contact-details p, .contact-details a {
  margin: 0;
  font-size: 0.8rem;
  color: #EEEEEE;
}

.contact-item i {
  font-size: 1.2rem;
  color: #3E7CB1;
  margin-right: 10px;
}

.contact-form-container {
  flex: 1;
  background-color: #2E2E2E;
  padding: 30px;
  border: 2px solid #3E7CB1;
  border-radius: 10px;
  max-width: 400px; /* Restrict the width for better centering */
}

.contact-form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.form-group i {
  font-size: 1.2rem;
  color: #3E7CB1;
  margin-right: 8px;
}

input, textarea {
  width: 100%;
  padding: 10px;
  background-color: #1C1C1C;
  border: 2px solid #3E7CB1;
  color: #EEEEEE;
  border-radius: 5px;
  outline: none;
}

input::placeholder, textarea::placeholder {
  color: #AAAAAA;
}

.submit-btn {
  padding: 10px 20px;
  background-color: #3E7CB1;
  color: #EEEEEE;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #2D5D8D;
}

textarea {
  resize: none;
  flex-grow: 1;
}
</style>
