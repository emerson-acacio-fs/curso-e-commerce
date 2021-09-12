import {screen} from '@testing-library/react';
import {Loader} from '.';
import {render} from 'utils/test-utils';

describe('<Loader />', () => {
  it('Should render correctly', () => {
    render(<Loader />);

    expect(screen.getByTitle(/loading/i)).toBeInTheDocument();
  });
});
