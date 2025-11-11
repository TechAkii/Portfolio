    let lastScrollTop = 0;
    let scrollTimeout;
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Navbar hide/show on scroll & scrollbar visibility
    window.addEventListener('scroll', function () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Show scrollbar while scrolling
      document.body.classList.add('scrolling');
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        document.body.classList.remove('scrolling');
      }, 1500);

      if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down - hide navbar
        navbar.classList.add('hidden');
      } else {
        // Scrolling up - show navbar
        navbar.classList.remove('hidden');
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

      // Update active nav link
      updateActiveLink();
    }, false);

    // Update active nav link based on scroll position
    function updateActiveLink() {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.pageYOffset + 150;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + section.id) {
              link.classList.add('active');
            }
          });
        }
      });
    }

    // Smooth scroll offset for fixed navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Typing animation
    const typingTexts = [
      'Full Stack Developer',
      'Web Developer',
      'Tech Enthusiast',
      'Always Learning',
      'Problem Solver'
    ];
    let textIndex = 0;
    const typingElement = document.getElementById('typingText');

    function updateTypingText() {
      typingElement.textContent = typingTexts[textIndex];
      textIndex = (textIndex + 1) % typingTexts.length;
    }

    setInterval(updateTypingText, 3000);