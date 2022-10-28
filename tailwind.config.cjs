/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    fontFamily: {
      'comforter': ['Comforter Brush', 'cursive'],
    },
    extend: {
      backgroundImage: {
        'arbre': "url('/arbre.png')",
        'nuage1': "url('/nuage 1.png')",
        'nuage2': "url('/nuage 2.png')",
        'tour': "url('/tour chinoise.png')",
        'fond': "url('/fond.png')",
        'fond6': "url('/fond 6.png')",
        'fond5': "url('/fond 5 cone.png')",
        'fond4': "url('/fond 4.png')",
        'fond3': "url('/fond 3.png')",
        'fond2': "url('/fond 2.png')",
        'moutain': "url('/moutain fond 1.png')",
        'arrow': "url('data:image/svg+xml;utf8,<svg width='100' height='50' xmlns='http://www.w3.org/2000/svg'><polygon points='0,0 100,0 50,50' style='fill:%23FFFFFF99;' /></svg>')",
      },
    },
  },
  plugins: [],
}
