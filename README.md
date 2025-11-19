# Ethics & Safety Master

A comprehensive educational web application for mastering bioethics, medical ethics, and patient safety concepts for USMLE Step 3 preparation and clinical practice.

## Features

### 📚 9 Comprehensive Modules

1. **Core Bioethical Principles** - Autonomy, beneficence, nonmaleficence, and justice
2. **Consent, Capacity & Surrogates** - Informed consent, capacity assessment, and surrogate decision-making
3. **Confidentiality & Privacy** - When to maintain and when to breach confidentiality
4. **End-of-Life Care** - Advance directives, code status, and palliative care
5. **Professionalism & Boundaries** - Professional boundaries, impaired colleagues, and documentation ethics
6. **Research Ethics** - Informed consent in research, clinical equipoise, and vulnerable populations
7. **Public Health & Reporting** - Reportable diseases, fitness to drive, and resource allocation
8. **Patient Safety & QI** - Systems thinking, safety tools (RCA, FMEA, PDSA), and just culture
9. **Communication & Error Disclosure** - Breaking bad news, error disclosure, and handling conflict

### 🎯 Interactive Learning

- **21+ Case Vignettes**: USMLE Step 3-style clinical scenarios with immediate feedback
- **Session-Only Quizzes**: Practice questions with instant rationale (no tracking)
- **Quick Reference Tables**: Cheat sheets for rapid review
- **Pearls & Pitfalls**: Exam tips and common mistakes for each topic

### 🎨 User Experience

- **Mobile-First Design**: Fully responsive, works on all devices
- **Dark/Light Theme**: Toggle between themes or use system preference
- **Offline Capability**: Service worker enables offline access after initial load
- **No Tracking**: Zero user data collection, no accounts, completely private

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development

The app will be available at `http://localhost:5173` when running the dev server.

## Project Structure

```
├── public/              # Static assets
│   ├── icon.svg        # App icon
│   └── sw.js           # Service worker for offline support
├── src/
│   ├── components/     # React components
│   │   ├── ui/        # Reusable UI components (Button, Card, Badge)
│   │   └── Layout.tsx # Main layout with navigation
│   ├── data/          # Content data
│   │   ├── modules.ts          # First 6 modules
│   │   ├── modulesExtended.ts  # Last 3 modules
│   │   ├── vignettes.ts        # Case vignettes
│   │   ├── reference.ts        # Reference tables
│   │   └── index.ts            # Data exports and helpers
│   ├── pages/         # Page components
│   │   ├── Home.tsx            # Module grid
│   │   ├── ModuleOverview.tsx  # Module sections
│   │   ├── LessonView.tsx      # Individual lessons
│   │   ├── Cases.tsx           # Practice cases
│   │   ├── Quiz.tsx            # Module quizzes
│   │   ├── Reference.tsx       # Quick reference
│   │   └── Settings.tsx        # Theme & disclaimers
│   ├── store/         # State management
│   │   └── themeStore.ts      # Theme state (Zustand)
│   ├── types/         # TypeScript types
│   ├── utils/         # Utility functions
│   ├── App.tsx        # Main app component with routing
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles (Tailwind)
├── index.html         # HTML template
├── package.json       # Dependencies
├── tailwind.config.js # Tailwind configuration
├── tsconfig.json      # TypeScript configuration
└── vite.config.ts     # Vite configuration
```

## Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router 6** - Client-side routing
- **Tailwind CSS** - Styling
- **Zustand** - Lightweight state management
- **Lucide React** - Icon library
- **Service Worker** - Offline capability

## Key Design Decisions

### No Data Tracking

Per requirements, this app:
- ❌ No user accounts or authentication
- ❌ No progress tracking
- ❌ No score storage
- ❌ No bookmarks or history
- ❌ No data exports
- ✅ Only theme preference saved locally

### Session-Only Assessments

Quizzes and cases provide immediate feedback but:
- Results are ephemeral (lost on page refresh)
- No cumulative scoring
- No attempt history
- Pure learning focus

### Settings Limitations

Settings page contains **only**:
1. Dark/light/system theme toggle
2. About the app section
3. Legal disclaimers

No other preferences or personalization options.

## Content Coverage

All content is designed for **USMLE Step 3** preparation, covering:

- High-yield ethical principles and their application
- Common exam scenarios (best next step questions)
- Key concepts in patient safety and quality improvement
- Practical frameworks for ethical decision-making
- Evidence-based approaches to difficult conversations

## Disclaimers

**Educational purposes only.** This app:
- Does not provide medical or legal advice
- Is not a substitute for clinical judgment
- Presents conceptual frameworks, not jurisdiction-specific laws
- Uses entirely synthetic cases (no real patient data)
- Should be verified with current guidelines and authoritative sources

## License

This project is for educational use. All clinical vignettes are fictional.

## Contact

For issues or suggestions related to the app, please file an issue in the repository.

---

**Built for USMLE Step 3 preparation** | Version 0.1.0
