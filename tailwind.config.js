/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        colors: {
            'brand': {
                100: '#BA4949',
                200: '#ffffff',
                300: '#555555',
                400: '#dedede'
            }
        },
        fontFamily: {
          "poppins" : ['Poppins'],
        }
    },
    plugins: [],
}

