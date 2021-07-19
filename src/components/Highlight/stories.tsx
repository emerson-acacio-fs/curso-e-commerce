import {Meta, Story} from '@storybook/react/types-6-0';

import {Highlight, HighlightProps} from '.';

const data = {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead it’s back',
    subtitle: 'Come see John’s new adventures',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2',
    backgroundImage: '/img/red-dead-img.jpg',
  },
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
