import {Meta, Story} from '@storybook/react/types-6-0';

import {Footer} from '.';

const data = {
  title: 'Footer',
  component: Footer,
  argTypes: {},
} as Meta;

export default data;

export const Defoult: Story = (args) => <Footer {...args} />;
