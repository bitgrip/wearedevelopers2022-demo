import { render, screen  } from '../../test/test-utils';
import { List } from './List';

/**
 * @group unit
 */

const list = [
  {
    jobid: "001",
    key: "frontend",
    link: "/#",
    title: "Frontend-Entwickler (w/m/d)",
    tag: "Frontend",
  },
];

const listItemIsNotInTheDocument = () => {
  expect(screen.getByRole('list')).toBeInTheDocument();
  expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
};

test('should render list item with correct: title, tag, link', () => {
  render(<List list={list} type="list" />);
  expect(screen.getByRole('listitem')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(1);
  expect(screen.getByText('Frontend').closest('a')).toHaveAttribute('href', '/#');
  expect(screen.getByText('Frontend')).toHaveClass('tags--frontend');
  expect(screen.getByText('Frontend-Entwickler (w/m/d)')).toBeInTheDocument();
});

describe('should not render list item, if any of properties is missing:', () => {
  test('jobid', () => {
    /* @ts-expect-error */
    render(<List list={[{ ...list[0], jobid: null }]} type="list" />);
    listItemIsNotInTheDocument();
  });

  test('key', () => {
    render(<List list={[{ ...list[0], key: '' }]} type="list" />);
    listItemIsNotInTheDocument();
  });

  test('link', () => {
    render(<List list={[{ ...list[0], link: '' }]} type="list" />);
    listItemIsNotInTheDocument();
  });

  test('title', () => {
    /* @ts-expect-error */
    render(<List list={[{ ...list[0], title: undefined }]} type="list" />);
    listItemIsNotInTheDocument();
  });

  test('tag', () => {
    /* @ts-expect-error */
    render(<List list={[{ ...list[0], tag: undefined }]} type="list" />);
    listItemIsNotInTheDocument();
  });
});
