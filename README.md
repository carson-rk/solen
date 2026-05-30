# Solen

> *An environmental system. A reflective digital space.*

**Version:** `v0.1.0` — Foundational architectural release  
**Status:** Early implementation. Systems are being laid, not completed.

---

## What Is Solen?

Solen is not a productivity tool. It is not a journaling app. It is not a chatbot or a therapy product.

Solen is an **environmental system** — a digital space that behaves more like a room than a screen. It is designed around the idea that the environment you inhabit shapes how you think, and that a thoughtful digital space can hold a different kind of attention than a feed, a dashboard, or a form.

Where most software is designed to be *used*, Solen is designed to be *inhabited*. The difference is intentional. Inhabiting a space means the space does something: it breathes, it shifts, it responds to time and state. It does not demand input. It receives presence.

The current implementation lays the **architectural foundation** for that kind of space. What exists today is a neutral environmental state — the room before anything has happened, the atmosphere before the weather arrives. The systems that govern pacing, atmospheric rendering, environmental surfaces, and state orchestration are being built carefully, before the more complex adaptive and reflective behaviors are layered on top.

This is version zero. The foundation is the point.

---

## Current Implementation

What exists today, concretely:

- **RoomWorld** — The primary environmental container. A world-layer that isolates the viewport and establishes the spatial context for everything rendered inside it.
- **Neutral Environmental State** — The initial, resting environmental condition. No input required. No decision demanded. A baseline atmosphere.
- **Atmospheric Rendering** — A system for rendering environmental atmosphere: canopy layers, lighting conditions, and tonal depth that shift the felt quality of the space.
- **Environmental Surfaces** — Primitive surface components that form the physical vocabulary of the environment. Floors, walls, containers — not UI panels, but spatial planes.
- **Pacing and Reveal Systems** — Controlled, time-governed reveal phases. Content and environment elements are revealed at pace, not dumped into view. Pacing is a first-class concern.
- **Domain-Driven Environmental Modeling** — The environment is modeled as a domain, not just styled. Climate, atmosphere, and state are structured data, not CSS classes sprinkled onto divs.
- **Environment Orchestration Hooks** — React hooks that manage environmental state transitions and expose environmental context to the component tree.
- **Token-Driven Visual Systems** — Styling is driven by semantic design tokens — atmospheric tokens — rather than hardcoded values. The tokens carry meaning, not just color.
- **Primitive UI Architecture** — Button intents, surface types, and interactive primitives built atop the token system. Minimal, intentional, composable.

---

## Architecture

Solen's architecture is organized around **environmental domains**, not UI concerns. The folder structure reflects this.

```
src/
├──app/
│   ├──(entry)
│   └──(world)
├── domain/                   # Environmental domain models
│   ├── climate/              # Climate state: temperature, humidity, tone
│   ├── resonance/            # Atmospheric texture
│   └── environment/          # presence
│
├── systems/                  # Orchestration and environmental logic
│   ├── atmosphere/           # Atmospheric design tokens
│   ├── pacing/               # Reveal timing, phase management
│   └── environment/          # Rendering pipeline coordination
│
├── components/               # Environmental primitives and UI atoms
│   ├── surfaces/             # EnvironmentSurface, floor/wall planes
│   ├── reveal/               # EnvironmentReveal, paced reveal wrappers
│   ├── canopy/               # Atmospheric canopy layer
│   └── primitives/           # Buttons, text, interactive atoms
│
├── features/                 # Assembled environmental features
│   └── reflect/              # The Reflect flow (Room → Reflect)
│
├── worlds/                   # World containers
│   └── RoomWorld/            # Primary world: the Room
│
└── styles/
    ├── tokens/               # Atmospheric design tokens
    │   ├── neutral.css       # Neutral state token set
    │   └── atmosphere.css    # Atmospheric layer tokens
    └── base/                 # Base resets and spatial foundations
```


---

## Rendering Philosophy

Solen's rendering pipeline is built around a few core ideas:

### 1. The Environment Renders Before the Content

The atmospheric layer, the surface layer, and the spatial container all render before any content is introduced. This is not a background image behind a UI. The environment is the primary rendering context, and content exists *within* it.

### 2. Paced Reveals

Nothing appears instantly. The `EnvironmentReveal` component governs when elements enter the visual field, using phase-based timing. This is not animation for decoration — it is pacing as a design decision. The space settles before it speaks.

```tsx
<EnvironmentReveal phase="ambient" delay={0}>
  <AtmosphericCanopy />
</EnvironmentReveal>

<EnvironmentReveal phase="surface" delay={400}>
  <EnvironmentSurface variant="floor" />
</EnvironmentReveal>

<EnvironmentReveal phase="content" delay={900}>
  <ReflectPrompt />
</EnvironmentReveal>
```

### 3. Viewport Isolation

`RoomWorld` establishes a fully isolated viewport context. Scroll behavior, overflow, and spatial boundaries are all contained within the world boundary. The outside of the screen does not exist while you are inside the Room.

### 4. Token-Driven Atmosphere

The visual character of the environment is driven by atmospheric tokens, not component-level style decisions. When the environmental state changes, the token values change, and the entire environment shifts tone. No component needs to know about the state change directly.

```css
/* styles/tokens/neutral.css */
:root {
  --atm-surface-base: #f4f1ec;
  --atm-canopy-opacity: 0.06;
  --atm-light-temperature: warm;
  --atm-depth-shadow: rgba(0, 0, 0, 0.04);
  --atm-reveal-duration: 600ms;
  --atm-reveal-easing: cubic-bezier(0.16, 1, 0.3, 1);
}
```

---

## Environmental Philosophy

### Climate Is State

The environment has a `climate` — a structured model of the current environmental condition. Climate is not a theme name or a CSS class. It describes the state of the space: temperature, atmospheric density, light quality, tonal character.

```ts
// domain/climate/climate.types.ts
export type ClimateTemperature = "cool" | "neutral" | "warm";
export type ClimateDensity = "sparse" | "ambient" | "dense";
export type ClimateTone = "clear" | "hazy" | "overcast";

export interface Climate {
  temperature: ClimateTemperature;
  density: ClimateDensity;
  tone: ClimateTone;
}
```

The neutral state — the current baseline — represents a `{ temperature: "neutral", density: "ambient", tone: "clear" }` climate. Every rendering decision traces back to this model.

### Surfaces Are Spatial

An `EnvironmentSurface` is not a container with padding. It is a spatial primitive with a material, an orientation, and a relationship to the light in the room. The current implementation has the vocabulary for this even if the full material system is not yet built. The foundation is structural.

### Atmosphere Is Layered

The atmospheric canopy sits above the surface layer, below the content layer. It carries the diffuse light, the tonal overlay, the softness or clarity of the environment. It does not compete with content — it holds it.

---

## Current Flow: Room → Reflect

The only fully assembled feature flow in v0.1.0 is the `Room → Reflect` path.

1. **RoomWorld mounts** — The world container establishes the viewport and initializes environmental state.
2. **Neutral climate applies** — Atmospheric tokens resolve to the neutral set. The environment settles.
3. **Paced reveal begins** — The canopy layer fades in. The floor surface appears. The space becomes present.
4. **Reflect entry** — A minimal prompt surface appears. The Reflect feature is available. No urgency. No instructions.

This flow is deliberately minimal. It is the skeleton of a much richer environmental experience, built correctly so that future states can be added without architectural debt.

---

## Design Principles

These principles govern every decision, from folder names to token values.

**1. Environment first, content second.**  
The space is not a frame for content. Content exists within a space that has its own character.

**2. Pacing is not decoration.**  
Reveals are timed because time is meaningful. Instant rendering is a choice, and it is the wrong one for this kind of space.

**3. Model the domain, not the UI.**  
Climate, atmosphere, and surfaces are modeled as domain concepts. The UI is a consequence, not the source of truth.

**4. Tokens carry meaning.**  
A token named `--atm-light-temperature` is not the same as a variable named `--color-background-warm`. One describes the environment. The other describes a color decision. Solen uses the former.

**5. Build foundations before features.**  
The orchestration hooks, the token system, the domain models — these are being built before the adaptive behaviors are layered on top. Correctness first. Complexity second.

**6. Inhabit, don't use.**  
Every interaction and rendering decision is evaluated against this question: does this make the space feel more like a place, or more like a product?

---

## Environment Orchestration

The `useEnvironment` hook is the primary interface between components and environmental state. It exposes the current climate, the active reveal phase, and transition controls.

```ts
// systems/orchestration/useEnvironment.ts
const { climate, revealPhase, transitionTo } = useEnvironment();
```

Components do not manage environmental state directly. They read from the orchestration layer and respond accordingly. This keeps the rendering logic clean and the environmental state centralized.

---

## Atmospheric Button Intents

Even interactive primitives carry atmospheric intent. Buttons in Solen are not `primary` or `secondary` — they are `settle`, `open`, or `recede`. These intents map to token values that fit the environmental context.

```tsx
<AtmosphericButton intent="settle">
  Enter the Room
</AtmosphericButton>
```

```css
/* Resolved from tokens */
.btn--intent-settle {
  background: var(--atm-surface-base);
  color: var(--atm-text-primary);
  border: 1px solid var(--atm-border-soft);
}
```

This is a small thing that matters. Naming is thinking.

---

## Current Limitations

This is v0.1.0. The following are not implemented, not simulated, and not planned for the immediate next iteration:

- **No AI or language model integration.** There is no adaptive behavior driven by AI. The environment is static in its current form.
- **No backend persistence.** Nothing is saved. Sessions are ephemeral.
- **No authentication.** There is no user concept.
- **No adaptive personalization.** The environment does not respond to individual user history or patterns.
- **No multi-state climate transitions.** Only the neutral state is implemented. Climate transitions are modeled but not active.
- **No mobile optimization.** The viewport isolation system is desktop-first in this release.
- **Limited surface vocabulary.** Floor and base surfaces exist. Walls, ceiling, and material variation are not yet built.

These are not gaps — they are the natural boundary of a foundational release. The architecture is built to receive these systems. They are not retrofits. They are next.

---

## Future Direction

The long-term vision for Solen is an environment that responds — to time, to the quality of what you bring into it, to patterns that emerge over many sessions.

The systems being planned (not started, not promised, but directionally committed to):

- **Adaptive climate transitions** — The environment shifts state based on environmental signals. Not gamification. Not feedback loops. A space that reads the room.
- **Atmospheric memory** — Environmental state persists and evolves across sessions. The Room remembers its climate history.
- **Language model integration** — Not a chatbot. A reflective layer that can receive language and respond environmentally. The Room responds to what you bring in.
- **Expanded surface vocabulary** — Materials, light behavior, directional depth. The physical vocabulary of the space grows.
- **Multi-world architecture** — RoomWorld is the first world. Others will follow, each with distinct climate models and atmospheric characters.
- **Backend environmental state** — Persistence layer for climate history, session context, and environmental continuity.

These are directions, not a roadmap. Solen is being built carefully.

---

## Running the Project

```bash
# Install dependencies
pnpm install

# Start development environment
pnpm dev

# Build
pnpm build
```

> Solen uses [React](https://react.dev/) and is bundled with [Vite](https://vitejs.dev/).  
> Node.js `>=18` required.

---

## Version

```
v0.1.0 — Foundational Environmental Architecture
```

This release establishes the domain model, rendering pipeline, token system, and world container. It is the ground on which everything else will be built.

The version is zero because this is the beginning, not the announcement.

---

## License

TBD. Not open for contribution at this stage. The architecture is still being discovered.

---

*Solen. The room before the weather arrives.*