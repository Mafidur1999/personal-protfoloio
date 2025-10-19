
// Auto-update year in footer
// -------------------------
document.getElementById('year').textContent = new Date().getFullYear();



//  Contact form submission

const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission

    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    alert(`Thank you ${name}! Your message has been sent successfully.`);
    this.reset(); // Clear the form
  });
}



// Smooth scrolling for nav links

const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Scroll reveal effect

const sections = document.querySelectorAll('section');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < windowHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = 'translateY(0)';
      sec.style.transition = 'all 1s ease';
    }
  });
};

// Initial setup for sections
sections.forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = 'translateY(50px)';
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);



// Projects cards subtle scale animation

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.03)';
    card.style.transition = 'transform 0.3s ease';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});


//  Floating social icons

const socialContainer = document.createElement('div');
socialContainer.className = 'floating-socials';
socialContainer.innerHTML = `
  <a href="https://github.com/Mafidur1999" target="_blank">🐙</a>
  <a href="mailto:maffidurhasan@gmail.com">✉️</a>
  <a href="https://www.linkedin.com/in/your-linkedin" target="_blank">🔗</a>
`;
document.body.appendChild(socialContainer);

// CSS for floating socials via JS
const style = document.createElement('style');
style.innerHTML = `
.floating-socials {
  position: fixed;
  top: 50%;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transform: translateY(-50%);
  z-index: 100;
}
.floating-socials a {
  font-size: 1.6rem;
  color: #0077cc;
  transition: transform 0.2s, color 0.2s;
}
.floating-socials a:hover {
  transform: scale(1.3);
  color: #005fa3;
}
`;
document.head.appendChild(style);
