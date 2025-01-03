import plugin from 'tailwindcss/plugin'
import type { Config } from 'tailwindcss'

const config: Partial<Config> = {
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'gradient': '#77A1D3',
        'background': 'hsl(226, 33.15%, 5.2%)',
        'foreground': 'hsl(226, 5.1%, 98.25%)',
        'muted': 'hsl(226, 25.5%, 19.5%)',
        'muted-foreground': 'hsl(226, 5.1%, 56.5%)',
        'popover': 'hsl(226, 54.8%, 8.45%)',
        'popover-foreground': 'hsl(226, 5.1%, 98.25%)',
        'card': 'hsl(226, 54.8%, 8.45%)',
        'card-foreground': 'hsl(226, 5.1%, 98.25%)',
        'border': 'hsl(226, 25.5%, 19.5%)',
        'input': 'hsl(226, 25.5%, 19.5%)',
        'primary': 'hsl(226, 51%, 65%)',
        'primary-foreground': 'hsl(226, 5.1%, 6.5%)',
        'secondary': 'hsl(226, 25.5%, 19.5%)',
        'secondary-foreground': 'hsl(226, 5.1%, 98.25%)',
        'accent': 'hsl(226, 25.5%, 19.5%)',
        'accent-foreground': 'hsl(226, 5.1%, 98.25%)',
        'destructive': 'hsl(0, 62.8%, 30.6%)',
        'destructive-foreground': 'hsl(226, 5.1%, 98.25%)',
        'ring': 'hsl(226, 51%, 65%)'
      },
      keyframes: {
        starsAnim: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-2000px)' }
        }
      },
      animation: {
        stars: 'starsAnim 100s linear infinite',
        starsSlow: 'starsAnim 150s linear infinite',
        starsSlowest: 'starsAnim 200s linear infinite'
      },
      boxShadow: {
        stars1:
          '693px 8435px #fff, 1921px 246px #fff, 1120px 872px #fff, 1614px 1319px #fff, 628px 1227px #fff',
        stars2:
          '1432px 8687px #fff, 281px 1550px #fff, 797px 588px #fff, 1219px 1750px #fff',
        stars3:
          '1101px 12446px #fff, 1029px 11px #fff, 1085px 961px #fff, 1767px 1121px #fff'
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.starry-bg': {
          position: 'relative',
          minHeight: '100vh',
          width: '100%',
          background: theme('colors.background'),
          overflow: 'hidden'
        },
        '.stars': {
          position: 'absolute',
          inset: '0',
          pointerEvents: 'none'
        },
        '.stars-layer1': {
          height: '1px',
          width: '1px',
          borderRadius: '50%',
          boxShadow: theme('boxShadow.stars1'),
          animation: theme('animation.stars')
        },
        '.stars-layer2': {
          height: '1px',
          width: '1px',
          borderRadius: '50%',
          boxShadow: theme('boxShadow.stars2'),
          animation: theme('animation.starsSlow')
        },
        '.stars-layer3': {
          height: '1px',
          width: '1px',
          borderRadius: '50%',
          boxShadow: theme('boxShadow.stars3'),
          animation: theme('animation.starsSlowest')
        }
      })
    })
  ]
}

export default config
