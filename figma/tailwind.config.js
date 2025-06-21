/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          "collection-1-brown1": "var(--collection-1-brown1)",
          "collection-1-brown2": "var(--collection-1-brown2)",
          "collection-1-orange": "var(--collection-1-orange)",
        },
      },
    },
    plugins: [],
  };