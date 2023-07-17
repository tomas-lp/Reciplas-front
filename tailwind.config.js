/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      body: ['Inter', '"Open Sans"', 'ui-sans-serif', 'system-ui'],
      title: ['Poppins', '"Open Sans"', 'ui-sans-serif', 'system-ui'],
    },
    colors: {
      primary: '#41B882',
      primarydark: '#309467',
      white: '#ffffff',
      verylight: '#F1F6F9',
      light: '#D9D9D9',
      mediumlight: '#9BA4B5',
      medium: '#394867',
      mediumdark: '#212A3E',
      dark: '#111a31',
      black: '#000000',
      grey: '#666666',
      darkgrey: '#595959',
    },
    extend: {
      scale: {
        '102': '1.02',
      }
    },
  },
  plugins: [],
}
