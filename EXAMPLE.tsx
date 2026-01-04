import React from 'react';
import { ThemeBackground, ThemeToggle, useThemeStore } from './index';

function App() {
  const { theme } = useThemeStore();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background (Matrix or Cyberpunk) */}
      <ThemeBackground />

      {/* Main content with proper z-index */}
      <div className="relative z-10">
        {/* Header with theme toggle */}
        <header className="p-6 flex justify-between items-center">
          <h1 className={`text-3xl font-bold ${
            theme === 'matrix' ? 'text-green-400' : 'text-pink-400'
          }`}>
            My App
          </h1>

          <ThemeToggle />
        </header>

        {/* Content with theme-aware styling */}
        <main className="container mx-auto px-6 py-12">
          <div className={`
            p-8 rounded-xl backdrop-blur-md border
            ${theme === 'matrix'
              ? 'bg-black/60 border-green-400/30 text-green-100'
              : 'bg-purple-900/60 border-pink-400/30 text-pink-100'
            }
          `}>
            <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
            <p className="mb-4">
              This is an example of the Matrix/Cyberpunk theme system.
              Click the toggle in the top right to switch themes.
            </p>

            <button className={`
              px-6 py-3 rounded-lg font-semibold transition-all
              ${theme === 'matrix'
                ? 'bg-green-400 text-black hover:bg-green-300 shadow-lg shadow-green-400/50'
                : 'bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:from-pink-400 hover:to-purple-400 shadow-lg shadow-pink-400/50'
              }
            `}>
              Get Started
            </button>
          </div>

          {/* Grid of cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`
                  p-6 rounded-lg backdrop-blur-sm border transition-all hover:scale-105
                  ${theme === 'matrix'
                    ? 'bg-black/40 border-green-400/20 hover:border-green-400/50'
                    : 'bg-purple-900/40 border-pink-400/20 hover:border-pink-400/50'
                  }
                `}
              >
                <h3 className={`text-xl font-bold mb-2 ${
                  theme === 'matrix' ? 'text-green-400' : 'text-pink-400'
                }`}>
                  Feature {i}
                </h3>
                <p className={theme === 'matrix' ? 'text-green-100' : 'text-pink-100'}>
                  Description of feature {i}
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
