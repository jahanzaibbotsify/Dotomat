export const initializeAnimations = () => {
  // Reveal animations on scroll
  const revealElements = document.querySelectorAll('.reveal-element');
  
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    
    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  };
  
  // Run once to reveal visible elements
  revealOnScroll();
  
  // Listen for scroll events
  window.addEventListener('scroll', revealOnScroll);
  
  return () => {
    window.removeEventListener('scroll', revealOnScroll);
  };
};

// Export any other animation utilities here