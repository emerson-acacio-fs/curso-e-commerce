import {screen} from '@testing-library/react';
import {Spinner} from '.';
import {render} from 'utils/test-utils';

describe('<Spinner />', () => {
  it('Should render correctly', () => {
    render(<Spinner />);

    expect(screen.getByTitle(/loading/i)).toBeInTheDocument();
  });
});
