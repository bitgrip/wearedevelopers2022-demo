import { render, screen  } from '../../test/test-utils';
import { List } from './List';
import { single, singleListWithEmptyId, singleListWithEmptyKey, singleListWithEmptyLink, singleListWithEmptyTitle, singleListWithEmptyTag } from './List.mock';

/**
 * @group unit/component
 */

// helper function
const listItemIsNotInTheDocument = () => {
  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
};

// Let's test the crucial parts and functionalities of a List
describe('should render a list with correct properties:', () => {
  beforeEach(() => {
    render(<List {...single} />);
  });

  test('list items', () => {
    expect(screen.getAllByRole('listitem')).toHaveLength(1);
  });

  test('title', () => {
    expect(screen.getByText(single.list[0].title)).toBeInTheDocument();
  });

  // The only test, where we decided to use HTML tag, because we test the link functionality
  test('link', () => {
    expect(screen.getByText(single.list[0].title).closest('a')).toHaveAttribute('href', single.list[0].link);
  });

  test('tag with css class', () => {
    expect(screen.getByText(single.list[0].tag)).toHaveClass('tags--default');
  });
});

// Negative tests - it's important also to test, what happens, if there is some data missing!
describe('should not render list item, if any of properties is missing:', () => {
  test('jobid', () => {
    render(<List {...singleListWithEmptyId} />);
    listItemIsNotInTheDocument();
  });

  test('key', () => {
    render(<List {...singleListWithEmptyKey} />);
    listItemIsNotInTheDocument();
  });

  test('link', () => {
    render(<List {...singleListWithEmptyLink} />);
    listItemIsNotInTheDocument();
  });

  test('title', () => {
    render(<List {...singleListWithEmptyTitle} />);
    listItemIsNotInTheDocument();
  });

  test('tag', () => {
    render(<List {...singleListWithEmptyTag} />);
    listItemIsNotInTheDocument();
  });
});
