import {Meta, Story} from '@storybook/react/types-6-0';

import {PaymentOptions, PaymentOptionsProps} from '.';

import cardsMock from './mock';

const data = {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: cardsMock,
  },
  argTypes: {
    cards: {
      type: '',
    },
    handlePayment: {
      action: 'clicked',
    },
  },
  parameters: {
    backgrounds: {
      default: 'won-dark',
    },
  },
} as Meta;

export default data;

export const Default: Story<PaymentOptionsProps> = (args) => (
  <div style={{padding: 16, maxWidth: 400}}>
    <PaymentOptions {...args} />
  </div>
);
