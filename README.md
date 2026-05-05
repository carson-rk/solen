# Alignwell Mental Health Adaptive Flow System (MVP)

This is a prototype web application that models an adaptive mental health support system.  
It routes users through different support paths (content, peer support, counselor referral) based on:

- What issue they are experiencing (selection)
- How intense the issue is (stress level)
- Their historical patterns (behavior over time)

---

## System Overview

This project is a **state-driven decision system**, not a traditional form app.

It behaves like a lightweight mental health routing engine:

User Input → Context Model → Flow Engine → State Transition → Content Output


---

## Core Architecture

### 1. State Machine (Flow Control)

Defined in:

src/lib/flowGraph.ts

States:

- `intro`
- `selection`
- `intensity`
- `content`
- `peer`
- `counselor`

Each state transitions based on rules defined in a **flow graph**.

---

### 2. Transition Engine

Defined in:

src/lib/transitionEngine.ts

Responsible for:

- Evaluating conditions
- Selecting the next state
- Applying rule priority (first match wins)

---

### 3. Context Model

The system decision-making is driven by a shared context.

### 4. Content System
Defined in:

src/lib/content.ts

Maps user selections to contextual mental health guidance.

Example:

- academic → study breakdown strategies
- financial → budgeting guidance
- social → social stress coping
- family → communication support

### 5. Persistence Layer

Uses browser storage:

- <localStorage> stores user history
- Allows session continuity after refresh

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