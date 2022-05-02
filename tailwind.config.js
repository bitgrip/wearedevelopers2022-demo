module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      // scaling steps by factor 1.25 for min and preferred and 1.4 for max, rounded
      xs: 'clamp(0.64rem, 1.3vw, 0.69rem)',
      s: 'clamp(0.8rem, 1.6vw, 1.2rem)',
      m: 'clamp(1rem, 2vw, 1.5rem)',
      l: 'clamp(1.25rem, 2.5vw, 1.875rem)',
      xl: 'clamp(1.56rem, 3.125vw, 2.25rem)',
      xxl: 'clamp(1.95rem, 3.9vw, 3.375rem)',
    },
    extend: {
      spacing: {
        s: 'clamp(0.5rem, 1vw, 0.75rem)',
        m: 'clamp(1rem, 2vw, 1.5rem)',
        m: 'clamp(2rem, 4vw, 3rem)',
      }
    },
  },
  plugins: [],
}
