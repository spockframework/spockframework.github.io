import './style.css'
import './icons'
import AOS from 'aos'

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const disableAosByQuery = new URLSearchParams(window.location.search).get('disableaos') !== null;

AOS.init({
    duration: 800, // Animation duration
    once: true, // Whether animation should happen only once - while scrolling down
    offset: 50, // Offset (in px) from the original trigger point
    disable: prefersReducedMotion || disableAosByQuery,
});
