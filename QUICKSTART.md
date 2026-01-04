# Quick Start Guide

Get the Matrix/Cyberpunk theme running in under 5 minutes!

## Step 1: Install Dependencies

```bash
npm install zustand framer-motion lucide-react
```

## Step 2: Copy Files

Copy the entire `theme-export` folder into your project's `src` directory:

```
src/
  theme-export/
    components/
    store/
    index.ts
```

## Step 3: Update Tailwind Config

Add theme files to your `tailwind.config.js`:

```js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/theme-export/**/*.{js,jsx,ts,tsx}', // Add this
  ],
  // ... rest of config
}
```

## Step 4: Add to Your App

```tsx
import { ThemeBackground, ThemeToggle } from './theme-export';

function App() {
  return (
    <div className="relative min-h-screen">
      <ThemeBackground />

      <div className="relative z-10 p-6">
        <ThemeToggle />
        {/* Your content here */}
      </div>
    </div>
  );
}
```

## Done!

You now have:
- Matrix rain effect (green binary animation)
- Cyberpunk grid effect (pink neon grid)
- Animated toggle button
- Persistent theme preference

## Next Steps

Check out:
- `README.md` for full documentation
- `EXAMPLE.tsx` for complete usage examples
- `components/` to customize colors and animations

## Troubleshooting

**Theme not persisting?**
- Zustand persist middleware saves to localStorage automatically

**Animations not working?**
- Make sure framer-motion is installed
- Check that you're using React 18+

**Tailwind classes not applying?**
- Verify tailwind.config.js includes theme files
- Run `npm run build` to rebuild

**Import errors?**
- Check import paths match your folder structure
- TypeScript: ensure paths are in tsconfig.json

## Color Reference

### Matrix Theme
```css
Green: #22C55E (green-500)
Light: #4ADE80 (green-400)
Background: Black with green tints
```

### Cyberpunk Theme
```css
Pink: #EC4899 (pink-500)
Purple: #A855F7 (purple-500)
Orange: #FB923C (orange-400)
Background: Purple/Pink gradients
```

## File Structure

```
theme-export/
├── components/
│   ├── ThemeToggle.tsx       # Toggle button
│   ├── ThemeBackground.tsx   # Background manager
│   ├── MatrixRain.tsx        # Matrix effect
│   ├── CyberpunkGrid.tsx     # Cyberpunk effect
│   └── index.ts              # Component exports
├── store/
│   └── useThemeStore.ts      # Zustand store
├── index.ts                  # Main entry
├── package.json              # Dependencies
├── README.md                 # Full docs
├── EXAMPLE.tsx               # Usage examples
└── QUICKSTART.md             # This file
```
