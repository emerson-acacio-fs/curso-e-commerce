import {Meta, Story} from '@storybook/react/types-6-0';

import {Checkbox, CheckboxProps} from '.';

const data = {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark',
    },
  },
  argTypes: {
    onCheck: {action: 'checked'},
  },
} as Meta;

export default data;

export const Defoult: Story<CheckboxProps> = (args) => (
  <>
    <div style={{padding: 10}}>
      <Checkbox
        name="category"
        label="Action"
        labelFor="action"
        isChecked
        {...args}
      />
    </div>
    <div style={{padding: 10}}>
      <Checkbox
        name="category"
        label="Adventure"
        labelFor="adventure"
        {...args}
      />
    </div>
    <div style={{padding: 10}}>
      <Checkbox
        name="category"
        label="Strategy"
        labelFor="strategy"
        {...args}
      />
    </div>
  </>
);
