import './style.css'
import './icons'
import AOS from 'aos'

AOS.init({
    duration: 800, // Animation duration
    once: true, // Whether animation should happen only once - while scrolling down
    offset: 50, // Offset (in px) from the original trigger point
    disable: new URLSearchParams(window.location.search).get('disableaos') !== null,
});
