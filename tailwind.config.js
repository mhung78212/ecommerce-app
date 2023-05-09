/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                rubik: ["Rubik", "sans-serif"],
                rajdhani: ["Rajdhani", "sans-serif"],
            },
            colors: {
                primary: "#f2a100",
                secondary: "#e9e1f7",
                black: "#252c51",
                white: "#fff",
                gray: '#494949'
            },
            container: {
                center: true,
                screens: {
                    lg: "1200px",
                },
            },
            spacing: {},
            fontSize: {
                25: '25px',
                16: '16px',
            },
            lineHeight: {},
        },
    },
    plugins: [],
};
