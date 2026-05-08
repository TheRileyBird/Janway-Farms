/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        honey: {
          50: 'hsl(46 100% 96%)',
          100: 'hsl(45 96% 89%)',
          200: 'hsl(44 95% 78%)',
          300: 'hsl(42 94% 66%)',
          400: 'hsl(39 93% 55%)',
          500: 'hsl(35 92% 46%)',
          600: 'hsl(31 88% 38%)',
          700: 'hsl(27 78% 30%)',
          800: 'hsl(24 66% 24%)',
          900: 'hsl(22 58% 18%)'
        },
        field: {
          50: 'hsl(78 37% 96%)',
          100: 'hsl(80 34% 88%)',
          200: 'hsl(81 32% 75%)',
          300: 'hsl(84 30% 61%)',
          400: 'hsl(88 31% 48%)',
          500: 'hsl(93 39% 36%)',
          600: 'hsl(99 43% 29%)',
          700: 'hsl(105 39% 23%)',
          800: 'hsl(110 34% 18%)',
          900: 'hsl(116 30% 13%)'
        },
        earth: {
          50: 'hsl(42 29% 97%)',
          100: 'hsl(40 25% 92%)',
          200: 'hsl(38 21% 83%)',
          300: 'hsl(36 17% 69%)',
          400: 'hsl(34 13% 55%)',
          500: 'hsl(32 12% 43%)',
          600: 'hsl(30 13% 34%)',
          700: 'hsl(28 14% 26%)',
          800: 'hsl(26 16% 18%)',
          900: 'hsl(24 18% 11%)'
        }
      },
      boxShadow: {
        lift: '0 22px 60px hsl(24 18% 11% / 0.14), 0 3px 10px hsl(24 18% 11% / 0.1)',
        soft: '0 18px 45px hsl(24 18% 11% / 0.1), 0 2px 8px hsl(24 18% 11% / 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
