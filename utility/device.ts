import size from './deviceSize';

const device = {
    mobileS: {
        min: `(min-width: ${size.mobileS.min})`,
        max: `(max-width: ${size.mobileS.max})`,
    },
    mobileM: {
        min: `(min-width: ${size.mobileM.min})`,
        max: `(max-width: ${size.mobileM.max})`,
    },
    mobileL: {
        min: `(min-width: ${size.mobileL.min})`,
        max: `(max-width: ${size.mobileL.max})`,
    },
    tablet: {
        min: `(min-width: ${size.tablet.min})`,
        max: `(max-width: ${size.tablet.max})`,
    },
    laptop: {
        min: `(min-width: ${size.laptop.min})`,
        max: `(max-width: ${size.laptop.max})`,
    },
    laptopL: {
        min: `(min-width: ${size.laptopL.min})`,
        max: `(max-width: ${size.laptopL.max})`,
    },
    desktop: {
        min: `(min-width: ${size.desktop.min})`,
        max: `(max-width: ${size.desktop.max})`,
    },
};

export default device;
