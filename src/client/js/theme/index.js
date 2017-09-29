import { palettes, transparencies } from './color-palettes';
import { weights, textSettings, fontFamilies } from './fonts';

function color(level = 'primary', variant = 'base') {
  return palettes[level][variant];
}

function contrast(background = 'light', type = 'primary') {
  return transparencies[background][type];
}

function textSetting(level) {
  console.log('====================================');
  console.log(textSettings);
  console.log('====================================');
  return textSettings[level];
}

function weight(level) {
  return weights[level];
}

function fontFamily(key) {
  return fontFamilies[key];
}

export {
  color,
  contrast,
  textSetting,
  weight,
  fontFamily,
};
