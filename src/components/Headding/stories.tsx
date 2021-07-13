import {Meta, Story} from '@storybook/react/types-6-0';

import {Heading, HeadingProps} from '.';

const data = {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta;

export default data;

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />;

Default.args = {
  children: 'Most Populars',
  color: 'black',
};
