import {Meta, Story} from '@storybook/react/types-6-0';
import {Email} from '@styled-icons/material-outlined';
import {TextField, TextFieldProps} from '.';

const data = {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    name: 'Email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
    icon: <Email />,
  },
  argTypes: {
    onInputChange: {action: 'changed'},
  },
} as Meta;

export default data;

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{maxWidth: 300, padding: 15}}>
    <TextField {...args} />
  </div>
);
