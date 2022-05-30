import { render, screen  } from '../../test/test-utils';
import { Filterbar } from './Filterbar';
import { filterList } from './Filterbar.mock';

/**
 * @group unit/component
 */

beforeEach(() => {
  render(<Filterbar filterList={ filterList } />);
});

describe('filter buttons', () => {
  test('should render 8 buttons', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(7);
  });

  test('the first button should have label "Skipper"', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveTextContent('Skipper');
  });
});
