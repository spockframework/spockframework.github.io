import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faBook, faCode, faLaptopCode, faComments, faReceipt, faMasksTheater, faVialCircleCheck, faTableCells, faStar, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faStackOverflow, faJava, faXTwitter, faMastodon, faBluesky, faGitter } from '@fortawesome/free-brands-svg-icons';

// Add icons to the library
library.add(faGithub, faGitter, faStackOverflow, faJava, faXTwitter, faMastodon, faBluesky, faBook, faCode, faLaptopCode, faComments, faReceipt, faMasksTheater, faVialCircleCheck, faTableCells, faStar, faCircleCheck);

// Watch for <i> tags and replace with SVG
dom.watch();
