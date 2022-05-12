import { render, screen } from '../../test/test-utils';
import { JobSearch } from './JobSearch';
import { multi } from './JobSearch.mock';


describe('buttons', () => {
  beforeEach(() => {
    render(<JobSearch { ...multi } />);
  });

  test('should render 8 buttons', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(8);
  });

  test('the first button should have label "all"', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveTextContent('all');
  });
});
