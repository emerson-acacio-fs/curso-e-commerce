import {Meta, Story} from '@storybook/react/types-6-0';

import {Main} from '.';

const data = {
  title: 'Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'description default',
  },
} as Meta;

export default data;

export const Basic: Story = (args) => <Main {...args} />;
Basic.args = {
  title: 'title basic',
  description: 'description basic',
};

export const Default: Story = (args) => <Main {...args} />;
