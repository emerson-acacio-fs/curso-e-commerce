import {screen} from '@testing-library/react';
import {Heading} from '.';
import {renderWithTheme} from '../../utils/tests/helpers';

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Won Games</Heading>);
    expect(screen.getByRole('heading', {name: /Won Games/i})).toHaveStyle({
      color: '#FAFAFA',
    });
  });
  it('should render a black heading by default', () => {
    renderWithTheme(<Heading color="black">Won Games</Heading>);
    expect(screen.getByRole('heading', {name: /Won Games/i})).toHaveStyle({
      color: '#030517',
    });
  });
  it('should render a white heading with a line to the left', () => {
    renderWithTheme(<Heading lineLeft>Won Games</Heading>);
    expect(screen.getByRole('heading', {name: /Won Games/i})).toHaveStyle({
      'border-left': '0.7rem solid #F231A5',
    });
  });
  it('should render a white heading with a line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>Won Games</Heading>);
    expect(screen.getByRole('heading', {name: /Won Games/i})).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {modifier: '::after'},
    );
  });
  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Won Games</Heading>);
    const element = screen.getByRole('heading', {name: /Won Games/i});
    expect(element).toHaveStyle({
      'font-size': '1.6rem',
    });
    expect(element).toHaveStyleRule('width', '3rem', {modifier: '::after'});
  });
  it('should render a heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Won Games
      </Heading>,
    );
    const heading = screen.getByRole('heading', {name: /Won Games/i});
    expect(heading).toHaveStyle({
      'border-left': '0.7rem solid #F231A5',
    });
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after',
    });
  });
});
