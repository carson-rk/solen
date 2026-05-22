# Solen - Reflective Intelligent System (MVP)

Solen helps founders, developers, and high-performers see their behavioral patterns, align with their identity, and avoid burnout. It is designed for the psychological realities of modern young adulthood.

---

## Project Folder

src/
├── app/                          # Routes only — thin pages
│   ├── layout.tsx
│   ├── page.tsx                  # /
│   ├── explore/page.tsx
│   ├── reflect/page.tsx
│   ├── auth/page.tsx
│   ├── stories/page.tsx
│   ├── support/page.tsx
│   └── (entry)/about/page.tsx    # /about
├── components/
│   ├── layout/Container.tsx
│   ├── ui/                       # shadcn primitives
│   └── shared/                   # Navbar, Footer
├── features/
│   ├── reflect/
│   │   ├── types.ts
│   │   ├── data/                 # moodOptions, issues
│   │   ├── hooks/useReflection.ts
│   │   ├── views/                # IntroView, SupportView
│   │   └── components/           # MoodCard
│   ├── content/
│   │   ├── types.ts
│   │   ├── articles.ts
│   │   └── resolver/             # getMoodLevel, getRecommendedContent
│   ├── explore/
│   │   ├── data/
│   │   └── components/           # landing sections
│   └── home/
│       └── components/           # HeroSection
├── lib/
│   ├── utils.ts                  # cn()
│   └── storage/historyStorage.ts
└── styles/globals.css

## Core Architecture

- **State Driven (Flow Control)** : UI follows emotional state (mood → issues → support), not infinite scroll or engagement loops.
- **Calm Surfaces** : Thin routes, progressive disclosure (Intro -> Support), minimal chrome.
- **Features own emotion; components own presentation** : no mood logic in components.

---

## User Flow

### Step 1: Intro

User begins session.

### Step 2: Selection

User chooses issue category:

- Academic pressure
- Financial stress
- Social issues
- Family issues

### Step 3: Intensity Input

User rates severity (0–10)

### Step 4: Decision Engine

System evaluates:

- current stress level
- recent history (trend)
- selected issue

### Step 5: Routing Output

User is routed to:

- Content (low stress)
- Peer support (moderate stress)
- Counselor recommendation (high or escalating stress)

---

## Decision Logic

Routing rules follow priority order:

1. High historical + high current stress → Counselor
2. High current stress → Counselor
3. Moderate stress → Peer support
4. Low stress → Content

---

## Key Features

- Multi-step adaptive flow
- State machine-based navigation
- Context-aware decision engine
- Persistent session history
- Modular content mapping system

---

## Tech Stack

- Next.js (App Router)
- React (Client Components)
- TypeScript
- TailwindCSS
- Browser LocalStorage (temporary persistence)

---

## Limitations (MVP Stage)

- No backend persistence (uses localStorage only)
- No authentication
- No real counselor matching system
- No AI-based personalization yet

---

## Future Improvements

- Supabase integration for persistent user profiles
- AI-based content recommendation layer
- Counselor matching system
- Peer support graph network
- Risk scoring system based on behavioral trends
- Analytics dashboard for user patterns

---

## Important Note

This project is a prototype system design, not a medical diagnostic tool.
It is intended for learning, experimentation, and system architecture exploration.

---

## Goal

To explore how structured decision systems can support mental health workflows using:

- State machines
- Context modeling
- Rule-based routing
- Adaptive user flows