# Matrix/Cyberpunk Theme System

A beautiful dark theme toggle system with animated Matrix rain effect and Cyberpunk grid background.

## Features

- **Matrix Theme**: Green binary rain animation (inspired by The Matrix)
- **Cyberpunk Theme**: Pink neon grid with gradient backgrounds
- **Smooth Transitions**: Animated toggle with spring physics
- **Persistent State**: Theme preference saved to localStorage
- **Fully Typed**: TypeScript support included

## Dependencies

Install these packages in your project:

```bash
npm install zustand framer-motion lucide-react
```

## Installation

1. Copy the `theme-export` folder into your project
2. Install dependencies (see above)
3. Ensure Tailwind CSS is configured in your project

## Usage

### Basic Setup

```tsx
import { ThemeBackground, ThemeToggle } from './theme-export';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background effect (Matrix or Cyberpunk) */}
      <ThemeBackground />

      {/* Your content */}
      <div className="relative z-10">
        {/* Toggle button */}
        <ThemeToggle />

        {/* Your app content */}
      </div>
    </div>
  );
}
```

### Access Theme State

```tsx
import { useThemeStore } from './theme-export/store/useThemeStore';

function MyComponent() {
  const { theme, setTheme, toggleTheme } = useThemeStore();

  return (
    <div className={theme === 'matrix' ? 'text-green-400' : 'text-pink-400'}>
      Current theme: {theme}
    </div>
  );
}
```

### Custom Styling Based on Theme

```tsx
import { useThemeStore } from './theme-export/store/useThemeStore';

function Card() {
  const { theme } = useThemeStore();

  return (
    <div className={`
      p-6 rounded-lg backdrop-blur-md
      ${theme === 'matrix'
        ? 'bg-black/70 border border-green-400/30 text-green-100'
        : 'bg-purple-900/70 border border-pink-400/30 text-pink-100'
      }
    `}>
      Card content
    </div>
  );
}
```

## Tailwind Configuration

Make sure your `tailwind.config.js` includes the theme files:

```js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './theme-export/**/*.{js,jsx,ts,tsx}', // Add this line
  ],
  // ... rest of config
}
```

## Theme Colors

### Matrix Theme
- Primary: Green (#22C55E / green-500)
- Accent: Bright Green (#4ADE80 / green-400)
- Background: Black with green tints

### Cyberpunk Theme
- Primary: Pink (#EC4899 / pink-500)
- Secondary: Purple (#A855F7 / purple-500)
- Accent: Orange (#FB923C / orange-400)
- Background: Purple/Pink/Orange gradients

## Component API

### ThemeToggle
Animated toggle button to switch between themes.

```tsx
<ThemeToggle />
```

### ThemeBackground
Renders the appropriate background effect based on current theme.

```tsx
<ThemeBackground />
```

### MatrixRain
Standalone Matrix rain effect (auto-used by ThemeBackground).

```tsx
<MatrixRain className="custom-class" />
```

### CyberpunkGrid
Standalone Cyberpunk grid effect (auto-used by ThemeBackground).

```tsx
<CyberpunkGrid className="custom-class" />
```

## Store API

### useThemeStore

```tsx
const {
  theme,        // 'matrix' | 'cyberpunk'
  setTheme,     // (theme: Theme) => void
  toggleTheme   // () => void
} = useThemeStore();
```

## Customization

### Change Default Theme

Edit `store/useThemeStore.ts`:

```typescript
theme: 'cyberpunk', // Change default from 'matrix' to 'cyberpunk'
```

### Customize Matrix Characters

Edit `components/MatrixRain.tsx`:

```typescript
const chars = '01アイウエオカキクケコ'; // Add Japanese katakana
```

### Adjust Animation Speed

Matrix Rain speed in `components/MatrixRain.tsx`:

```typescript
const interval = setInterval(draw, 50); // Increase for slower, decrease for faster
```

### Custom Colors

Modify the gradient classes in `ThemeToggle.tsx` and add CSS variables for easier theming:

```css
:root {
  --matrix-primary: #22c55e;
  --cyberpunk-primary: #ec4899;
}
```

## Tips

1. **Performance**: The Matrix rain effect uses canvas rendering for optimal performance
2. **Z-Index**: Background effects are at `z-0`, keep content at `z-10` or higher
3. **Backdrop Blur**: Use `backdrop-blur-md` for glass-morphism effects over backgrounds
4. **Dark Mode**: This theme system is designed for dark themes; adjust for light backgrounds if needed

## License

Free to use in any project. No attribution required.
