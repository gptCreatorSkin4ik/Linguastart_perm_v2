/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#f6f8fb',
        ink: '#12213a',
        accent: '#138a8a',
        accentSoft: '#e2f5f4',
        warm: '#f29d52',
        card: '#ffffff',
        borderSoft: '#d8e2ee'
      },
      boxShadow: {
        card: '0 12px 30px rgba(18, 33, 58, 0.08)',
        soft: '0 6px 20px rgba(19, 138, 138, 0.2)'
      },
      borderRadius: {
        xl2: '1.25rem'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        fadeUp: 'fadeUp 0.45s ease-out both'
      }
    }
  },
  plugins: []
};
