import {Meta, Story} from '@storybook/react/types-6-0';

import {BannerSlider, BannerSliderProps} from '.';

import items from './mock';

const data = {
  title: 'BannerSlider',
  component: BannerSlider,
  args: {items},
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export default data;

export const Default: Story<BannerSliderProps> = (args) => (
  <div style={{maxWidth: '130rem', margin: '0 auto', border: '1px solid red'}}>
    <BannerSlider {...args} />
  </div>
);
