module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Includes all JS, JSX, TS, TSX files in the src folder
    "./public/index.html",        // Ensures Tailwind processes the main HTML file
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Example custom color
        secondary: "#64748B",
      },
      spacing: {
        '128': '32rem',   // Example extended spacing
        '144': '36rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom font family
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),    // Adds better form styling
    require('@tailwindcss/typography'), // Enhances typography
    require('@tailwindcss/aspect-ratio'), // Adds aspect-ratio utilities
  ],
};