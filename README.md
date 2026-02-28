# AutoPacker - Software Packaging & Deployment Platform

A modern static website built with [Astro](https://astro.build/) showcasing professional tools, resources, and documentation for enterprise software packaging and deployment.

## 🌟 Features

- **Fast & Lightweight**: Built with Astro for optimal performance (static generation)
- **Dark Mode Support**: Theme toggle component with smooth transitions
- **Blog Section**: MDX-powered blog with rich content support
- **Downloads Management**: Organized software and resource downloads
- **Responsive Design**: Tailwind CSS for mobile-first responsive layouts
- **SEO Optimized**: Proper meta tags and Open Graph support
- **Type-Safe**: Full TypeScript support with content validation

## 📁 Project Structure

```
/src
  /components      # Reusable Astro components
    - ThemeToggle.astro
    - Video.astro
  /content         # Content collections
    /blog          # Blog posts (MDX/MD)
    /config.ts     # Content schema definitions
  /layouts         # Page layouts
    - Layout.astro
    - PostLayout.astro
  /lib             # Utility functions
    - downloads.ts # Download management
  /pages           # Page routes
    /blog          # Blog pages
    /downloads     # Downloads pages
  /types.ts        # TypeScript type definitions
  /env.d.ts        # Environment type definitions
/public            # Static assets
  /blog            # Blog images
  /downloads       # Downloadable files
/dist              # Built output (generated)
  astro.config.mjs # Astro configuration
  tailwind.config.mjs # Tailwind configuration
  tsconfig.json    # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/autopacker.git
cd autopacker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000` (or the port shown in terminal).

## 🛠️ Development

### Available Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized static site
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

### Adding Blog Posts

Create a new file in `src/content/blog/` with `.mdx` or `.md` extension:

```mdx
---
title: "Your Post Title"
description: "Brief description"
publishDate: 2026-02-28
author: "Author Name"
heroImage: "/path/to/image.jpg"
tags: ["tag1", "tag2"]
---

Your blog content here...
```

### Adding Downloads

Edit `src/lib/downloads.ts` to add new downloads with proper metadata:

```typescript
{
    slug: 'unique-slug',
    data: {
        title: 'Software Name',
        vendor: 'Vendor Name',
        description: 'Description',
        version: '1.0.0',
        releaseDate: new Date('2026-02-28'),
        fileSize: '50 MB',
        osRequirements: ['Windows 10', 'Windows 11'],
        downloadUrl: '/downloads/filename.exe',
        tags: ['Category1', 'Category2']
    },
    content: `<h2>About</h2><p>Details...</p>`
}
```

## 📦 Dependencies

- **astro** - Static site generator
- **@astrojs/tailwind** - Tailwind CSS integration
- **tailwindcss** - Utility-first CSS framework

## 🎨 Customization

### Site Configuration

Edit `astro.config.mjs` to modify:
- Site URL
- Integrations
- Output format

### Dark Mode

The theme toggle is controlled by the `ThemeToggle.astro` component. Styles are scoped using Tailwind's `dark:` prefix.

### Styling

Customize Tailwind styles in `tailwind.config.mjs`.

## 🔍 Content Schema

### Blog Posts
- `title` (required): Post title
- `description` (required): Post description
- `publishDate` (required): Publication date
- `author` (optional): Author name
- `heroImage` (optional): Featured image
- `tags` (optional): Array of tags

### Downloads
- `title` (required): Software name
- `vendor` (required): Vendor/publisher name
- `description` (required): Software description
- `version` (required): Version number
- `releaseDate` (required): Release date
- `fileSize` (required): File size
- `osRequirements` (required): Array of supported OS
- `downloadUrl` (required): Path to downloadable file

## 🌍 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository on [Vercel](https://vercel.com)
3. Vercel auto-detects Astro and builds automatically

### GitHub Pages

1. Set build output to `dist/`
2. Configure GitHub Actions workflow
3. Push to trigger automatic deployment

### Manual Deployment

```bash
npm run build
# Serve the dist/ folder with your hosting provider
```

## 📝 Environment Variables

Standard Astro environment (no additional variables required for basic functionality).

For API keys or secrets:
```
.env
```

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For issues, questions, or suggestions, please open an issue on GitHub.

## 🔗 Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com)

## 🎯 Roadmap

- [ ] Search functionality
- [ ] Advanced filtering for downloads
- [ ] Newsletter subscription
- [ ] Contact form
- [ ] Product comparison tool
- [ ] Video tutorials section

---

**Built with ❤️ using Astro**
