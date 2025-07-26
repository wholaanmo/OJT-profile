<template>
  <div class="bg">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="navbar-container">
        <ul class="nav-menu">
          <li class="nav-item">
            <a href="#" @click.prevent="scrollTo('container')" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="#" @click.prevent="scrollTo('personal')" class="nav-link">Activities</a>
          </li>
          <li class="nav-item">
            <a href="#" @click.prevent="scrollTo('group')" class="nav-link">Insights</a>
          </li>
          <li class="nav-item">
            <a href="#" @click.prevent="scrollTo('register-container')" class="nav-link">Company</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container" ref="container">
      <div class="hero-section">
        <div class="hero-graphic">
          <div class="image-wrapper">
            <img src="/maica.png" alt="My OJT Journey" class="profile-image" />
          </div>
          <div class="graphic-accent"></div>
        </div>

        <div class="content">
          <h2><span class="highlight">Welcome to My OJT Journey</span></h2>
          <p class="description">
            An interactive portfolio that showcases the skills I've learned, the experiences I've gained, and the valuable lessons I've encountered throughout my OJT journey as a BSIT student.
          </p>
          <div style="text-align: center;">
            <a href="#" @click.prevent="scrollTo('personal')" class="cta-button1">
              Explore My Journey
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="ojt-experience-section" ref="personal">
      <h2 class="section-title">MY OJT EXPERIENCE</h2>
      
      <div class="experience-container">
        <!-- Experience 1 -->
        <div class="experience-card">
          <div class="experience-image-wrapper">
            <img src="/ojt1.png" alt="OJT Experience 1" class="experience-image" />
          </div>
          <div class="experience-content">
            <h3>GUIDING RESIDENTS</h3>
            <p>Assisting residents with the process of filling out the Cedula and Constituent Registration Form by guiding them step-by-step and answering their questions.</p>
          </div>
        </div>
        
        <!-- Experience 2 -->
        <div class="experience-card">
          <div class="experience-image-wrapper">
            <img src="/ojt2.png" alt="OJT Experience 2" class="experience-image" />
          </div>
          <div class="experience-content">
            <h3>DATA ENTRY</h3>
            <p>Encoding various barangay documents such as Certificates of Residency, Indigency, NBI Clearance requests, and other official forms into the system.</p>
          </div>
        </div>
        
        <!-- Experience 3 -->
        <div class="experience-card">
          <div class="experience-image-wrapper">
            <img src="/ojt3.png" alt="OJT Experience 3" class="experience-image" />
          </div>
          <div class="experience-content">
            <h3>DOCUMENT PRINTING</h3>
            <p>Responsible for printing various barangay documents such as certificates and official forms, as well as handling photocopying tasks.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="ojt-insights-section" ref="group">
      <h2 class="section-title1">Reflection from my OJT Experience</h2>
      
      <div class="insights-container">
        <!-- Insight 1 -->
        <div class="insight-card">
          <div class="insight-icon">
            <i class="fas fa-comments"></i>
          </div>
          <div class="insight-content">
            <h3>Improved Communication Skills</h3>
            <p>Through assisting residents in filling out Cedula and registration forms, I developed clearer and more patient communication skills, especially when guiding individuals unfamiliar with form requirements.</p>
          </div>
        </div>
        
        <!-- Insight 2 -->
        <div class="insight-card">
          <div class="insight-icon">
            <i class="fas fa-search"></i>
          </div>
          <div class="insight-content">
            <h3>Strengthened Attention to Detail</h3>
            <p>Encoding various official barangay documents helped me strengthen my attention to detail, ensuring all information entered into the system was accurate and complete to avoid delays or errors.</p>
          </div>
        </div>
        
        <!-- Insight 3 -->
        <div class="insight-card">
          <div class="insight-icon">
            <i class="fas fa-hands-helping"></i>
          </div>
          <div class="insight-content">
            <h3>Gained Firsthand Experience in Public Service</h3>
            <p>Working directly with residents gave me insight into how local government offices operate and taught me how to interact professionally with the public while maintaining a helpful and respectful attitude.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="barangay-container" ref="register-container">
      <div class="info-container">
        <div class="barangay-info">
          <h2>Barangay Sta. Rita</h2>
          <p class="barangay-description">
            Located in Olongapo City, Philippines, Barangay Sta. Rita is a local government unit dedicated to serving the public and promoting community growth. It plays a key role in local governance, delivering essential services, and encouraging active citizen participation.
          </p>
          
          <p class="barangay-services">
            The barangay provides various services including health programs, business permits, 
            community development initiatives, and youth empowerment activities.
          </p>
        </div>
      </div>
      
      <div class="barangay-image-container">
        <div class="image-wrapper1">
          <img src="/brgy.jpg" alt="Barangay Sta. Rita" class="barangay-image">
        </div>
      </div>
    </div>

    <!-- Footer Section -->
    <footer class="site-footer">
      <div class="footer-content">
        <p class="footer-motto">"Design with purpose, code with passion."</p>
        <p class="footer-contact">Contact me!</p>
        <div class="social-links">
          <a href="floresjamaicamae30@gmail.com" class="social-link">
            <i class="fas fa-envelope"></i> Email
          </a>
          <a href="https://www.facebook.com/jmcmflrs" target="_blank" class="social-link">
            <i class="fab fa-facebook"></i> Facebook
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>



<script>
export default {
  name: 'About',
  data() {
    return {
      userInfo: null,
      error: null,
      accountDeleted: false
    };
  },
  methods: {
    scrollTo(refName) {
      const element = this.$refs[refName];
      if (element) {
        // Add offset for navbar height
        const offset = 70; // Match your navbar height
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    }
  },
  mounted() {
    // Check for account deletion notification
    if (this.$route.query.deleted) {
      this.accountDeleted = true;
    }
  }
};
</script>


<style>
body {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: rgb(250, 254, 255);
  overflow-x: hidden;
  overflow-y: auto;
}

/* Scrollbar styling for WebKit-based browsers */
body::-webkit-scrollbar {
  width: 10px;
}

body::-webkit-scrollbar-track {
  background: #EEEEEE; /* Light gray track */
}

body::-webkit-scrollbar-thumb {
  background-color: #508C9B; /* Blue scrollbar */
  border-radius: 10px;
  border: 2px solid #EEEEEE; /* Creates padding around thumb */
}

/* Optional: Hover effect for the thumb */
body::-webkit-scrollbar-thumb:hover {
  background-color: #273F4F;
}

</style>

<style scoped>
.site-footer {
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 2rem 0;
  text-align: center;
  margin-top: 3rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0rem;
}

.footer-motto {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 1.6rem;
  margin-bottom: 2rem;
  color: #ffffff;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  letter-spacing: 0.5px;
  text-align: center;
  transition: color 0.3s ease, text-shadow 0.3s ease;
  margin-top: 10px;
}


.footer-contact {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: #ffffff;
  letter-spacing: 0.4px;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
}


.social-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  padding: 1rem;
  margin-top: -10px;
}

.social-link {
  color: #ecf0f1;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  transition: color 0.3s ease;
  font-size: 1rem;
}

.social-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0%;
  height: 2px;
  background: white;
  box-shadow: 0 0 6px white;
  transition: width 0.3s ease;
}

.social-link:hover {
  color: #ffffff;
}

.social-link:hover::after {
  width: 100%;
}

.social-link i {
  font-size: 1.4rem;
}

/* Responsive tweaks */
@media (max-width: 768px) {
  .social-links {
    gap: 1.5rem;
  }

  .social-link {
    font-size: 0.95rem;
  }

  .social-link i {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .social-links {
    gap: 1rem;
  }

  .social-link {
    font-size: 0.9rem;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .social-link i {
    font-size: 1rem;
  }
}





@media (max-width: 768px) {
  
  .footer-motto {
    font-size: 1.4rem;
  }
}









.barangay-container {
  display: flex;
  min-height: 600px;
  width: 100%;
}


.info-container {
  flex: 1;
  padding: 3rem;
  display: flex;
  align-items: center;
}

.barangay-info { 
  max-width: 600px;
  margin-left: 20px;
  padding: 1.5rem 2rem;
  background: linear-gradient(135deg, #f9f9f9, #eeeeee);
  border-left: 6px solid;
  border-image: linear-gradient(to bottom, #508C9B, #273F4F);
  border-image-slice: 1;
  border-radius: 16px;
  color: #273F4F;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.7;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  backdrop-filter: blur(2px);
}

.barangay-info::before {
  content: '🏘️';
  font-size: 1.8rem;
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  opacity: 0.15;
}

.barangay-info:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(80, 140, 155, 0.25);
}



.barangay-info h2 {
  font-size: 2.2rem;
  color: #2c3e50;
  margin-bottom: 3rem;
  margin-top: 15px;
  position: relative;
  text-align: center;
  font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
}

.barangay-info h2::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 4px;
  background: linear-gradient(to right, #4a6fa5, #8bbcae);
  border-radius: 2px;
  box-shadow: 0 2px 6px rgba(74, 111, 165, 0.4);
}

.barangay-description,
.barangay-services {
  color: #555;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  padding: 0.5rem 0.75rem;
  background-color: #f9f9f9;
  border-radius: 6px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.barangay-description:hover,
.barangay-services:hover {
  background-color: #EEF5F8;
  box-shadow: 0 8px 20px rgba(80, 140, 155, 0.25);
  transform: translateY(-4px);
  transition: all 0.3s ease;
}





.barangay-image-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.image-wrapper1 {
  width: 100%;
  max-width: 500px;
  position: relative;
  border: 4px solid #D7D7D7;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}

.image-wrapper1:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(80, 140, 155, 0.25);
  border-color: #508C9B;
}

.barangay-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 0; /* already handled by wrapper */
}


.image-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 1rem;
  text-align: center;
  font-size: 1.1rem;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

/* Responsive Design */
@media (max-width: 992px) {
  .barangay-container {
    flex-direction: column;
  }
  
  .info-container {
    padding: 2rem;
  }
  
  .barangay-image-container {
    padding-bottom: 3rem;
  }
  
  .image-wrapper1 {
    max-width: 500px;
  }
}

@media (max-width: 576px) {
  .info-container {
    padding: 1.5rem;
  }
  
  .barangay-info h2 {
    font-size: 1.8rem;
  }
  
  .barangay-features {
    flex-direction: column;
    gap: 1rem;
  }
  
  .image-wrapper1 {
    max-width: 100%;
  }
}






.ojt-insights-section {
  padding: 4rem 2rem;
  text-align: center;
}

.section-title1 {
  font-size: 2.5rem;
  color: #273F4F;
  margin-bottom: 5rem;
  position: relative;
  display: inline-block;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  transition: color 0.3s ease;
  margin-top: -50px;
}

.section-title1::before {
  content: '';
  position: absolute;
  bottom: -16px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 6px;
  background: linear-gradient(to right, #4a6fa5, #8bbcae);
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(74, 111, 165, 0.3);
  transition: width 0.3s ease;
}

.section-title1:hover::before {
  width: 400px;
}

.insights-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.insight-card {
  background: #EEEEEE;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  border: 2px solid #D7D7D7;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  text-align: left;
  color: #273F4F;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.insight-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(80, 140, 155, 0.25);
  border-color: #508C9B;
}



.insight-icon {
  font-size: 2.5rem;
  color: #508C9B; /* replaced #4a6fa5 with your palette */
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, color 0.3s ease;
}

.insight-icon:hover {
  transform: scale(1.1);
  color: #273F4F;
}


.insight-content h3 {
  color: #2c3e50;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  text-align: center;
}

.insight-content p {
  color: #555;
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: -15px;
  text-align: justify;

}

/* Responsive adjustments */
@media (max-width: 768px) {
  .section-title1 {
    font-size: 2rem;
  }
  
  .insights-container {
    grid-template-columns: 1fr;
    max-width: 600px;
  }
}

@media (max-width: 480px) {
  .ojt-insights-section {
    padding: 3rem 1rem;
  }
  
  .section-title1 {
    font-size: 1.8rem;
  }
  
  .insight-card {
    padding: 1.5rem;
  }
}






.ojt-experience-section {
  padding: 4rem 2rem;
  text-align: center;
}

.section-title {
  font-size: 2.75rem;
  color: #273F4F;
  margin-bottom: 3rem;
  margin-top: -50px;
  position: relative;
  display: inline-block;
  font-weight: 700;
  font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 90px;
  height: 6px;
  background: linear-gradient(to right, #4a6fa5, #8bbcae);
  border-radius: 4px;
  box-shadow: 0 2px 6px rgba(74, 111, 165, 0.4);
  transition: width 0.3s ease;
}

.section-title:hover::after {
  width: 320px;
}

.experience-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0; /* Added spacing for better breathing room */
  animation: fadeInUp 0.8s ease-in-out both;
}

/* Optional fade-in and slide-up animation */
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}


.experience-card {
  background: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
  width: 100%;
  max-width: 370px;
  max-height: 390px;
  border: 2px solid transparent;
}

.experience-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  border: 2px solid #273F4F; /* subtle and stylish blue border on hover */
}


.experience-image-wrapper {
  height: 200px;
  overflow: hidden;
}

.experience-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.experience-card:hover .experience-image {
  transform: scale(1.05);
}

.experience-content {
  padding: .5rem 2rem;
  text-align: center;
}

.experience-content h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  font-size: 1.4rem;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  letter-spacing: 0.5px;
}


.experience-content p {
  color: #555;
  line-height: 1.6;
  text-align: justify;
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .experience-container {
    gap: 1.5rem;
  }
  
  .experience-card {
    max-width: 300px;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .experience-container {
    flex-direction: column;
    align-items: center;
  }
  
  .experience-card {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .ojt-experience-section {
    padding: 3rem 1rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .experience-content {
    padding: 1.2rem;
  }
}






/* Container styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* Hero section layout */
.hero-section {
  display: flex;
  align-items: center;
  gap: 3rem;
  min-height: 70vh;
}

/* Circular image styling */
.image-wrapper {
  width: 370px;
  height: 370px;
  border-radius: 50%;
  padding: 10px; /* thickness of gradient border */
  background: linear-gradient(135deg, #508C9B, #273F4F); /* gradient border */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 15px 35px rgba(39, 63, 79, 0.2);
  margin-left: 80px;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  background-color: #EEEEEE; /* acts as the image background */
  border: 6px solid #EEEEEE; /* solid inner border to separate image from gradient */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}




.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.05);
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .image-wrapper {
    width: 370px;
    height: 370px;
    margin-left: 60px;
    margin-top: 100px;
  }
}

@media (max-width: 992px) {
  .image-wrapper {
    width: 280px;
    height: 280px;
    margin-left: 40px;
  }
}

@media (max-width: 768px) {
  .image-wrapper {
    width: 340px;
    height: 340px;
    margin-left: auto; /* Centers the image */
    margin-right: auto;
    margin-bottom: 30px; /* Adds space below image when stacked */
  }
}

@media (max-width: 576px) {
  .image-wrapper {
    width: 300px;
    height: 300px;
    border-width: 4px;
  }
}

/* For very small devices */
@media (max-width: 400px) {
  .image-wrapper {
    width: 280px;
    height: 280px;
  }
}
/* Content styling */

.highlight {
  font-size: 2.4rem;
  font-weight: 800;
  font-family: 'Poppins', sans-serif;
  text-shadow: 2px 2px 8px rgba(19, 75, 112, 0.2);
  display: inline-block;
  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;

  /* ✅ Center it */
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}



.description {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #273F4F; /* dark bluish-gray text */
  margin-bottom: 2rem;
  max-width: 90%;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  padding: 16px 20px;
  position: relative;
  overflow: hidden;
  transition: all 0.35s ease;
  z-index: 1;

  /* ✅ Centering */
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.description::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 200%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(80, 140, 155, 0.15),
    transparent
  ); /* uses #508C9B */
  z-index: 0;
  transition: all 0.5s ease;
}

.description:hover::before {
  left: 0;
}

.description:hover {
  background-color: rgba(238, 238, 238, 0.75); /* #EEEEEE with slight transparency */
  box-shadow: 0 4px 18px rgba(80, 140, 155, 0.15); /* subtle glow in theme */
}


.description:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.1);
}
.cta-button1 {
  background: linear-gradient(135deg, #134B70, #2C6BA8); /* Gradient blue */
  color: #fff;
  border: none;
  padding: 14px 36px;
  font-size: 1.15rem;
  border-radius: 60px;
  cursor: pointer;
  transition: all 0.35s ease;
  box-shadow: 0 5px 18px rgba(19, 75, 112, 0.35);
  letter-spacing: 0.6px;
  text-decoration: none;
  display: inline-block;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  text-align: center;
  position: relative;
  z-index: 1;
  overflow: hidden;
  margin: auto;
  text-align: center;
}

.cta-button1::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 200%;
  height: 100%;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transition: all 0.5s ease;
  z-index: 0;
}

.cta-button1:hover::before {
  left: 0;
}

.cta-button1:hover {
  background: linear-gradient(135deg, #1f2e3e, #273F4F, #324d60);
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(39, 63, 79, 0.45); /* matches the color tone */
}

/* Decorative accent */
.graphic-accent {
  position: absolute;
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, rgba(74, 111, 165, 0.1) 0%, rgba(74, 111, 165, 0) 70%);
  border-radius: 50%;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Responsive design */
@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
  }
  
  .image-wrapper {
    width: 200px;
    height: 200px;
  }
  
  .highlight {
    font-size: 2rem;
  }
  
  .description {
    margin: 1rem auto;
  }
}





.navbar-logo {
  margin-left: 0px; /* Reduce left margin */
  margin-right: auto;
  display: flex;
  align-items: center;
  text-decoration: none;
}
.logo-image {
  height: 70px;
  width: auto;
  object-fit: contain;
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  width: 100%;
  height: 70px;
  background-color: rgba(19, 75, 112, 0.75);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: center; /* center entire container */
  transition: all 0.3s ease;
}

.navbar-container {
  display: flex;
  justify-content: center; /* center nav-menu inside */
  align-items: center;
  width: 100%;
  max-width: 1200px;
}

.nav-menu {
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  /* ✅ Remove margin-left if present */
  margin-left: 0;
}

.nav-item {
  position: relative;
}

.nav-item a {
  color: #f1f1f1;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

.nav-item a:hover {
  color: #ffffff;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.6),
               0 0 10px rgba(255, 255, 255, 0.5),
               0 0 15px rgba(255, 255, 255, 0.4);
  transform: scale(1.05); /* optional scaling effect */
}


.nav-link {
  position: relative;
  color: #EEEEEE;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.5rem 0;
  letter-spacing: 0px;
  transition: color 0.3s ease, transform 0.2s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0%;
  height: 2px;
  background: linear-gradient(to right, #ffffff, #ffffff); /* white gradient */
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: #ffffff;
  transform: translateY(-2px);
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link.active {
  color: #EEEEEE;
  font-weight: 600;
}

.nav-link.active::after {
  width: 100%;
}




.deletion-popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(135deg, #cde5dc, #a6cfc1, #88b8a5);
  border: 1px solid #a5d6a7;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 15px 30px 35px 30px;
  width: 90%;
  max-width: 450px;
  border-radius: 16px;
  text-align: center;
  z-index: 1000;
  font-family: 'Segoe UI', sans-serif;
  animation: fadeIn 0.4s ease-out;
}

.deletion-popup h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  color: #ffffff;
}

.deletion-popup p {
  color: #f0f7f5;
  font-size: 1rem;
  margin-bottom: 25px;
}



@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate(-50%, -60%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
}

.split-container {
  display: flex;
  min-height: 100vh;
  width: 100%;
}

.register-container {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-bottom: 80px;
}

.image-container {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.image-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 12px; 
}
.register-card {
  background: rgba(255, 255, 255, 0.75);
  border-radius: 24px;
  padding: 15px 35px;
  box-shadow: 0 15px 35px rgba(60, 120, 80, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
}

.register-card::before {
  content: '';
  position: absolute;
  top: -50px;
  left: -50px;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at top left, #c8e6c9 0%, transparent 70%);
  opacity: 0.15;
  z-index: 0;
  pointer-events: none;
}

.register-card:hover {
  box-shadow: 0 20px 45px rgba(50, 120, 70, 0.25);
  transform: translateY(-5px) scale(1.01);
}

.register-card h2 {
  font-size: 2rem;
  margin-bottom: 16px;
  color: #2e7d32;
  font-weight: 800;
  position: relative;
  z-index: 1;
}

.register-card p {
  font-size: 1.05rem;
  color: #556b60;
  margin-bottom: 30px;
  line-height: 1.6;
  position: relative;
  z-index: 1;
}

.register-button {
  display: inline-block;
  background: linear-gradient(135deg, #4CB5AB, #2a4b3c);
  color: white;
  padding: 14px 40px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.05rem;
  letter-spacing: 0.5px;
  transition: all 0.4s ease;
  box-shadow: 0 8px 20px rgba(46, 125, 50, 0.25);
  background-size: 200% 200%;
  background-position: left center;
  position: relative;
  overflow: hidden;
}

.register-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.15);
  transform: skewX(-20deg);
  transition: all 0.6s ease;
}

.register-button:hover {
  transform: translateY(-4px);
  background-position: right center;
  box-shadow: 0 10px 28px rgba(46, 125, 50, 0.35);
}

.register-button:hover::before {
  left: 120%;
}


.login-prompt {
  font-size: 0.95em;
  color: #546e60;
  margin-top: 20px;
}


.bg {
  background-color: #ffffff; /* clean white background */
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  min-height: 200vh;
}

.bg::before,
.bg::after {
  content: '';
  position: absolute;
  border-radius: 50%;
  opacity: 0.08; /* very subtle accents */
  z-index: 0;
}

.bg::before {
  width: 300px;
  height: 300px;
  top: -100px;
  left: -100px;
}

.bg::after {
  width: 400px;
  height: 400px;
  bottom: -150px;
  right: -150px;
}

.container,
.ojt-experience-section, 
.ojt-insights-section,
.image-container,
.barangay-container {
  position: relative;
  z-index: 1; /* Makes sure content stays above background shapes */
}



.group {
  margin: 40px auto; /* Reduced side margins to 0 */
  max-width: 1200px; /* Slightly increased max-width */
  padding: 0 15px; /* Reduced side padding */
  width: 100%;
}

.group-container {
  display: flex;
  gap: 30px;
  width: 90%;
  margin: 0 auto;  /* centers the container horizontally */
  justify-content: center; /* centers flex items inside the container */
}

.group-image {
  width: 95%;
  height: auto;
  border-radius: 16px;
  backdrop-filter: blur(6px);
  background-color: rgba(255, 255, 255, 0.1);
  padding: 6px;
  box-shadow:
    0 8px 16px rgba(42, 75, 60, 0.2),
    0 4px 8px rgba(106, 156, 137, 0.12),
    0 0 12px rgba(139, 188, 174, 0.25); /* glow highlight */

  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.group-image:hover {
  transform: scale(1.03) translateY(-4px);
  box-shadow:
    0 12px 24px rgba(42, 75, 60, 0.25),
    0 6px 12px rgba(106, 156, 137, 0.18),
    0 0 20px rgba(139, 188, 174, 0.35);
}


.personal {
  margin: 40px auto; /* Reduced side margins to 0 */
  max-width: 1200px; /* Slightly increased max-width */
  padding: 0 15px; /* Reduced side padding */
  width: 100%;
}

.group-image-section {
  flex: 0 0 38%; /* Slightly reduced from 40% */
  padding: 0 10px; 
  display: flex;
  flex-direction: column;
  align-items: center;
}

.personal-container {
  display: flex;
  gap: 30px;
  width: 90%;
  margin: 0 auto;  /* centers the container horizontally */
  justify-content: center; /* centers flex items inside the container */
}

.features-grid {
  flex: 0 0 62%; /* Slightly increased from 60% */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px; /* Reduced gap between cards */
  padding: 0 10px; /* Added internal padding */
}


.personal-image-section {
  flex: 0 0 38%; /* Slightly reduced from 40% */
  padding: 0 10px; 
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-header {
  font-size: 2.2rem;
  color: #2a4b3c;
  margin-bottom: 28px;
  text-align: center;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 1.2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.08);
  position: relative;
  transition: all 0.3s ease;
}


/* Optional hover effect for subtle interaction */
.section-header:hover {
  color: #3d6651;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
}

.section-header:hover::after {
  background: #6a9c89;
}


.personal-image {
  width: 95%;
  height: auto;
  border-radius: 16px;
  backdrop-filter: blur(6px);
  background-color: rgba(255, 255, 255, 0.1);
  padding: 6px;
  box-shadow:
    0 8px 16px rgba(42, 75, 60, 0.2),
    0 4px 8px rgba(106, 156, 137, 0.12),
    0 0 12px rgba(139, 188, 174, 0.25); /* glow highlight */

  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.personal-image:hover {
  transform: scale(1.03) translateY(-4px);
  box-shadow:
    0 12px 24px rgba(42, 75, 60, 0.25),
    0 6px 12px rgba(106, 156, 137, 0.18),
    0 0 20px rgba(139, 188, 174, 0.35);
}


.feature-card {
  background: white;
  border-radius: 16px;
  padding: 20px; /* Reduced padding */
  transition: all 0.3s ease;
  border-bottom: 6px solid #85A98F;
  box-shadow: 0 4px 12px rgba(50, 120, 70, 0.08);
  max-height: 240px; /* Smaller fixed height */
  display: flex;
  flex-direction: column;
  margin-top: 13px;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(50, 120, 70, 0.12);
}

.feature-icon {
  font-size: 2rem; /* Smaller icon */
  margin-bottom: 5px;
  background: linear-gradient(135deg, #e8f5e9, #a5d6a7);
  width: 60px; /* Smaller circle */
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(70, 180, 120, 0.2);
  align-self: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-icon:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.feature-icon1 {
  font-size: 2rem; /* Smaller icon */
  margin-bottom: 5px;
  background: linear-gradient(135deg, #a8edea, #fed6e3); /* mint to soft pink */
  width: 60px; /* Smaller circle */
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(70, 180, 120, 0.2);
  align-self: center;
}

.feature-icon1:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.feature-icon2 {
  font-size: 2rem; /* Smaller icon */
  margin-bottom: 5px;
  background: linear-gradient(135deg, #ffe29f, #ffa99f); /* pastel yellow to peach */
  width: 60px; /* Smaller circle */
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(70, 180, 120, 0.2);
  align-self: center;
}

.feature-icon2:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}
.feature-icon3 {
  font-size: 2rem; /* Smaller icon */
  margin-bottom: 5px;
  background: linear-gradient(135deg, #d4fc79, #96e6a1); /* light green to mint */
  width: 60px; /* Smaller circle */
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(70, 180, 120, 0.2);
  align-self: center;
}

.feature-icon3:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.feature-icon4 {
  font-size: 2rem; /* Smaller icon */
  margin-bottom: 5px;
  background: linear-gradient(135deg, #fff1a6, #fcd374); /* mint to soft blue */
  width: 60px; /* Smaller circle */
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(70, 180, 120, 0.2);
  align-self: center;
}

.feature-icon4:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}
.feature-icon5 {
  font-size: 2rem; /* Smaller icon */
  margin-bottom: 5px;
  background: linear-gradient(135deg, #dec8f3, #7b60bb);
  width: 60px; /* Smaller circle */
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(70, 180, 120, 0.2);
  align-self: center;
}

.feature-icon5:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}
.feature-card h3 {
  font-size: 1rem; /* Smaller heading */
  color: #2a4b3c;
  margin-bottom: 10px;
  font-weight: 600;
  text-align: center;
}

.feature-card p {
  font-size: 0.8rem; /* Smaller text */
  color: #5a6e65;
  line-height: 1.5;
  margin: 0;
  text-align: center;
}

/* Responsive adjustments */
@media (max-width: 900px) {
  .group-container {
    flex-direction: column;
    width: 90%;
    margin-left: 10px;
  }
  
  .group-image-section,
  .features-grid {
    flex: 0 0 100%;
    width: 100%;
  }
  
  .group-image-section {
    order: 1;
    margin-bottom: 30px;
  }
}

@media (max-width: 900px) {
  .personal-container {
    flex-direction: column;
    width: 90%;
    margin-left: 10px;
  }
  
  .features-grid,
  .personal-image-section {
    flex: 0 0 100%;
    width: 100%;
  }
  
  .features-grid {
    order: 2; /* Moves features below image on mobile */
  }
  
  .personal-image-section {
    order: 1; /* Moves image above features on mobile */
    margin-bottom: 30px;
  }
}

@media (max-width: 600px) {
  .personal-container,
  .group-container {
    flex-direction: column;
    width: 90%;
    margin-left: 0px;
  }
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .section-header {
    font-size: 1.5rem;
  }
}

@media (max-width: 600px) {
  .personal {
    grid-template-columns: 1fr; /* 1 column on mobile */
    gap: 15px;
  }
  
  .group {
    grid-template-columns: 1fr; /* 1 column on mobile */
    gap: 15px;
  }
  .feature-card {
    min-height: auto;
    padding: 20px;
  }
}


.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  min-height: 100vh;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 10px;
  position: relative;
  box-shadow: 0 10px 40px rgba(60, 120, 80, 0.15);
}



.logo {
  width: 95%;
  height: auto;
  filter: drop-shadow(0 10px 20px rgba(50, 120, 70, 0.15));
  transition: transform 0.3s ease;
  z-index: 2;
  position: relative;
  animation: float 3s ease-in-out infinite;
}


.logo:hover {
  transform: translateY(-5px);
}

.graphic-accent {
  position: absolute;
  width: 120%;
  height: 120%;
  background: radial-gradient(circle, rgba(100, 200, 150, 0.1) 0%, rgba(255,255,255,0) 70%);
  top: -10%;
  left: -10%;
  z-index: 1;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: float 8s ease-in-out infinite;
}

.content {
  width: 50%;
  padding: 30px;
  background: #EEEEEE;
  border-radius: 28px;
  box-shadow: 0 12px 24px rgba(80, 140, 155, 0.15); /* uses #508C9B */
  border: 3px solid rgba(39, 63, 79, 0.1); /* soft border with #273F4F base */
  transition: all 0.4s ease;
  position: relative;
  color: #273F4F; /* text color */
}

.content:hover {
  transform: translateY(-8px);
  box-shadow: 0 28px 48px rgba(80, 140, 155, 0.25); /* deeper hover shadow */
  background: #f8f8f8; /* subtle light change */
}






/* Subtle floating icon effect */
@keyframes floatIcon {
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
}



/* RESPONSIVE DESIGN */
@media only screen and (max-width: 1024px) {
  .container {
    flex-direction: column;
    padding: 40px 5%;
  }
  
  .hero-graphic, .content {
    width: 100%;
    max-width: 600px;
  }
  
  .hero-graphic {
    margin-bottom: 40px;
  }
  
  h2 {
    font-size: 2.2rem;
    text-align: center;
  }
  

}

@media only screen and (max-width: 768px) {
  h2 {
    font-size: 1.8rem;
  }
  
  .description {
    font-size: 1rem;
  }
  
  .content {
    padding: 30px;
    width: 90%;
  }
}

@media only screen and (max-width: 480px) {
  h2 {
    font-size: 1.6rem;
  }
  
  .feature-pill {
    display: block;
    margin-right: 0;
    text-align: center;
  }
  
  .graphic-accent {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .content {
    width: 80%;
  }
  .personal-container,
  .group-container {
    width: 80%;
    margin-left: 10px;
  }
  .register-card {
    padding: 15px;
  }
  .logo{
    margin-top: 30px;
  }
}
</style>