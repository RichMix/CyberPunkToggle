import React from 'react';
import { ThemeBackground, ThemeToggle } from './index';
import { useThemeClasses, useThemeColor } from './hooks/useThemeClasses';

function AdvancedExample() {
  const classes = useThemeClasses();
  const colors = useThemeColor();

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ThemeBackground />

      <div className="relative z-10">
        {/* Header */}
        <header className={`${classes.glass} p-6 m-4 rounded-xl ${classes.glow}`}>
          <div className="flex justify-between items-center">
            <h1 className={`text-3xl font-bold ${classes.gradient}`}>
              Advanced Theme Example
            </h1>
            <ThemeToggle />
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className={`${classes.card} ${classes.pulse} mb-8`}>
            <h2 className={`text-4xl font-bold mb-4 ${classes.text}`}>
              Welcome to the Future
            </h2>
            <p className="text-lg mb-6 opacity-80">
              Experience the perfect blend of Matrix and Cyberpunk aesthetics
            </p>
            <button className={`${classes.button} font-bold px-8 py-4 rounded-lg`}>
              Get Started
            </button>
          </section>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {['Feature 1', 'Feature 2', 'Feature 3'].map((title, i) => (
              <div
                key={i}
                className={`${classes.card} hover-lift cursor-pointer`}
              >
                <div className={`w-12 h-12 rounded-full ${classes.glow} flex items-center justify-center mb-4`}
                  style={{ backgroundColor: colors.primary }}
                >
                  <span className="text-white font-bold">{i + 1}</span>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${classes.text}`}>
                  {title}
                </h3>
                <p className="opacity-70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>

          {/* Form Example */}
          <section className={`${classes.glass} p-8 rounded-xl mb-8`}>
            <h2 className={`text-2xl font-bold mb-6 ${classes.text}`}>
              Contact Form
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className={`${classes.input} w-full`}
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className={`${classes.input} w-full`}
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Message</label>
                <textarea
                  placeholder="Your message"
                  rows={4}
                  className={`${classes.input} ${classes.scrollbar} w-full resize-none`}
                />
              </div>
              <button
                type="submit"
                className={`${classes.button} font-bold px-6 py-3 rounded-lg`}
              >
                Send Message
              </button>
            </form>
          </section>

          {/* Stats Section */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Users', value: '10K+' },
              { label: 'Projects', value: '500+' },
              { label: 'Countries', value: '50+' },
              { label: 'Stars', value: '1K+' },
            ].map((stat, i) => (
              <div
                key={i}
                className={`${classes.card} text-center ${classes.glow}`}
              >
                <div className={`text-4xl font-bold mb-2 ${classes.gradient}`}>
                  {stat.value}
                </div>
                <div className="opacity-70">{stat.label}</div>
              </div>
            ))}
          </section>

          {/* Code Example */}
          <section className={`${classes.glass} p-8 rounded-xl ${classes.scrollbar} overflow-auto`}>
            <h3 className={`text-xl font-bold mb-4 ${classes.text}`}>
              Example Usage
            </h3>
            <pre className="font-mono text-sm opacity-80">
              <code>{`import { useThemeClasses } from './hooks/useThemeClasses';

function MyComponent() {
  const classes = useThemeClasses();

  return (
    <div className={classes.card}>
      <h2 className={classes.text}>Title</h2>
      <button className={classes.button}>
        Click me
      </button>
    </div>
  );
}`}</code>
            </pre>
          </section>
        </main>

        {/* Footer */}
        <footer className={`${classes.glass} p-6 m-4 rounded-xl text-center`}>
          <p className="opacity-70">
            Built with the Matrix/Cyberpunk Theme System
          </p>
        </footer>
      </div>
    </div>
  );
}

export default AdvancedExample;
