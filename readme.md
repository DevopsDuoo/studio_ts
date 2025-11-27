# Architect Studio Website

A modern, responsive architecture studio website built with React, TypeScript, and Vite. Features smooth animations, elegant design, and a comprehensive showcase of architectural services.

## Features

- 🎨 **Modern Design**: Clean and professional design with elegant typography
- ⚡ **Fast Performance**: Built with Vite for lightning-fast development and builds
- 🎭 **Smooth Animations**: Framer Motion for fluid page transitions and interactions
- 📱 **Fully Responsive**: Optimized for all devices from mobile to desktop
- 🎯 **TypeScript**: Type-safe code for better development experience
- 🧭 **Easy Navigation**: Intuitive navigation with React Router
- 📧 **Contact Form**: Interactive contact form for client inquiries

## Pages

- **Home**: Hero section with animated stats, services overview, and CTA
- **About**: Company story, values, and team information
- **Services**: Detailed architecture services with features
- **Portfolio**: Project showcase (coming soon)
- **Contact**: Contact form with company information

## Tech Stack

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Vite**: Next-generation frontend tooling
- **React Router**: Client-side routing
- **Framer Motion**: Animation library
- **React Icons**: Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project folder:
\`\`\`bash
cd studio_ts
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open your browser and visit:
\`\`\`
http://localhost:3000
\`\`\`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

\`\`\`
studio_ts/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Navbar.css
│   │   ├── Footer.tsx
│   │   └── Footer.css
│   ├── pages/        # Page components
│   │   ├── Home.tsx
│   │   ├── Home.css
│   │   ├── About.tsx
│   │   ├── About.css
│   │   ├── Services.tsx
│   │   ├── Services.css
│   │   ├── Portfolio.tsx
│   │   ├── Portfolio.css
│   │   ├── Contact.tsx
│   │   └── Contact.css
│   ├── App.tsx       # Main app component
│   ├── main.tsx      # Entry point
│   └── index.css     # Global styles
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
\`\`\`

## Customization

### Colors

The color scheme can be customized in `src/index.css`:

\`\`\`css
:root {
  --primary-color: #c9a961;      /* Gold accent */
  --primary-dark: #b89450;       /* Darker gold */
  --secondary-color: #2c3e50;    /* Dark blue-gray */
  --text-color: #333;
  --text-light: #7f8c8d;
  --bg-color: #ffffff;
  --bg-light: #f8f9fa;
}
\`\`\`

### Typography

The website uses two Google Fonts:
- **Playfair Display**: Headings and titles
- **Montserrat**: Body text and UI elements

## Deployment

### Build for Production

\`\`\`bash
npm run build
\`\`\`

The built files will be in the `dist/` folder, ready to be deployed to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- AWS S3

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Credits

- Design inspired by modern architecture studios
- Images from Unsplash (replace with your own)
- Icons from React Icons

## Future Enhancements

- [ ] Add portfolio gallery with project details
- [ ] Implement blog section
- [ ] Add image lightbox for project photos
- [ ] Integrate with a backend for contact form
- [ ] Add testimonials section
- [ ] Implement dark mode toggle
- [ ] Add multilingual support

## Support

For support, email hello@architectstudio.com or create an issue in the repository.
