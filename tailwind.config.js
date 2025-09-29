
module.exports = {
    theme: {
    extend: {
        fontFamily: {
            sans: ["Roboto", "sans-serif"],
        },
        colors: {
            primary: {
                100: 'oklch(96.8% 0.007 247.896)',
                200: 'oklch(92.9% 0.013 255.508)',
                300: 'oklch(86.9% 0.022 252.894)',
                400: 'oklch(70.4% 0.04 256.788)',
                500: 'oklch(55.4% 0.046 257.417)',
            },
            secondary: '#4682B4', // Custom secondary color
            brand: { // Custom color scale
                50: '#FDF2F8',
                100: '#FCE7F3',
                // ... more shades
                900: '#831843',
            },
        },
    },
    },
};