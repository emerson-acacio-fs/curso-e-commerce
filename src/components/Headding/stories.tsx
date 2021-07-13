import {Meta, Story} from '@storybook/react/types-6-0';

import { Headding } from '.';

const data = {
  title: 'Headding',
  component: Headding,
  args: {},
} as Meta;

export default data;

export const Basic: Story = (args) => <Headding {...args} />;

