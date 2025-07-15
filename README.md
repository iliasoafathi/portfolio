# Personal Portfolio

A modern, responsive portfolio website built with vanilla JavaScript, HTML, and CSS. Features a beautiful design with smooth animations and mobile-friendly layout.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Interactive Navigation**: Smooth scrolling and mobile hamburger menu
- **Skills Section**: Visual skill bars with progress indicators
- **Projects Showcase**: Beautiful project cards with hover effects
- **Contact Section**: Easy-to-use contact links and social media integration
- **Performance Optimized**: Fast loading with optimized assets

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **Vanilla JavaScript**: No framework dependencies
- **Font Awesome**: Icons for skills and social links
- **Vite**: Build tool for development

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎨 Customization

### Personal Information
Edit the `portfolioData` object in `src/main.js` to customize:

- **Name and Title**: Update your name and professional title
- **Description**: Change the hero section description
- **About Text**: Modify the about section content
- **Skills**: Add or modify your skills with proficiency levels
- **Projects**: Update project details, images, and links
- **Contact Information**: Add your real contact details

### Styling
The CSS is organized into sections for easy customization:

- **Colors**: Update the color scheme in the CSS variables
- **Fonts**: Change the font family in the body selector
- **Layout**: Modify grid layouts and spacing
- **Animations**: Adjust animation timings and effects

### Adding New Sections
To add new sections:

1. Create a new function in `src/main.js` (e.g., `createExperience()`)
2. Add the section to the `initPortfolio()` function
3. Add corresponding CSS styles in `src/style.css`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: 767px and below

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
1. Build the project: `npm run build`
2. Push the `dist` folder to your repository
3. Enable GitHub Pages in your repository settings

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 📄 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── package.json        # Dependencies and scripts
├── src/
│   ├── main.js        # JavaScript logic and data
│   └── style.css      # All styles and animations
├── public/            # Static assets
└── README.md         # This file
```

## 🎯 Key Features Explained

### Navigation
- Fixed navigation bar with smooth scrolling
- Mobile hamburger menu with animations
- Active link highlighting

### Hero Section
- Gradient background with animated text
- Call-to-action buttons
- Professional avatar placeholder

### Skills Section
- Visual skill bars with progress indicators
- Font Awesome icons for each skill
- Hover effects and animations

### Projects Section
- Card-based layout with hover effects
- Technology tags for each project
- Responsive grid layout

### Contact Section
- Social media links with icons
- Email integration
- Professional contact information

## 🔧 Development

### Adding New Skills
```javascript
// In src/main.js, add to the skills array:
{ name: "Your Skill", icon: "fab fa-icon-name", level: 85 }
```

### Adding New Projects
```javascript
// In src/main.js, add to the projects array:
{
  title: "Project Name",
  description: "Project description",
  image: "path/to/image.jpg",
  technologies: ["Tech1", "Tech2"],
  link: "https://project-url.com"
}
```

## 📞 Support

If you have any questions or need help customizing your portfolio, feel free to reach out!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding! 🎉** 