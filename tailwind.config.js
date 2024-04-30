/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    colors: {
      "primary-yellow": "hsl(47, 88%, 63%)",
      white: "hsl(0, 0%, 100%)",
      grey: "hsl(0, 0%, 50%)",
      black: "hsl(0, 0%, 7%)",
    },
    maxWidth: {
      card: "384px",
    },
    dropShadow: {
      card: "8px 8px hsl(0, 0%, 7%)",
      "card-hover": "16px 16px hsl(0, 0%, 7%)",
    },
    screens: {
      sm: "425px",
    },
    fontSize: {
      xl: [
        "24px",
        {
          lineHeight: 1.5,
          fontWeight: 800,
        },
      ],
      lg: [
        "20px",
        {
          lineHeight: 1.5,
          fontWeight: 800,
        },
      ],
      body: [
        "16px",
        {
          lineHeight: 1.5,
          fontWeight: 500,
        },
      ],
      "body-sm": [
        "14px",
        {
          lineHeight: 1.5,
          fontWeight: 500,
        },
      ],
      "blog-author": [
        "14px",
        {
          lineHeight: 1.5,
          fontWeight: 800,
        },
      ],
      "blog-genre": [
        "14px",
        {
          lineHeight: 1.5,
          fontWeight: 800,
        },
      ],
      "blog-genre-sm": [
        "12px",
        {
          lineHeight: 1.5,
          fontWeight: 800,
        },
      ],
    },
    extend: {
      borderRadius: {
        card: "20px",
        "card-image": "10px",
      },
    },
  },
  plugins: [],
};
