// Referenced by: components/layout/footer/Footer.astro, components/layout/header/Header.astro
// Centralized spacing system for consistent spacing throughout the application

// Component-specific spacing
export const componentConfiguration = {
  hero:{
    margin: 'mb-7 md:my-0 mx-auto',
    padding: 'px-6',
    scale: '40%',
    other: 'theme-transition container'
  },
  user:{
    margin: 'my-10 lg:mt-5 md:my-7 lg:my-15 ',
    padding: 'py-7',
    scale: 'scale-100 md:scale-80'
  },
  cards:{
    margin: 'mt-10 md:mt-30',
    padding: ' px-6',
    scale: '',
    other: 'container'
  },
  about:{
    margin: '',
    padding: '',
    scale: ''
  },
  footer:{
    margin: '',
    padding: '',
    scale: ''
  },


  // Header spacing
  // header: {
  //   margin: {
  //     top: {
  //       mobile: '0.5rem',
  //       desktop: '1rem'
  //     },
  //     bottom: {
  //       mobile: '0.5rem',
  //       desktop: '1rem'
  //     }
  //   },
  //   padding: {
  //     x: {
  //       mobile: '1rem',
  //       tablet: '1.5rem',
  //       desktop: '2rem'
  //     },
  //     y: '1rem'
  //   }
  // },
  
  // // Footer spacing
  // footer: {
  //   margin: {
  //     top: '3rem'
  //   },
  //   padding: {
  //     x: {
  //       mobile: '1rem',
  //       tablet: '1.5rem',
  //       desktop: '2rem'
  //     },
  //     y: '2rem'
  //   },
  //   divider: {
  //     margin: {
  //       y: '1.5rem'
  //     }
  //   }
  // },
  
  // // Section spacing
  // section: {
  //   margin: {
  //     top: '2rem',
  //     bottom: '2rem'
  //   },
  //   padding: {
  //     x: {
  //       mobile: '1rem',
  //       tablet: '1.5rem',
  //       desktop: '2rem'
  //     },
  //     y: '2rem'
  //   }
  // },
  
  // // Card spacing
  // card: {
  //   padding: {
  //     mobile: '1rem',
  //     desktop: '1.5rem'
  //   },
  //   gap: '1rem'
  // }
};

// Spacing scale (for general use)
// export const spacing = {
//   '0': '0',
//   '1': '0.25rem',
//   '2': '0.5rem',
//   '3': '0.75rem',
//   '4': '1rem',
//   '5': '1.25rem',
//   '6': '1.5rem',
//   '8': '2rem',
//   '10': '2.5rem',
//   '12': '3rem',
//   '16': '4rem',
//   '20': '5rem',
//   '24': '6rem',
//   '32': '8rem',
//   '40': '10rem',
//   '48': '12rem',
//   '56': '14rem',
//   '64': '16rem',
// };

// // Gap scale (for flex and grid gaps)
// export const gap = {
//   '0': '0',
//   'xs': '0.25rem',
//   'sm': '0.5rem',
//   'md': '1rem',
//   'lg': '1.5rem',
//   'xl': '2rem',
//   '2xl': '3rem',
//   '3xl': '4rem',
// };
