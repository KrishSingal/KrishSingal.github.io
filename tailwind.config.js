/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./blog.html", "blog_posts/book_reviews.html"],
  theme: {
    extend: {},
    fontWeight: {
        ultrathin: '49',
        thin: '100',
        hairline: '100',
        extralight: '200',
        mediumlight: '250',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
    },
    wordSpacing: { // custom key
      tight: '-0.05em',
      normal: '0em',
      wide: '0.05em',
    },
  },
  plugins: [],
}

