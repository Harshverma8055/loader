document.addEventListener('DOMContentLoaded', () => {
  // 1. Header Scroll Effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Burger Menu Toggle (Mobile Drawer)
  const burgerMenu = document.getElementById('burger-menu');
  const navMobile = document.getElementById('nav-mobile');
  const navMobileLinks = document.querySelectorAll('.nav-mobile-link');

  if (burgerMenu && navMobile) {
    burgerMenu.addEventListener('click', () => {
      burgerMenu.classList.toggle('active');
      navMobile.classList.toggle('active');
      // Prevent scrolling when drawer is open
      document.body.style.overflow = navMobile.classList.contains('active') ? 'hidden' : '';
    });

    navMobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        navMobile.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // 3. FAQ Accordion Toggle
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const answer = item.querySelector('.faq-answer');
      const isActive = item.classList.contains('active');

      // Close all other FAQs
      document.querySelectorAll('.faq-item').forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-answer').style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        // Set dynamic max-height to trigger CSS transition smoothly
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  // 4. Products Tab Filtering
  const tabBtns = document.querySelectorAll('.tab-btn');
  const productCards = document.querySelectorAll('.product-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');

      // Update active button state
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter product list
      productCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.style.display = 'flex';
          card.style.animation = 'fade-in 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. Lightweight Scroll Reveal using IntersectionObserver
  const revealElements = document.querySelectorAll('.product-card, .quality-card, .app-card, .review-card, .stat-item, .reveal-on-scroll, .section-header');
  
  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealCallback, {
    root: null,
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)';
    revealObserver.observe(el);
  });

  // 6. Preloader and Page Transitions
  const preloader = document.getElementById('page-preloader');
  if (preloader) {
    // Keep loader visible for brief moment for high fidelity feel
    setTimeout(() => {
      preloader.classList.add('fade-out');
      document.body.classList.add('page-loaded');
    }, 550);
  } else {
    document.body.classList.add('page-loaded');
  }

  // Handle smooth page exits
  document.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.endsWith('.html') && !link.getAttribute('target') && href !== '#') {
      link.addEventListener('click', (e) => {
        const targetUrl = link.href;
        if (targetUrl) {
          e.preventDefault();
          document.body.classList.add('page-exiting');
          setTimeout(() => {
            window.location.href = targetUrl;
          }, 350);
        }
      });
    }
  });

  // 7. Hero Auto-scrolling Background Slideshow
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length > 0) {
    let currentSlide = 0;
    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 6000); // Transitions every 6 seconds
  }

  // 8. Subpage Auto-scrolling Background Slideshow
  const subpageSlides = document.querySelectorAll('.subpage-hero-slide');
  if (subpageSlides.length > 0) {
    let currentSubSlide = 0;
    setInterval(() => {
      subpageSlides[currentSubSlide].classList.remove('active');
      currentSubSlide = (currentSubSlide + 1) % subpageSlides.length;
      subpageSlides[currentSubSlide].classList.add('active');
    }, 6000); // Transitions every 6 seconds
  }
});
