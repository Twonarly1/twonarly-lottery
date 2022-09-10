/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                xs: "425px",
            },
            colors: {
                bkg: "#f4f4f4",
                alt: "#rgb(229 231 235)",
                accent: "#f4f4f4",
            },
            fontFamily: {
                sans: ["Outfit", "sans-serif"],
                winner: ["Great Vibes", "cursive"],
            },
        },
    },
    plugins: [],
}
