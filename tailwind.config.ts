import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  theme: {
      extend: {
        keyframes: {
          zoomIn: {
            '0%': { transform: 'scale(1)' },
            '100%': { transform: 'scale(1.1)' },
          },
        },
        animation: {
          zoomIn: 'zoomIn 10s infinite',
        },
      },
    },
    // theme: {
    //   extend: {
    //     screens: {
    //       '3xl': '1600px',
    //     }
    //   }
    // },
    // theme: {
    //   container: {
    //     center: true,
    //     padding: "2rem",
    //     screens: {
    //       "2xl": "1400px",
    //     },
    //   },

  },
  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    themes: ["light", "dark"],
  },
  

  
};

export default config;
