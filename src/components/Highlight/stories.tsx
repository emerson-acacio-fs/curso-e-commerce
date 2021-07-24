import {Meta, Story} from '@storybook/react/types-6-0';

import {Highlight, HighlightProps} from '.';
import item from './mock';

const data = {
  title: 'Highlight',
  component: Highlight,
  args: {...item},
} as Meta;

export default data;

export const Default: Story<HighlightProps> = (args) => (
  <div style={{maxWidth: '104rem'}}>
    <Highlight {...args} />
  </div>
);

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{maxWidth: '104rem'}}>
    <Highlight {...args} />
  </div>
);

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png',
};
