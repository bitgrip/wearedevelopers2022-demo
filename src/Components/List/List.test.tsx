import { render, screen  } from '../../test/test-utils';
import { List } from './List';
import { single, singleWithEmptyId, singleWithEmptyKey, singleWithEmptyLink, singleWithEmptyTitle, singleWithEmptyTag } from './List.mock';

/**
 * @group unit/component
 */

const listItemIsNotInTheDocument = () => {
  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
};

describe('should render a list with correct properties:', () => {
  beforeEach(() => {
    render(<List {...single} />);
  });

  test('list items', () => {
    expect(screen.getAllByRole('listitem')).toHaveLength(1);
  });

  test('link', () => {
    expect(screen.getByText('Frontend').closest('a')).toHaveAttribute('href', '/#');
  });

  test('CSS class', () => {
    expect(screen.getByText('Frontend')).toHaveClass('tags--frontend');
  });

  test('title', () => {
    expect(screen.getByText('Frontend-Entwickler (w/m/d)')).toBeInTheDocument();
  });
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
