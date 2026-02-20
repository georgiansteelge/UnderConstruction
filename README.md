# Georgian Steel - Under Construction Page

A clean, modern, responsive "Under Construction" landing page with multilingual support (English, Georgian, Russian).

## Features

- ✅ **Responsive Design** - Mobile-first approach, works on all devices
- ✅ **Multilingual** - English, Georgian (ქართული), Russian (Русский)
- ✅ **Language Persistence** - Selected language saved in localStorage
- ✅ **Modern UI** - Centered card design with smooth animations
- ✅ **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation
- ✅ **SEO Optimized** - Localized titles and meta descriptions
- ✅ **No External Dependencies** - No CDN, no external fonts, no libraries
- ✅ **Dark Mode Support** - Respects system color scheme preferences
- ✅ **Inline SVG Icon** - Animated construction illustration
- ✅ **Email Integration** - "Notify me" button with mailto link

## Quick Start

### Using Docker

1. **Build the Docker image:**
   ```powershell
   docker build -t georgiansteel-under-construction .
   ```

2. **Run the container:**
   ```powershell
   docker run -p 8080:80 georgiansteel-under-construction
   ```

3. **Open in your browser:**
   ```
   http://localhost:8080
   ```

### Local Development

Simply open `index.html` in your web browser. All functionality works offline.

## File Structure

```
.
├── index.html          # Single-file landing page (HTML + CSS + JS)
├── Dockerfile          # nginx:alpine configuration
└── README.md           # This file
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Content

The page includes the following sections:
- **Badge** - "Under Construction" label (localized)
- **Title** - Main heading (localized)
- **Subtitle** - Description text (localized)
- **Contact** - Email link to info@georgiansteel.ge
- **Notify Button** - Opens email client to subscribe for launch notifications
- **Footer** - Copyright notice with current year

## Language Support

| English | Georgian | Russian |
|---------|----------|---------|
| Under Construction | მომზადების პროცესში | Сайт в разработке |
| We're building something new | ჩვენ ვქმნით ახალს | Мы готовим кое-что новое |

The selected language is stored in `localStorage` and persists across sessions.

## Customization

To modify content, edit the `translations` object in the `<script>` section of `index.html`.

## License

© 2026 Georgian Steel. All rights reserved.
