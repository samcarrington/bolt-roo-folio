# Innovation Leader Portfolio

A professional portfolio website built with Nuxt 3, showcasing leadership in technology innovation and strategic transformation.

![Nuxt 3](https://img.shields.io/badge/Nuxt-3-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)
![Vue 3](https://img.shields.io/badge/Vue-3-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)
![Contentful](https://img.shields.io/badge/Contentful-CMS-2478CC?style=for-the-badge&logo=contentful&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🚀 Features

- **Modern Tech Stack**: Built with Nuxt 3, Vue 3, and Tailwind CSS
- **Content Management**: Integrated with Contentful headless CMS
- **Responsive Design**: Fully responsive layout for all devices
- **Animations**: Smooth animations using VueUse Motion
- **Blog Section**: Showcase thought leadership through blog posts
- **Projects Portfolio**: Display innovative projects with detailed information
- **SEO Optimized**: Built with SEO best practices in mind

## 📋 Project Structure

```
├── components/            # Vue components
│   ├── atoms/             # Atomic UI components
│   ├── molecules/         # Composite components
│   └── ...                # Other components
├── composables/           # Vue composables
├── content/               # Markdown content
├── pages/                 # Application pages
│   ├── blog/              # Blog section
│   ├── projects/          # Projects section
│   └── ...                # Other pages
├── public/                # Static assets
└── server/                # Server-side code
```

## 🛠️ Tech Stack

- **[Nuxt 3](https://nuxt.com/)**: Vue framework for building modern web applications
- **[Vue 3](https://vuejs.org/)**: Progressive JavaScript framework
- **[Contentful](https://www.contentful.com/)**: Headless CMS for content management
- **[Nuxt UI](https://ui.nuxt.com/)**: UI components for Nuxt
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework
- **[VueUse Motion](https://motion.vueuse.org/)**: Animation library for Vue

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or later)
- Yarn or npm
- Contentful account with API keys

### Environment Setup

Create a `.env` file in the root directory with the following variables:

```
CONTENTFUL_SPACE_ID=your_contentful_space_id
CONTENTFUL_TOKEN=your_contentful_access_token
```

### Installation

```bash
# Install dependencies
yarn install
# or
npm install
```

### Development

```bash
# Start development server
yarn dev
# or
npm run dev
```

The development server will be available at http://localhost:3000

### Production

```bash
# Build for production
yarn build
# or
npm run build

# Start production server
yarn start
# or
npm run start
```

### Static Generation

```bash
# Generate static site
yarn generate
# or
npm run generate
```

## 📝 Content Management

This portfolio uses Contentful as a headless CMS. The following content types are used:

- **Blog Posts**: Articles and thought leadership content
- **Projects**: Showcase of innovative projects
- **Categories**: Tags for organizing content

## 🎨 Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.ts`.

### UI Components

UI components are built with Nuxt UI and can be customized in `app.config.ts`.

## 📚 Documentation

- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [Vue 3 Documentation](https://vuejs.org/guide/introduction.html)
- [Contentful Documentation](https://www.contentful.com/developers/docs/)
- [Nuxt UI Documentation](https://ui.nuxt.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
