import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faBook, faCode, faLaptopCode, faComments, faCommentDots} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faStackOverflow, faJava, faXTwitter, faMastodon, faBluesky } from '@fortawesome/free-brands-svg-icons';

// Add icons to the library
library.add(faGithub, faStackOverflow, faJava, faXTwitter, faMastodon, faBluesky, faBook, faCode, faLaptopCode, faComments, faCommentDots);

// Watch for <i> tags and replace with SVG
dom.watch();
