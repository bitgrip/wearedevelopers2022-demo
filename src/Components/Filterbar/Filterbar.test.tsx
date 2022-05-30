import { render, screen  } from '../../test/test-utils';
import { Filterbar } from './Filterbar';
import { filterList } from './Filterbar.mock';

/**
 * @group func
 */

beforeEach(() => {
  render(<Filterbar filterList={ filterList } />);
});

describe('filter buttons', () => {
  test('should render 7 buttons', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(filterList.length);
  });

  test('the first button should have label "Skipper"', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveTextContent(filterList[0].label);
  });
});
