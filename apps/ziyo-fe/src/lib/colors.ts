import defaultColors from 'tailwindcss/colors';

import tailwindConfig from '../../tailwind.config';

export const colors = {
  ...defaultColors,
  ...tailwindConfig.theme?.extend?.colors,
};
