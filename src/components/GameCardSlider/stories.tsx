import {Meta, Story} from '@storybook/react/types-6-0';

import {GameCardSlider, GameCardSliderProps} from '.';
import items from './mock';

const data = {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: {items},
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export default data;

export const Default: Story<GameCardSliderProps> = (args) => (
  <div style={{maxWidth: '130rem', margin: '0 auto'}}>
    <GameCardSlider {...args} />
  </div>
);
