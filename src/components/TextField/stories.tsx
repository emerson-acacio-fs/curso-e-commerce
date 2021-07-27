import {Meta, Story} from '@storybook/react/types-6-0';

import {TextField, TextFieldProps} from '.';

const data = {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    id: 'Email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
  },
  argTypes: {
    onInput: {action: 'changed'},
  },
} as Meta;

export default data;

export const Defoult: Story<TextFieldProps> = (args) => (
  <div style={{maxWidth: 300, padding: 15}}>
    <TextField {...args} />
  </div>
);
