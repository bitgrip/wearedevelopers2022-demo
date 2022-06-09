import { render, screen  } from '../../test/test-utils';
import { List } from './List';
import { single, singleListWithEmptyId, singleListWithEmptyKey, singleListWithEmptyLink, singleListWithEmptyTitle, singleListWithEmptyTag } from './List.mock';

/**
 * @group unit/component
 */

// Let's test the crucial parts and functionalities of a List
// have a meaningful test description
describe('should render a list with correct properties:', () => {
  // render list instance before every test
  /*
  beforeEach(() => {
    render(<List {...single} />);
  });
  */

  // test, if we get the expected number of list items
  test('list items', () => {
    
    //expect(screen.getAllByRole('listitem')).toHaveLength(1);
  });

  // test, if we get the correct title
  test('title', () => {
    
    //expect(screen.getByText(single.list[0].title)).toBeInTheDocument();
  });

  // test, if we use the functionality link
  // The only test, where we use the HTML tag, because we test the link functionality
  test('link', () => {
    
    //expect(screen.getByText(single.list[0].title).closest('a')).toHaveAttribute('href', single.list[0].link);
  });

  // test, if we use the correct class for the styling of the tag
  test('tag with css class', () => {
    
    // expect(screen.getByText(single.list[0].tag)).toHaveClass('tags--default');
  });
});

// Negative tests - it's important also to test, what happens, if there is some data missing!
describe('should not render list item, if any of properties is missing:', () => {
  // helper function
  const listItemIsNotInTheDocument = () => {
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  };

  // use meaningful variable names
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
