# Adhi Ardiansyah - Personal Portfolio

## Project Overview

This is a **modern personal portfolio website** for Adhi Ardiansyah, a software engineer. It is a static single-page website with a dark theme, glassmorphism effects, and smooth animations.

The website showcases:
- Personal profile and introduction
- Services offered (Software Development ⭐ Popular, Social Media Management, Content Creation)
- Skills and experiences with categorized tech stack
- Portfolio of projects (grid layout with filtering)
- Contact form with email functionality

## Technology Stack

### Core Technologies
- **HTML5** - Markup language (`index.html`)
- **CSS3** - Styling with CSS variables and modern features (`style.css`)
- **JavaScript (ES6+)** - Vanilla JS for interactivity (`script.js`)

### External Libraries (CDN)
The project uses the following external libraries loaded via CDN:

| Library | Purpose | URL |
|---------|---------|-----|
| Font Awesome 6 | Icons | `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css` |
| AOS | Scroll animations | `https://unpkg.com/aos@2.3.1/dist/aos.css` |
| SweetAlert2 11 | Beautiful alert/popup dialogs | `https://cdn.jsdelivr.net/npm/sweetalert2@11` |
| SMTP.js v3 | Email sending functionality (with fallback) | `https://smtpjs.com/v3/smtp.js` |

### Google Fonts
- **Inter** - Used for body text and UI elements (weights: 300, 400, 500, 600, 700, 800)
- **Playfair Display** - Used for display headings (weights: 600, 700)

## Project Structure

```
/
├── index.html              # Main HTML file (single page application)
├── style.css               # All styles and responsive design
├── script.js               # All JavaScript functionality
├── images/                 # Static image assets
│   ├── icon.png            # Website favicon
│   ├── banner.jpg          # Hero section background
│   ├── profile-1.png       # Profile image (About section)
│   ├── profile-2.jpg       # Profile image (Hero section)
│   ├── effect.png          # Visual effect asset
│   └── [project logos]     # Portfolio project thumbnails
│       ├── pose.png
│       ├── ky.png
│       ├── memo-mentor.png
│       ├── invera.png
│       ├── tap.png
│       ├── hisya.png
│       ├── lauretta.png
│       ├── aladinmall.png
│       ├── bpn.png
│       ├── plo.png
│       ├── sebulanmenjadi.png
│       └── beglobal.png
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Actions deployment workflow
```

## Page Sections

The website consists of 6 main sections (all in `index.html`):

1. **Home (`#home`)** - Hero section with animated typing text, floating cards, and call-to-action buttons
2. **About (`#about`)** - Personal bio with profile image, experience badge, and CV download link
3. **Services (`#services`)** - 3 service cards with Software Development as featured/popular
4. **Skills (`#skills`)** - Animated skill bars and categorized tech stack
5. **Portfolio (`#portfolio`)** - Filterable grid showcasing 13 projects with descriptions and links
6. **Contact (`#contact`)** - Contact information and email form with fallback to mailto

## Key Features

### UI/UX Features
- **Modern Dark Theme** - Indigo, cyan, and rose accent colors on dark backgrounds
- **Glassmorphism Effects** - Frosted glass navbar and card effects
- **Scroll Progress Bar** - Visual indicator at the top of the page
- **Responsive Design** - Mobile-first approach with breakpoints at 1024px, 768px, and 480px
- **Sticky Navigation** - Navbar with glassmorphism effect on scroll
- **Smooth Scrolling** - Custom scroll behavior for navigation links
- **Scroll Animations** - AOS library for fade-in animations
- **Preloader** - Animated loading spinner displayed while page loads
- **Scroll-to-Top Button** - Appears after scrolling 500px
- **Mobile Hamburger Menu** - Toggle menu for mobile devices

### Interactive Elements
- **Typing Animation** - Vanilla JS auto-typing text effect for role descriptions
- **Portfolio Filtering** - Filter projects by category (All, Web App, Mobile, Dashboard)
- **Skill Bar Animations** - Animated progress bars triggered on scroll
- **Contact Form** - Functional form with SMTP.js and mailto fallback
- **Hover Effects** - CSS transitions on cards, buttons, and links
- **Parallax Effects** - Floating gradient orbs in hero section

## Deployment Process

### GitHub Actions Workflow (`.github/workflows/deploy.yml`)

The project uses GitHub Actions for automated deployment:

```yaml
Trigger: Push to master branch
Action: FTP deployment to shared hosting
Server: m3119003.mhs.d3tiuns.com
Target Directory: public_html/
```

### Deployment Secrets
The following secrets must be configured in GitHub repository settings:
- `FTP_USERNAME` - FTP server username
- `FTP_PASSWORD` - FTP server password

### Manual Deployment
Since this is a static website, you can also deploy manually by:
1. Copying all files to the web server root
2. Ensuring the `images/` folder is accessible
3. No build step required

## Code Style Guidelines

### HTML
- Use semantic HTML5 elements
- All sections have IDs for navigation targeting
- Comments mark the beginning of each major section
- External scripts loaded at the end of `<body>` for performance

### CSS
- **Color Scheme**: 
  - Primary: `#6366f1` (Indigo)
  - Secondary: `#06b6d4` (Cyan)
  - Accent: `#f43f5e` (Rose)
  - Background Primary: `#0f172a` (Dark slate)
  - Background Secondary: `#1e293b`
- **CSS Variables**: All colors and spacing defined in `:root`
- **Naming Convention**: Semantic class names (`.section-name--element`)
- **Responsive Breakpoints**: Organized from large to small screens

### JavaScript
- Uses vanilla JavaScript (ES6+) - no jQuery
- Modular functions for each feature
- Intersection Observer for scroll animations
- Event handlers use modern syntax
- Animation timing: 0.8s for scroll animations

## Tech Stack Details

### Programming Languages
- Go, PHP, JavaScript, TypeScript, HTML, CSS

### Frameworks & Libraries
- Gin, Laravel, Node.js, Express.js, jQuery, React, Bootstrap, Tailwind CSS

### Databases
- MySQL, PostgreSQL, MongoDB, DynamoDB, Redis, Elasticsearch

### DevOps & Tools
- Git, Docker, Google Pub/Sub

## Important Implementation Details

### Contact Form Configuration
The contact form has two modes:

1. **Primary (SMTP.js)**: Uses ElasticEmail
   - **Host**: `smtp.elasticemail.com`
   - **Username**: `adhiardiansyah23@gmail.com`
   - Falls back to mailto if SMTP.js fails

2. **Fallback (mailto:)**: Opens user's default email client
   - Pre-fills subject and body with form data
   - No server required

⚠️ **Security Note**: Consider using a form backend service like Web3Forms or Formspree for production.

### Scroll Animation Logic
Uses AOS (Animate On Scroll) library:
```javascript
AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true
});
```

### Skill Bars Animation
Uses Intersection Observer for performance:
```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate skill bar width
        }
    });
});
```

### Portfolio Filtering
Filter buttons toggle visibility of project cards:
```javascript
// Filter categories: all, web, mobile, dashboard
portfolioCards.forEach(card => {
    const categories = card.getAttribute('data-category');
    // Show/hide based on selected filter
});
```

## Browser Compatibility

The website uses modern CSS features and ES6 JavaScript. Supported browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Maintenance Notes

### Adding New Portfolio Items
To add a new portfolio item, add a new `.portfolio-card` div inside the `.portfolio-grid` container:
```html
<div class="portfolio-card" data-category="web" data-aos="fade-up">
    <div class="portfolio-image">
        <img src="images/project.png" alt="Project Name">
        <div class="portfolio-overlay">
            <div class="portfolio-links">
                <a href="https://project-url.com" target="_blank" class="portfolio-link">
                    <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
    </div>
    <div class="portfolio-info">
        <span class="portfolio-category">Category</span>
        <h3 class="portfolio-title">Project Name</h3>
        <p class="portfolio-description">Project description...</p>
    </div>
</div>
```

### Updating Tech Stack
Edit the tech stack in `index.html` under the Skills section. Categories are:
- Languages
- Frameworks
- Databases
- DevOps & Tools

### Updating Contact Information
Edit the contact section in `index.html`:
- Email address
- Location
- Social media links

### Changing Colors
The primary colors are defined as CSS variables in `:root`. To change them, update:
```css
:root {
  --primary: #6366f1;
  --secondary: #06b6d4;
  --accent: #f43f5e;
}
```

## Testing Instructions

Since this is a static website with no build process:

1. **Local Testing**: Open `index.html` directly in a browser
2. **Form Testing**: Submit the contact form (check mailto fallback if SMTP fails)
3. **Responsive Testing**: Use browser DevTools to test at various screen widths
4. **Cross-browser Testing**: Test in Chrome, Firefox, Safari, and Edge

## Security Considerations

1. **SMTP Credentials**: If using SMTP.js, credentials are exposed in client-side JavaScript. Alternatives:
   - Web3Forms (free, 250 submissions/month)
   - Formspree (free, 50 submissions/month)
   - Netlify Forms (if hosting on Netlify)

2. **No Sensitive Data**: The website contains only public information

3. **External Dependencies**: All CDN links use HTTPS

---

*Last updated: 2026-02-19*
