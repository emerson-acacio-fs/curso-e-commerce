import {Meta, Story} from '@storybook/react/types-6-0';

import { Highlight } from '.';

const data = {
  title: 'Highlight',
  component: Highlight,
  argTypes: {},
} as Meta;

export default data;

export const Defoult: Story = (args) => <Highlight {...args} />;

