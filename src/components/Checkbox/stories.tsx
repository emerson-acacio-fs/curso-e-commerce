import {Meta, Story} from '@storybook/react/types-6-0';

import {Checkbox, CheckboxProps} from '.';

const data = {
  title: 'Checkbox',
  component: Checkbox,
  args: {
    label: 'ddddddd',
    labelFor: 'ssss',
    labelColor: 'white',
  },
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export default data;

export const Defoult: Story<CheckboxProps> = (args) => <Checkbox {...args} />;
