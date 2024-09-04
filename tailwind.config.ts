import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'pf-surface-1': '#f8f9fa',
        'pf-surface-2': '#f1f3f5',
        'pf-surface-3': '#e9ecef',
        'pf-surface-4': '#dee2e6',

        'pf-white-v0': '#f6f6f6',
        'pf-black': '#323235',
        'pf-grey-text': '#5e5e63',
        'pf-border-grey': '#e6ebef',
        'pf-light-grey-text': '#75757a',
        'pf-bg-grey': '#f4f6f8',
        'pf-white': ' white',
        'pf-dim-grey': '#707072',
        'pf-project-card-background': '#eceff1',
        'pf-callout-bar-accent': '#bdbdc5',
        'pf-ziprecruiter-green': '#277e69',
        'pf-light-coral': '#ff7171',
        'pf-purple-accent': '#8075ff',
        'pf-brand-fill': 'hsl(320 100% 40%)',
        'pfbrand-stroke': 'hsl(320 100% 40%)'

      },
      screens: {
        desktop: '820px'
      }
    },
  },
  plugins: [],
};
export default config;
