// these sizes are arbitrary and you can set them to whatever you wish
import { css } from 'styled-components';

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 480,
  iphone: 376,
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  const emSize = sizes[label] / 16;
  const accumulator = Object.assign({}, acc);

  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});
