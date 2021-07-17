import {Meta, Story} from '@storybook/react/types-6-0';

import {Footer} from '.';

const data = {
  title: 'Footer',
  component: Footer,
  argTypes: {},
} as Meta;

export default data;

export const Mobile: Story = (args) => (
  <div style={{maxWidth: '130rem', margin: '0 auto'}}>
    <Footer {...args} />
  </div>
);

export const Desktop: Story = (args) => (
  <div style={{maxWidth: '130rem', margin: '0 auto'}}>
    <Footer {...args} />
  </div>
);

Mobile.parameters = {
  layout: 'fullscreen',
  viewport: {
    defaultViewport: 'mobile1',
  },
};
