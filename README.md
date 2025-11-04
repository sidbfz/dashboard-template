# 🎨 Multi-Style Dashboard Template

A modern, fully customizable Next.js dashboard featuring **4 distinct visual styles** that users can switch between instantly. Built with Next.js 14, TypeScript, and Tailwind CSS.

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://dashboard-template-rho-eight.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8)](https://tailwindcss.com/)

## 🌟 Live Demo

**[View Live Dashboard →](https://dashboard-template-rho-eight.vercel.app/)**

## ✨ Features

### 🎭 Four Unique Visual Styles
Switch between distinct design systems on the fly:

- **Minimal** – Clean, professional, and timeless
- **Neumorphism** – Soft UI with elegant depth and shadows
- **Neobrutalism** – Bold, expressive with thick borders and vibrant colors
- **Glassmorphism** – Modern frosted glass effect with blur and transparency

### 📊 Dynamic Charts
- Charts automatically adapt colors based on selected style
- Revenue Growth tracking
- Sales by Category analysis
- Performance Metrics with radial charts
- User engagement analytics
- Payment overview trends
- Device usage statistics

### 🎯 Core Features
- ✅ Fully responsive design (mobile, tablet, desktop)
- 🌓 Dark/Light mode support
- 📈 Real-time data visualization with ApexCharts
- 🎨 Style persistence across sessions (localStorage)
- ⚡ Server-side rendering with Next.js App Router
- 🔥 Type-safe with TypeScript
- 💅 Styled with Tailwind CSS
- 🚀 Optimized performance with useMemo hooks

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (4 separate configs for each style)
- **Charts:** ApexCharts / react-apexcharts
- **State Management:** React Context API
- **Theme:** next-themes
- **Icons:** Custom SVG components
- **Fonts:** Satoshi (custom font family)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/sidbfz/dashboard-template.git

# Navigate to project directory
cd dashboard-template

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

## 📁 Project Structure

```
dashboard-template/
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── (home)/       # Dashboard homepage
│   │   ├── auth/         # Authentication pages
│   │   ├── calendar/     # Calendar view
│   │   ├── charts/       # Chart examples
│   │   ├── forms/        # Form layouts
│   │   ├── profile/      # User profile
│   │   ├── styles/       # Style selector page
│   │   └── tables/       # Data tables
│   ├── components/       # Reusable components
│   │   ├── Charts/       # Chart components
│   │   ├── Layouts/      # Header, Sidebar
│   │   ├── Tables/       # Table components
│   │   └── ui/           # UI primitives
│   ├── contexts/         # React contexts (StyleProvider)
│   ├── hooks/            # Custom hooks
│   │   ├── use-chart-colors.ts
│   │   ├── use-mobile.ts
│   │   └── use-click-outside.ts
│   ├── lib/              # Utilities and configs
│   │   └── style-config.ts
│   ├── css/              # Style-specific CSS
│   │   ├── neumorphism.css
│   │   ├── neobrutalism.css
│   │   └── glassmorphism.css
│   └── assets/           # Static assets
├── public/               # Public files
│   ├── favicon.png       # Custom favicon
│   └── images/           # Image assets
└── tailwind.*.config.ts  # Tailwind configs per style
```

## 🎨 Style System

The dashboard uses a sophisticated style system that applies different visual treatments across the entire UI:

### Switching Styles
Navigate to the **Styles** page or use the style selector to instantly switch between:
1. Minimal
2. Neumorphism
3. Neobrutalism
4. Glassmorphism

### Dynamic Chart Colors
Each style has its own color palette for charts:
- **Primary:** Used for main data series
- **Secondary:** Complementary data series
- **Tertiary:** Third-level data
- **Quaternary:** Fourth-level data

The `useChartColors` hook automatically provides the correct colors based on the active style.

## 🔧 Configuration

### Adding a New Style
1. Create CSS file in `src/css/your-style.css`
2. Create Tailwind config in `tailwind.your-style.config.ts`
3. Update `src/lib/style-config.ts` with new style definition
4. Add colors to `COLOR_SCHEMES` in `src/hooks/use-chart-colors.ts`
5. Import CSS in `src/app/layout.tsx`

## 📊 Available Pages

- **Dashboard** – Overview with charts and metrics
- **Calendar** – Event management
- **Profile** – User profile and settings
- **Tables** – Data tables with various layouts
- **Forms** – Form elements and layouts
- **Charts** – Chart examples
- **UI Elements** – Alerts, buttons, and components
- **Auth** – Sign-in page
- **Settings** – User preferences
- **Styles** – Visual style selector

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Charts powered by [ApexCharts](https://apexcharts.com/)
- Icons and UI components custom-built
- Inspired by modern dashboard design patterns

## 📧 Contact

For questions or feedback, reach out via GitHub issues.

---

**[⭐ Star this repo](https://github.com/sidbfz/dashboard-template)** if you find it helpful!
