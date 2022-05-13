import { render, screen } from '../../test/test-utils';
import { Header } from './Header';

/**
 * @group func
 */

test('should render logo', () => {
  render(<Header />);
  expect(screen.getByText('The Bitgrip Company Logo')).toBeInTheDocument();
});
