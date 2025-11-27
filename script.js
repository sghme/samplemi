
    const defaultConfig = {
      hero_headline: "Transform Your Business Digitally",
      hero_subheadline: "Innovative virtual solutions tailored for modern enterprises",
      hero_cta_text: "Get Started Today",
      // about_title: "About Us",
      // company_bg_title: "Our Story",
      // company_bg_text: "Founded with a vision to revolutionize how businesses operate in the digital age, we've grown from a small startup to a leading provider of virtual solutions. Our journey is marked by continuous innovation, dedication to excellence, and a commitment to helping businesses thrive in an increasingly digital world.",
      // services_title: "Services Offered",
      // footer_company_name: "VirtualSolutions",
      // footer_tagline: "Empowering businesses through innovative virtual solutions",
      background_color: "#ffffff",
      primary_color: "#667eea",
      text_color: "#1a1a1a",
      font_family: "Poppins",
      font_size: 16
    };

    const sheetUrl = "https://script.google.com/macros/s/AKfycbzTTJdo3Ehuc7l_u0k6iiuSd74CG1_VrVxtt4ymNaGxtM1hrvLeXEB_u4tNkFoW5AaN/exec";

async function loadSheetData() {
  try {
    const response = await fetch(sheetUrl);
    const data = await response.json();
    const config = { ...defaultConfig, ...data };
    applyConfig(config);
  } catch (err) {
    console.error("Error loading Google Sheet data:", err);
    applyConfig(defaultConfig); // fallback
  }
}

function applyConfig(config) {
  // document.getElementById('hero-headline').textContent = config.hero_headline;
  // document.getElementById('hero-subheadline').textContent = config.hero_subheadline;
  // document.getElementById('hero-cta').textContent = config.hero_cta_text;
  document.getElementById('about-title').textContent = config.about_title;
  document.getElementById('about-content').textContent = config.about_content;
  document.getElementById('company-bg-title').textContent = config.company_bg_title;
  document.getElementById('company-bg-text').textContent = config.company_bg_text;
  document.getElementById('mission-text').textContent = config.mission_text;
  document.getElementById('vision-text').textContent = config.vision_text;
  
  document.getElementById('values1-title').textContent = config.values1_title;
  document.getElementById('values1-text').textContent = config.values1_text;

  document.getElementById('values2-title').textContent = config.values2_title;
  document.getElementById('values2-text').textContent = config.values2_text;

  document.getElementById('values3-title').textContent = config.values3_title;
  document.getElementById('values3-text').textContent = config.values3_text;

  document.getElementById('values4-title').textContent = config.values4_title;
  document.getElementById('values4-text').textContent = config.values4_text;

  document.getElementById('values5-title').textContent = config.values5_title;
  document.getElementById('values5-text').textContent = config.values5_text;

  document.getElementById('values6-title').textContent = config.values6_title;
  document.getElementById('values6-text').textContent = config.values6_text;
  document.getElementById('services-title').textContent = config.services_title;
  document.getElementById('service-1').textContent = config.service_1;
  document.getElementById('service-1text').textContent = config.service_1text;
  document.getElementById('service-2').textContent = config.service_2;
  document.getElementById('service-2text').textContent = config.service_2text;
  document.getElementById('service-3').textContent = config.service_3;
  document.getElementById('service-3text').textContent = config.service_3text;
  document.getElementById('leader-name1').textContent = config.leader_name1;
  document.getElementById('leader-position1').textContent = config.leader_position1;

  document.getElementById('leader-name2').textContent = config.leader_name2;
  document.getElementById('leader-position2').textContent = config.leader_position2;

  document.getElementById('leader-name3').textContent = config.leader_name3;
  document.getElementById('leader-position3').textContent = config.leader_position3;

  document.getElementById('email-1').textContent = config.email_1;
  document.getElementById('linkedin-1').textContent = config.linkedin_1;
  document.getElementById('phone-1').textContent = config.phone_1;
  // document.getElementById('footer-company-name').textContent = config.footer_company_name;
  // document.getElementById('footer-tagline').textContent = config.footer_tagline;
}

// Run after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  loadSheetData(); // initial load
  setInterval(loadSheetData, 1000); // refresh every 10 seconds
});

    async function onConfigChange(config) {
      const baseFont = config.font_family || defaultConfig.font_family;
      const baseFontStack = `${baseFont}, sans-serif`;
      const baseSize = config.font_size || defaultConfig.font_size;
      
      // Apply font family
      document.body.style.fontFamily = baseFontStack;
      
      // Apply font sizes proportionally
      const heroH1 = document.querySelector('.hero h1');
      const heroP = document.querySelector('.hero p');
      const sectionTitles = document.querySelectorAll('.section-title');
      const sectionSubtitles = document.querySelectorAll('.section-subtitle');
      
      if (heroH1) heroH1.style.fontSize = `${baseSize * 2.5}px`;
      if (heroP) heroP.style.fontSize = `${baseSize * 1.2}px`;
      sectionTitles.forEach(el => el.style.fontSize = `${baseSize * 2}px`);
      sectionSubtitles.forEach(el => el.style.fontSize = `${baseSize * 1.1}px`);
      
      // Update text content
      const heroHeadline = document.getElementById('hero-headline');
      const heroSubheadline = document.getElementById('hero-subheadline');
      const heroCta = document.getElementById('hero-cta');
      const aboutTitle = document.getElementById('about-title');
      const companyBgTitle = document.getElementById('company-bg-title');
      const companyBgText = document.getElementById('company-bg-text');
      const servicesTitle = document.getElementById('services-title');
      const footerCompanyName = document.getElementById('footer-company-name');
      const footerTagline = document.getElementById('footer-tagline');
      const logoElement = document.getElementById('logo');
      
      if (heroHeadline) heroHeadline.textContent = config.hero_headline || defaultConfig.hero_headline;
      if (heroSubheadline) heroSubheadline.textContent = config.hero_subheadline || defaultConfig.hero_subheadline;
      if (heroCta) heroCta.textContent = config.hero_cta_text || defaultConfig.hero_cta_text;
      if (aboutTitle) aboutTitle.textContent = config.about_title || defaultConfig.about_title;
      if (companyBgTitle) companyBgTitle.textContent = config.company_bg_title || defaultConfig.company_bg_title;
      if (companyBgText) companyBgText.textContent = config.company_bg_text || defaultConfig.company_bg_text;
      if (servicesTitle) servicesTitle.textContent = config.services_title || defaultConfig.services_title;
      if (footerCompanyName) footerCompanyName.textContent = config.footer_company_name || defaultConfig.footer_company_name;
      if (footerTagline) footerTagline.textContent = config.footer_tagline || defaultConfig.footer_tagline;
      if (logoElement) logoElement.textContent = config.footer_company_name || defaultConfig.footer_company_name;
    }

    function mapToCapabilities(config) {
      return {
        recolorables: [
          {
            get: () => config.background_color || defaultConfig.background_color,
            set: (value) => {
              config.background_color = value;
              if (window.elementSdk) {
                window.elementSdk.setConfig({ background_color: value });
              }
            }
          },
          {
            get: () => config.primary_color || defaultConfig.primary_color,
            set: (value) => {
              config.primary_color = value;
              if (window.elementSdk) {
                window.elementSdk.setConfig({ primary_color: value });
              }
            }
          },
          {
            get: () => config.text_color || defaultConfig.text_color,
            set: (value) => {
              config.text_color = value;
              if (window.elementSdk) {
                window.elementSdk.setConfig({ text_color: value });
              }
            }
          }
        ],
        borderables: [],
        fontEditable: {
          get: () => config.font_family || defaultConfig.font_family,
          set: (value) => {
            config.font_family = value;
            if (window.elementSdk) {
              window.elementSdk.setConfig({ font_family: value });
            }
          }
        },
        fontSizeable: {
          get: () => config.font_size || defaultConfig.font_size,
          set: (value) => {
            config.font_size = value;
            if (window.elementSdk) {
              window.elementSdk.setConfig({ font_size: value });
            }
          }
        }
      };
    }

    function mapToEditPanelValues(config) {
      return new Map([
        ["hero_headline", config.hero_headline || defaultConfig.hero_headline],
        ["hero_subheadline", config.hero_subheadline || defaultConfig.hero_subheadline],
        ["hero_cta_text", config.hero_cta_text || defaultConfig.hero_cta_text],
        ["about_title", config.about_title || defaultConfig.about_title],
        ["company_bg_title", config.company_bg_title || defaultConfig.company_bg_title],
        ["company_bg_text", config.company_bg_text || defaultConfig.company_bg_text],
        ["services_title", config.services_title || defaultConfig.services_title],
        ["footer_company_name", config.footer_company_name || defaultConfig.footer_company_name],
        ["footer_tagline", config.footer_tagline || defaultConfig.footer_tagline]
      ]);
    }

    // Initialize SDK
    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities,
        mapToEditPanelValues
      });
    }

    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navLinks = document.getElementById('nav-links');

    mobileMenuToggle.addEventListener('click', () => {
      mobileMenuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.about-card, .mvv-card, .value-card, .leader-card, #company-image, #company-text').forEach(el => {
      observer.observe(el);
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Carousel functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevButton = document.querySelector('.carousel-arrow.prev');
    const nextButton = document.querySelector('.carousel-arrow.next');
    
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
      });
      
      currentSlide = (index + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
      dots[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
      showSlide(currentSlide + 1);
    }
    
    function prevSlide() {
      showSlide(currentSlide - 1);
    }
    
    // Button controls
    if (nextButton) {
      nextButton.addEventListener('click', nextSlide);
    }
    
    if (prevButton) {
      prevButton.addEventListener('click', prevSlide);
    }
    
    // Dot controls
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => showSlide(index));
    });
    
    // Auto-play carousel
    let autoPlayInterval = setInterval(nextSlide, 4000);
    
    // Pause on hover
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    if (carouselWrapper) {
      carouselWrapper.addEventListener('mouseenter', () => {
        clearInterval(autoPlayInterval);
      });
      
      carouselWrapper.addEventListener('mouseleave', () => {
        autoPlayInterval = setInterval(nextSlide, 4000);
      });
    }

 (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9a38d40930f9bc58',t:'MTc2Mzk4NjQ5MC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
 
