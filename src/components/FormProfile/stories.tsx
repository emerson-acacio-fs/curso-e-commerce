import {Meta, Story} from '@storybook/react/types-6-0';

import {FormProfile} from '.';

const data = {
  title: 'Form/FormProfile',
  component: FormProfile,
  argTypes: {},
} as Meta;

export default data;

export const Default: Story = (args) => (
  <div style={{maxWidth: 860, margin: 'auto'}}>
    <FormProfile {...args} />
  </div>
);
