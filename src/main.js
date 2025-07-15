import './style.css'

// Portfolio data
const portfolioData = {
  name: "Ilias AFATHI",
  title: "software engineering student",
  description: "A wise man who plays guitar and loves to code ;)",
  about: "I'm a dedicated developer with experience in modern web technologies. I love turning ideas into reality through clean code and intuitive design.",
  skills: [
    { name: "HTML/CSS", icon: "fab fa-html5", level: 100 },
    { name: "JavaScript", icon: "fab fa-js-square", level: 95 },
    { name: "React", icon: "fab fa-react", level: 85 },
    { name: "laravel", icon: "fab fa-laravel", level: 97 },
    { name: "Python-Django", icon: '<img src="/django.png" alt="Kotlin" style="width:1.5em;height:1.5em;vertical-align:middle;" />', level: 80 },
    { name: "WordPress", icon: "fab fa-wordpress", level: 90 },
    { name: "Java", icon: "fab fa-java", level: 97 },
    { name: "Kotlin", icon: '<img src="/kotlin2.png" alt="Kotlin" style="width:1.5em;height:1.5em;vertical-align:middle;" />', level: 97 },
    { name: "UX/UI", icon:'<img src="/uxui.webp" alt="Kotlin" style="width:1.5em;height:1.5em;vertical-align:middle;" />', level: 80 },
    { name: "Git", icon: "fab fa-git-alt", level: 100 }
  ],
  projects: [
    {
      title: "ISTA APP",
      description: "An Android mobile application designed to simplify and optimize ISTA management. Directors, professors, and students can log in with dedicated access. The app allows directors and professors to manage students, courses, grades, and training programs. Students can access their profiles, check their grades, and stay informed about their academic progress.",
      image: "ista.png",
      technologies: ["Java-Android","XML","SQLite"],
      pdf: "/ista-ilias AFATHI"
    },
    {
      title: "Contact Management App – General Delegation for Prison Administration and Reintegration",
      description: "During my internship, I developed a mobile application for the General Delegation for Prison Administration and Reintegration. The app features an admin panel with role-based access: admins can create and manage penitentiary institutions, while consultants have read-only access to search, filter by region and city, and export the institution list as a CSV file. This solution enhances data organization and streamlines internal communication within the penitentiary system.",
      image: "dgapr.webp",
      technologies: ["Kotlin","XML","SQLite"],
      pdf:"/dgapr-ilias AFATHi.pdf"
    },
    {
      title: "AMMS",
      description: "A management and collaboration platform for associations and members.",
      image: "/amms.png",
      technologies: ["Django", "HTML, CSS, Bootstrap", "SQLite"],
      link: "https://anasss.pythonanywhere.com/",
      pdf: "/Ammscap-ilias AFATHI.pdf"
    },
    {
      title: "Chat Application : Aji Nchatiw",
      description: "A real-time chat application with user authentication and messaging features.",
      image: "/aji nchatiw.png",
      technologies: ["Laravel-Reverb", "Blade,Bootstrap", "MySql"],
      pdf: "/Ajinchatiw-ilias AFATHI.pdf"
    },
    {
      title: "BoutikGest",
      description: "This application includes key features such as product management, news publishing, admin panel for monitoring and managing products and sales",
      image: "boutikgest.png",
      technologies: ["Java-Swing"],
      pdf: "#"
    },
    {
      title: "Wellness for Selling Medical Products",
      description: "This application includes key features such as product management, news publishing, user account management, and an admin panel for monitoring and managing sales performance",
      image: "wellness.jpg",
      technologies: ["Laravel","HTML-CSS-BootStrap", "JavaScript", "MySql","Hostinger"],
      pdf: "/wellness-ilias AFATHI.pdf"
    },
    {
      title: "Weather App",
      description: "The app lets users search for weather forecasts by entering a city name. It provides detailed forecasts by day and hour, and includes a list of popular cities for quick access. Users can switch between Celsius and Fahrenheit, select a city directly from an interactive map, and receive friendly notifications in case of errors. A loading indicator enhances the user experience during data fetching.",
      image: "weather.png",
      technologies: ["React js","TypeScript", "Tailwind CSS", "API"],
      pdf: "/weather-Ilias AFATHI.pdf"
    }


  ],
  contact: {
    email: "iliasafathi5@gmail.com",
    linkedin: "https://www.linkedin.com/in/ilias-afathi/",
    github: "https://github.com/iliasoafathi"
  }
}

// Navigation component
function createNavigation() {
  return `
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-logo">
          <a href="#home">${portfolioData.name}</a>
        </div>
        <ul class="nav-menu">
          <li><a href="#home" class="nav-link">Home</a></li>
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#skills" class="nav-link">Skills</a></li>
          <li><a href="#projects" class="nav-link">Projects</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  `
}

// Hero section
function createHero() {
  return `
    <section id="home" class="hero">
      <div class="hero-container">
        <div class="hero-content">
          <h1 class="hero-title">Hi, I'm ${portfolioData.name}</h1>
          <h2 class="hero-subtitle">${portfolioData.title}</h2>
          <p class="hero-description">${portfolioData.description}</p>
          <div class="hero-buttons">
            <a href="#projects" class="btn btn-primary">View My Work</a>
            <a href="#contact" class="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div class="hero-image">
          <div class="hero-avatar">
            <img src="/profile.jpg" alt="Profile Photo" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />
          </div>
        </div>
      </div>
    </section>
  `
}

// About section
function createAbout() {
  return `
    <section id="about" class="about">
      <div class="container">
        <h2 class="section-title">About Me</h2>
        <div class="about-content">
          <div class="about-text">
            <p>${portfolioData.about}</p>
            <div class="about-stats">
              <div class="stat">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
              <div class="stat">
                <h3>15+</h3>
                <p>Projects Completed</p>
              </div>
              <div class="stat">
                <h3>10+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}

// Skills section
function createSkills() {
  const skillsHTML = portfolioData.skills.map(skill => `
    <div class="skill-item">
      <div class="skill-header">
        ${skill.icon.startsWith('<img') ? skill.icon : `<i class="${skill.icon}"></i>`}
        <span>${skill.name}</span>
      </div>
      <div class="skill-bar">
        <div class="skill-progress" style="width: ${skill.level}%"></div>
      </div>
    </div>
  `).join('')

  return `
    <section id="skills" class="skills">
      <div class="container">
        <h2 class="section-title">Skills & Technologies</h2>
        <div class="skills-grid">
          ${skillsHTML}
        </div>
      </div>
    </section>
  `
}

// Projects section
function createProjects() {
  const projectsHTML = portfolioData.projects.map(project => `
    <div class="project-card">
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}">
      </div>
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-technologies">
          ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <a href="${project.link}" class="project-link">View Project</a>
        ${project.pdf ? `<a href="${project.pdf}" class="project-link" download style="margin-left:10px;">View Project Interfaces...</a>` : ''}
      </div>
    </div>
  `).join('')

  return `
    <section id="projects" class="projects">
      <div class="container">
        <h2 class="section-title">Featured Projects</h2>
        <div class="projects-grid">
          ${projectsHTML}
        </div>
      </div>
    </section>
  `
}

// Contact section
function createContact() {
  return `
    <section id="contact" class="contact">
      <div class="container">
        <h2 class="section-title">Get In Touch</h2>
        <div class="contact-content">
          <div class="contact-info">
            <h3>Let's work together!</h3>
            <p>I'm always interested in new opportunities and exciting projects.</p>
            <div class="contact-links">
              <a href="mailto:${portfolioData.contact.email}" class="contact-link">
                <i class="fas fa-envelope"></i>
                ${portfolioData.contact.email}
              </a>
              <a href="${portfolioData.contact.linkedin}" class="contact-link" target="_blank">
                <i class="fab fa-linkedin"></i>
                LinkedIn
              </a>
              <a href="${portfolioData.contact.github}" class="contact-link" target="_blank">
                <i class="fab fa-github"></i>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}

// Footer
function createFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 ${portfolioData.name}. All rights reserved.</p>
      </div>
    </footer>
  `
}

// Initialize the portfolio
function initPortfolio() {
  const app = document.querySelector('#app')
  app.innerHTML = `
    ${createNavigation()}
    ${createHero()}
    ${createAbout()}
    ${createSkills()}
    ${createProjects()}
    ${createContact()}
    ${createFooter()}
  `

  // Add smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })

  // Mobile menu toggle
  const hamburger = document.querySelector('.hamburger')
  const navMenu = document.querySelector('.nav-menu')
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active')
      navMenu.classList.toggle('active')
    })
  }

  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active')
      navMenu.classList.remove('active')
    })
  })
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initPortfolio)
