// =============================
// GEORGIAN STEEL — SCRIPT.JS
// =============================

document.addEventListener('DOMContentLoaded', () => {

  /* ========================
     HERO SLIDER
  ======================== */
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.dot');
  let current  = 0;
  let autoTimer;

  function showSlide(idx) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (idx + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function startAuto() { autoTimer = setInterval(() => showSlide(current + 1), 5000); }
  function stopAuto()  { clearInterval(autoTimer); }

  document.getElementById('heroNext')?.addEventListener('click', () => { stopAuto(); showSlide(current + 1); startAuto(); });
  document.getElementById('heroPrev')?.addEventListener('click', () => { stopAuto(); showSlide(current - 1); startAuto(); });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      stopAuto();
      showSlide(parseInt(dot.dataset.slide));
      startAuto();
    });
  });

  startAuto();

  /* ========================
     STICKY HEADER
  ======================== */
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* ========================
     HAMBURGER MENU
  ======================== */
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      nav.classList.remove('open');
    });
  });

  // Active nav on scroll
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-30% 0px -65% 0px' });

  sections.forEach(sec => observer.observe(sec));

  /* ========================
     COUNTDOWN TIMER
  ======================== */
  function getNextSaleDate() {
    const now = new Date();
    const target = new Date(now);
    target.setDate(now.getDate() + 14);
    target.setHours(9, 0, 0, 0);
    return target;
  }

  const targetDate = getNextSaleDate();

  function updateCountdown() {
    const now   = new Date();
    const diff  = targetDate - now;

    if (diff <= 0) return;

    const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs  = Math.floor((diff % (1000 * 60)) / 1000);

    const pad = n => String(n).padStart(2, '0');
    document.getElementById('cDays').textContent  = pad(days);
    document.getElementById('cHours').textContent = pad(hours);
    document.getElementById('cMins').textContent  = pad(mins);
    document.getElementById('cSecs').textContent  = pad(secs);
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* ========================
     TESTIMONIALS SLIDER
  ======================== */
  const testis = document.querySelectorAll('.testimonial');
  const tdots  = document.querySelectorAll('.tdot');
  let tCurrent = 0;

  function showTesti(idx) {
    testis[tCurrent].classList.remove('active');
    tdots[tCurrent].classList.remove('active');
    tCurrent = (idx + testis.length) % testis.length;
    testis[tCurrent].classList.add('active');
    tdots[tCurrent].classList.add('active');
  }

  tdots.forEach(td => {
    td.addEventListener('click', () => showTesti(parseInt(td.dataset.t)));
  });

  setInterval(() => showTesti(tCurrent + 1), 5000);

  /* ========================
     FADE-IN ANIMATIONS
  ======================== */
  const fadeEls = document.querySelectorAll('.fade-in');

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger delay based on position in grid
        const siblings = Array.from(entry.target.parentElement.children);
        const idx = siblings.indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, Math.min(idx * 80, 400));
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  fadeEls.forEach(el => fadeObserver.observe(el));

  /* ========================
     SCROLL TO TOP
  ======================== */
  const scrollTopBtn = document.getElementById('scrollTop');

  window.addEventListener('scroll', () => {
    scrollTopBtn?.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ========================
     CONTACT FORM
  ======================== */
  window.handleContactForm = function(e) {
    e.preventDefault();
    showToast('✅ შეტყობინება გაგზავნილია! მადლობა!');
    e.target.reset();
  };

  /* ========================
     NEWSLETTER FORM
  ======================== */
  document.querySelector('.newsletter-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    if (email) {
      showToast('📧 გამოწერა წარმატებით შესრულდა!');
      e.target.reset();
    }
  });

  /* ========================
     TOAST NOTIFICATION
  ======================== */
  function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
  }

  /* ========================
     SMOOTH ANCHOR SCROLL
  ======================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const headerH = header.offsetHeight;
        const top = target.getBoundingClientRect().top + window.scrollY - headerH - 20;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ========================
     FLOAT BUTTONS
  ======================== */
  document.querySelectorAll('.float-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('🔧 ეს ფუნქცია მალე დაემატება!');
    });
  });

  document.querySelector('.chat-btn')?.addEventListener('click', () => {
    showToast('💬 მხარდაჭერის ჩატი მალე ხელმისაწვდომი იქნება!');
  });

  /* ========================
     COUNTER ANIMATION
  ======================== */
  const statNums = document.querySelectorAll('.stat-num');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const finalText = el.textContent;
        const finalNum = parseInt(finalText.replace(/\D/g, ''));
        const suffix = finalText.replace(/[\d]/g, '');

        let start = 0;
        const duration = 1500;
        const step = finalNum / (duration / 16);

        const timer = setInterval(() => {
          start = Math.min(start + step, finalNum);
          el.textContent = Math.floor(start) + suffix;
          if (start >= finalNum) clearInterval(timer);
        }, 16);

        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statNums.forEach(el => counterObserver.observe(el));

  /* ========================
     PARALLAX HERO
  ======================== */
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroSlides = document.querySelectorAll('.hero-slide.active');
    heroSlides.forEach(slide => {
      slide.style.transform = `translateY(${scrolled * 0.35}px)`;
    });
  }, { passive: true });

  /* ========================
     KEYBOARD ACCESSIBILITY
  ======================== */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      hamburger.classList.remove('open');
      nav.classList.remove('open');
    }
  });

});
