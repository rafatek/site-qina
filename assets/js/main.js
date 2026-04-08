/* ========================================
   QINA DESIGN — main.js
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ── CURSOR CUSTOM ──────────────────────
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');

  if (cursor && follower) {
    let mx = 0, my = 0;
    let fx = 0, fy = 0;

    document.addEventListener('mousemove', e => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top  = my + 'px';
    });

    (function animate() {
      fx += (mx - fx) * 0.12;
      fy += (my - fy) * 0.12;
      follower.style.left = fx + 'px';
      follower.style.top  = fy + 'px';
      requestAnimationFrame(animate);
    })();

    const hoverEls = document.querySelectorAll('a, button, .projeto-card, .servico-card, .pillar');
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }

  // ── NAV SCROLL ────────────────────────
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // ── MOBILE MENU ───────────────────────
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('.mobile-menu__link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ── SCROLL REVEAL ─────────────────────
  const revealEls = document.querySelectorAll('.reveal-up, .reveal-line');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -150px 0px' });

  revealEls.forEach(el => observer.observe(el));

  // Trigger hero immediately
  setTimeout(() => {
    document.querySelectorAll('.hero .reveal-up, .hero .reveal-line').forEach(el => {
      el.classList.add('visible');
    });
  }, 100);

  // ── PARALLAX HERO ─────────────────────
  const heroBg = document.querySelector('.hero__bg-img');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      heroBg.style.transform = `translateY(${scrollY * 0.3}px)`;
    }, { passive: true });
  }

  // ── DEPOIMENTOS SLIDER ────────────────
  const cards = document.querySelectorAll('.depo-card');
  const dots  = document.querySelectorAll('.dot');
  let current = 0;
  let autoplay;

  function goTo(idx) {
    cards[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = idx;
    cards[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function next() { goTo((current + 1) % cards.length); }

  function startAutoplay() {
    autoplay = setInterval(next, 5000);
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      clearInterval(autoplay);
      goTo(parseInt(dot.dataset.idx));
      startAutoplay();
    });
  });

  startAutoplay();



  // ── PORTFOLIO FILTER ──────────────────
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.projetos__grid .projeto-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Atualiza botões
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card, index) => {
        const category = card.getAttribute('data-category');
        
        if (filterValue === 'all' || filterValue === category) {
          card.classList.remove('hidden');
          // Recria o efeito de revelação (fade in/up)
          card.classList.remove('visible');
          setTimeout(() => {
            card.classList.add('visible');
          }, 50 * index); // stagger suave
        } else {
          card.classList.add('hidden');
          card.classList.remove('visible');
        }
      });
    });
  });

  // ── SMOOTH ANCHOR SCROLL ──────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── ACTIVE NAV LINK on scroll ─────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link[href^="#"]');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => sectionObserver.observe(s));

  // ── PROGRESSIVE IMAGE LOADING ─────────
  const lazyImages = document.querySelectorAll('.projeto-card__photo');
  lazyImages.forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => {
        img.classList.add('loaded');
      });
      img.addEventListener('error', () => {
        img.classList.add('loaded'); // Evita tela travada em skeletons caso dê erro no load da img
      });
    }
  });

});
