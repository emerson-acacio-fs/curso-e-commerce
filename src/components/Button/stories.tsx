import {Meta, Story} from '@storybook/react/types-6-0';

import {Button} from '.';

const data = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta;

export default data;

export const Defoult: Story = (args) => <Button {...args} />;

Defoult.args = {
  children: 'Bay now',
};
