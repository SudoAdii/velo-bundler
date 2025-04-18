/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        float0: 'float 6s ease-in-out infinite',
        float1: 'float 7s ease-in-out infinite',
        float2: 'float 8s ease-in-out infinite',
        float3: 'float 5s ease-in-out infinite',
        float4: 'float 9s ease-in-out infinite',
        float5: 'float 10s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
