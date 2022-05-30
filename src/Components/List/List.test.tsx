import { render, screen  } from '../../test/test-utils';
import { List } from './List';
import { single, singleWithEmptyId, singleWithEmptyKey, singleWithEmptyLink, singleWithEmptyTitle, singleWithEmptyTag } from './List.mock';

/**
 * @group unit
 */

const listItemIsNotInTheDocument = () => {
  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
};

test('should render list item with correct: title, tag, link', () => {
  render(<List {...single} />);
  expect(screen.getByRole('listitem')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(1);
  expect(screen.getByText('Frontend').closest('a')).toHaveAttribute('href', '/#');
  expect(screen.getByText('Frontend')).toHaveClass('tags--frontend');
  expect(screen.getByText('Frontend-Entwickler (w/m/d)')).toBeInTheDocument();
});

describe('should not render list item, if any of properties is missing:', () => {
  test('jobid', () => {
    render(<List {...singleWithEmptyId} />);
    listItemIsNotInTheDocument();
  });

  test('key', () => {
    render(<List {...singleWithEmptyKey} />);
    listItemIsNotInTheDocument();
  });

  test('link', () => {
    render(<List {...singleWithEmptyLink} />);
    listItemIsNotInTheDocument();
  });

  test('title', () => {
    render(<List {...singleWithEmptyTitle} />);
    listItemIsNotInTheDocument();
  });

  test('tag', () => {
    render(<List {...singleWithEmptyTag} />);
    listItemIsNotInTheDocument();
  });
});
