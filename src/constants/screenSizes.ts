export const size = {
  mobileS: '480px',
  mobileL: '896px',
  tablet: '768px',
  tabletM: '600px',
  tabletL: '991px',
  laptopS: '1024px',
  laptopL: '1280px',
  laptopXL: '1366px',
  laptopMac: '1440px',
  desktop: '1920px'
}

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  tabletM: `(max-width: ${size.tabletM})`,
  tabletL: `(max-width: ${size.tabletL})`,
  laptopS: `(max-width: ${size.laptopS})`,
  laptopL: `(max-width: ${size.laptopL})`,
  laptopXL: `(max-width: ${size.laptopXL})`,
  laptopMac: `(max-width: ${size.laptopMac})`,
  desktop: `(max-width: ${size.desktop})`,
};

export const responsiveConfig = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 481 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: 1,
  },
};