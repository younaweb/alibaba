module.exports = {
  purge: [],
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
       width:{
         '120':'30rem'
       }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }