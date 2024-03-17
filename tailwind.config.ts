import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", 
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        'dark' :  '#202022',
        'light': '#efe7da',
        'header' : '#f4ede3',
        'menu' : '#2e3748',
        'menuActivited' : '#434345',
        'fondoClime' :'#28545f'
      }
    },
    
  },
  plugins: [],
};
export default config;
