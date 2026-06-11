/**
 * Portfolio — main interactions
 */

(function () {
  'use strict';

  const GITHUB_USERNAME = ''; // Set your GitHub username here, e.g. 'daniil-skvyrskyi'
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  // --- GitHub links ---
  if (GITHUB_USERNAME) {
    const githubUrl = `https://github.com/${GITHUB_USERNAME}`;
    document.querySelectorAll('#github-link, #github-contact').forEach((el) => {
      el.href = githubUrl;
    });
  }

  // --- Missing-image fallback: remove broken imgs so styled placeholders show ---
  document.querySelectorAll('.project-card__image img, .hero__portrait-img').forEach((img) => {
    const drop = () => img.remove();
    img.addEventListener('error', drop);
    if (img.complete && img.naturalWidth === 0) drop();
  });

  // --- Parallax background ---
  const bgTrack = document.getElementById('bg-parallax-track');
  let parallaxTarget = 0;
  let parallaxCurrent = 0;

  function onParallaxScroll() {
    parallaxTarget = window.scrollY * 0.38;
  }

  function animateParallax() {
    if (bgTrack && !prefersReducedMotion) {
      parallaxCurrent += (parallaxTarget - parallaxCurrent) * 0.06;
      bgTrack.style.transform = `translate3d(0, ${parallaxCurrent}px, 0)`;
    }
    requestAnimationFrame(animateParallax);
  }

  window.addEventListener('scroll', onParallaxScroll, { passive: true });
  onParallaxScroll();
  animateParallax();

  // --- Custom cursor ---
  const cursor = document.getElementById('cursor');
  const cursorDot = cursor?.querySelector('.cursor__dot');
  const cursorRing = cursor?.querySelector('.cursor__ring');

  if (finePointer && cursor && !prefersReducedMotion) {
    document.body.classList.add('custom-cursor');

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorDot) {
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
      }
    });

    function animateCursor() {
      ringX += (mouseX - ringX) * 0.14;
      ringY += (mouseY - ringY) * 0.14;
      if (cursorRing) {
        cursorRing.style.left = `${ringX}px`;
        cursorRing.style.top = `${ringY}px`;
      }
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    const hoverTargets = 'a, button, .btn, .skill-chip, .stat-card, .project-card, .contact-link, .nav__toggle';
    document.querySelectorAll(hoverTargets).forEach((el) => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });

    document.addEventListener('mousedown', () => document.body.classList.add('cursor-click'));
    document.addEventListener('mouseup', () => document.body.classList.remove('cursor-click'));
  }

  // --- Header scroll state ---
  const header = document.getElementById('header');

  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle('header--scrolled', y > 40);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- Mobile nav ---
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // --- Scroll reveal ---
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('visible'));
  }

  // --- Active nav link on scroll ---
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = navLinks.querySelectorAll('a[href^="#"]');

  function setActiveNav() {
    const scrollPos = window.scrollY + 120;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navAnchors.forEach((a) => {
          a.style.color =
            a.getAttribute('href') === `#${id}`
              ? 'var(--text-primary)'
              : '';
        });
      }
    });
  }

  window.addEventListener('scroll', setActiveNav, { passive: true });

  // --- Stat cards pop on first view ---
  const statCards = document.querySelectorAll('.stat-card__value');
  let statsAnimated = false;

  function animateStats() {
    if (statsAnimated) return;

    const heroStats = document.querySelector('.hero__stats');
    if (!heroStats) return;

    const rect = heroStats.getBoundingClientRect();
    if (rect.top > window.innerHeight || rect.bottom < 0) return;

    statsAnimated = true;
    statCards.forEach((el, i) => {
      el.style.transition = `transform 0.5s ease ${i * 0.1}s`;
      el.style.transform = 'scale(1.05)';
      setTimeout(() => {
        el.style.transform = 'scale(1)';
      }, 500 + i * 100);
    });
  }

  window.addEventListener('scroll', animateStats, { passive: true });
  animateStats();
})();
