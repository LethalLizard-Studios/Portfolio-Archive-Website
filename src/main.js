import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/about.css';
import '../styles/components/featured.css';
import '../styles/components/work.css';
import '../styles/components/contact.css';
import '../styles/components/footer.css';
import '../styles/components/mobile-nav.css';
import '../styles/utils.css';

import mobileNav from './utils/mobile-nav';
import darkMode from './utils/dark-mode';
import lazyLoading from './utils/lazy-loading';

mobileNav();
darkMode();
lazyLoading();

// Add padding to all sections in the index page
function addPaddingToSections() {
  const sections = document.querySelectorAll('section');
  if (sections.length > 0) {
    sections.forEach(section => {
      section.style.paddingLeft = 'clamp(3rem, 12vw, 7.5rem)';
      section.style.paddingRight = 'clamp(3rem, 12vw, 7.5rem)';
    });
  }
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  addPaddingToSections();
  // ... any other existing code that runs on DOMContentLoaded
});
