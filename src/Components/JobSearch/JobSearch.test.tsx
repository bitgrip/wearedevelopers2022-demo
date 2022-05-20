import { render, screen  } from '../../test/test-utils';
import userEvent from '@testing-library/user-event';
import { JobSearch } from './JobSearch';
import { multi } from './JobSearch.mock';

/**
 * @group func
 */

beforeEach(() => {
  render(<JobSearch { ...multi } />);
});

describe('buttons', () => {
  test('should render 8 buttons', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(8);
  });

  test('the first button should have label "all"', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveTextContent('all');
  });
});

describe('filtering', () => {
  test('should filter frontend jobs', async () => {
    const frontendButton = screen.getByRole('button', { name: 'Frontend' });
    const allButton = screen.getByRole('button', { name: 'all' });

    expect(screen.getAllByRole('listitem')).toHaveLength(7);

    await userEvent.click(frontendButton);
    expect(screen.getAllByRole('listitem')).toHaveLength(2);

    await userEvent.click(allButton);
    expect(screen.getAllByRole('listitem')).toHaveLength(7);
  });

  test('should display a message, if no offers are found', async () => {
    const poButton = screen.getByRole('button', { name: 'PO' });
    await userEvent.click(poButton);
    expect(screen.getByText('No offers at the moment')).toBeInTheDocument();
  });
});
