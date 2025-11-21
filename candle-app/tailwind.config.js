module.exports = {
content: [
"./src/**/*.{js,jsx,ts,tsx}"
],
theme: {
extend: {
fontFamily: {
poppins: ["Poppins", "sans-serif"],
inter: ["Inter", "sans-serif"],
},
animation: {
slide: "slide 9s linear infinite",
},
keyframes: {
slide: {
"0%": { transform: "translateX(100%)" },
"100%": { transform: "translateX(-100%)" },
},
},
},
},
plugins: [],
};
