import {Meta, Story} from '@storybook/react/types-6-0';
import {AddShoppingCart} from '@styled-icons/material-outlined/AddShoppingCart';
import {Button} from '.';

const data = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    icon: {
      type: '',
    },
  },
} as Meta;

export default data;

export const Default: Story = (args) => <Button {...args} />;

Default.args = {
  children: 'Bay now',
};
export const withIcon: Story = (args) => <Button {...args} />;

withIcon.args = {
  size: 'small',
  children: 'Bay now',
  icon: <AddShoppingCart />,
};

export const asLink: Story = (args) => <Button {...args} />;

asLink.args = {
  size: 'large',
  children: 'Bay now',
  as: 'a',
  href: '/link',
};
