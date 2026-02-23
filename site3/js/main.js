(function () {
  "use strict";

  // Hero slider
  var slides = document.querySelectorAll(".hero-slide");
  var heroTitle = document.getElementById("heroTitle");
  var heroSubtitle = document.getElementById("heroSubtitle");
  var heroDots = document.getElementById("heroDots");
  var heroTitles = [
    "Becoming the Best Steelmaker!",
    "Industrial Strength, Delivered",
    "Steel That Builds the Future",
  ];
  var heroSubtitles = [
    "Quality steel solutions for industry and construction",
    "From factory to your project — on time, every time",
    "Innovation and reliability in every product",
  ];

  if (slides.length && heroDots) {
    var currentSlide = 0;
    slides.forEach(function (_, i) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("aria-label", "Slide " + (i + 1));
      if (i === 0) btn.classList.add("active");
      btn.addEventListener("click", function () {
        goToSlide(i);
      });
      heroDots.appendChild(btn);
    });
    var dotBtns = heroDots.querySelectorAll("button");

    function goToSlide(i) {
      currentSlide = i;
      slides.forEach(function (s, j) {
        s.classList.toggle("active", j === i);
      });
      dotBtns.forEach(function (b, j) {
        b.classList.toggle("active", j === i);
      });
      if (heroTitle) heroTitle.textContent = heroTitles[i] || heroTitles[0];
      if (heroSubtitle) heroSubtitle.textContent = heroSubtitles[i] || heroSubtitles[0];
    }

    setInterval(function () {
      currentSlide = (currentSlide + 1) % slides.length;
      goToSlide(currentSlide);
    }, 5000);
  }

  // Mobile nav
  var navToggle = document.getElementById("navToggle");
  var navMobile = document.getElementById("navMobile");
  if (navToggle && navMobile) {
    navToggle.addEventListener("click", function () {
      navMobile.classList.toggle("open");
    });
    navMobile.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        navMobile.classList.remove("open");
      });
    });
  }

  // Countdown
  var cdDays = document.getElementById("cdDays");
  var cdHours = document.getElementById("cdHours");
  var cdMins = document.getElementById("cdMins");
  var cdSecs = document.getElementById("cdSecs");
  if (cdDays && cdHours && cdMins && cdSecs) {
    var end = new Date();
    end.setDate(end.getDate() + 14);
    function pad(n) {
      return n < 10 ? "0" + n : String(n);
    }
    function updateCountdown() {
      var now = new Date();
      var d = Math.max(0, end - now);
      cdDays.textContent = Math.floor(d / 86400000);
      cdHours.textContent = pad(Math.floor((d % 86400000) / 3600000));
      cdMins.textContent = pad(Math.floor((d % 3600000) / 60000));
      cdSecs.textContent = pad(Math.floor((d % 60000) / 1000));
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // Testimonials
  var testimonials = [
    {
      text: "Georgian Steel delivered our structural order on time and the quality exceeded expectations. We will definitely work with them again.",
      author: "Giorgi M.",
      role: "Project Manager, Tbilisi Construction Co.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    },
    {
      text: "Professional team, clear communication, and competitive pricing. Our go-to supplier for rebar and beams.",
      author: "Ana S.",
      role: "Procurement Director",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80",
    },
    {
      text: "The technical support helped us choose the right grades and dimensions. Saved us time and cost.",
      author: "Levan K.",
      role: "Engineer, Industrial Plant",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&q=80",
    },
  ];
  var testimonialText = document.getElementById("testimonialText");
  var testimonialAuthor = document.getElementById("testimonialAuthor");
  var testimonialRole = document.getElementById("testimonialRole");
  var testimonialAvatar = document.getElementById("testimonialAvatar");
  var testimonialDots = document.getElementById("testimonialDots");
  if (testimonialText && testimonialDots) {
    var tIndex = 0;
    testimonials.forEach(function (_, i) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("aria-label", "Testimonial " + (i + 1));
      if (i === 0) btn.classList.add("active");
      btn.addEventListener("click", function () {
        tIndex = i;
        showTestimonial(i);
      });
      testimonialDots.appendChild(btn);
    });
    var tDotBtns = testimonialDots.querySelectorAll("button");
    function showTestimonial(i) {
      var t = testimonials[i];
      testimonialText.textContent = t.text;
      if (testimonialAuthor) testimonialAuthor.textContent = t.author;
      if (testimonialRole) testimonialRole.textContent = t.role;
      if (testimonialAvatar) testimonialAvatar.src = t.avatar;
      tDotBtns.forEach(function (b, j) {
        b.classList.toggle("active", j === i);
      });
    }
    setInterval(function () {
      tIndex = (tIndex + 1) % testimonials.length;
      showTestimonial(tIndex);
    }, 6000);
  }

  // Scroll to top
  var scrollTopBtn = document.getElementById("scrollTop");
  if (scrollTopBtn) {
    function onScroll() {
      scrollTopBtn.classList.toggle("visible", window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll);
    scrollTopBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Newsletter form
  var newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = newsletterForm.querySelector('input[type="email"]');
      if (email && email.value.trim()) {
        alert("Thank you for subscribing!");
        email.value = "";
      }
    });
  }
})();
