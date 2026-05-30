/**
 * Solen Environmental Tokens (Neutral / Guest State)
 * HSL values for seamless atmospheric opacity blending.
 */
export const neutralTokens = {
  surface: {
    base: "36 43% 95%",       // --warm-bg
    elevated: "39 38% 93%",   // --cream
  },
  
  text: {
    primary: "27 23% 18%",    // --text-main (warm dark brown)
    secondary: "26 18% 41%",  // --text-mid
    ambient: "30 20% 61%",    // --text-soft
  },

  action: {
    // Primary CTAs (Amber 2)
    proceed: "26 52% 50%",
    proceedForeground: "36 43% 95%", // Surface Base

    // Grounding actions (Soft warm blend)
    settle: "39 30% 88%", 
    settleForeground: "27 23% 18%",  // Text Primary
  },

  accent: {
    base: "24 55% 62%",       // --amber-1
    soft: "32 62% 76%",       // --amber-soft (breathing dots)
  },

  atmosphere: {
    fog: "36 43% 95%",        // Blends with base surface
    glow: "32 62% 76%",       // Emits from soft accent
    noise: "27 23% 18%",      // Derived from primary text
    shadow: "27 23% 18%",     // Warm shadows, never pure black
    veil: "39 38% 93%",       // Semi-transparent surface elevated
  },

  // Base wood color, meant to be used with opacity (e.g., hsl(var(--border) / 0.18))
  border: "26 38% 46%",       
}