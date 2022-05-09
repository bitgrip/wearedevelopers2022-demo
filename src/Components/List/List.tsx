import { FC, useState } from "react";

export interface ListProps {
  jobs: {
    key: string;
    link: string;
    tag: string;
    title: string;
  }[];
  filterList?: Array<{ id: string; label: string; isChecked?: boolean }>;
}

export const List: FC<ListProps> = ({ jobs, filterList }) => {

  const [visibleJobList, setVisibleJobList] = useState(jobs);
  const [tagList, setTagList] = useState();

   const [filter, updateFilter] = useState<{ id: string; label: string; isChecked?: boolean }[]>([
    { id: 'all', label: 'all', isChecked: true },
  ]);
  const [filterId, updateFilterId] = useState<string>('all');

  const handleFilterClick = (id: string) => {
    updateFilter(state =>
      state.map(f => {
        if (f.label === id) {
          return {
            ...f,
            isChecked: true,
          };
        } else {
          return {
            ...f,
            isChecked: false,
          };
        }
      })
    );
    updateFilterId(id);

    if (id == 'all') {
      setVisibleJobList(jobs);
    } else {
      setVisibleJobList(jobs.filter(job => job.key == id))
    }
  };


  return (
    <div className="list-module grid w-dyn-list">
      {filterList && filterList.length > 0 && (
        <div>
          <button type="button" onClick={() => handleFilterClick('all')}>
            alle
          </button>
          {filterList.map((filterItem, filterIndex) => (
            <button
              onClick={() => handleFilterClick(filterItem.id)}
              key={filterIndex}
            >
              {filterItem.label}
            </button>
          ))}
        </div>
      )}
      <ul id="w-node-_2961950a-26e2-b33e-94f5-2c82399e77c4-a618e4fa" role="list" className="link-list w-dyn-items">
        {visibleJobList.map((job, index) => (
          <li role="listitem" className="link-list__item w-dyn-item" key={index}>
            <a href={job.link} className="link-list__link w-inline-block">
              <div className="link-list__category">
                <div className="tags">{job.tag}</div>
              </div>
              <div className="link-list__title">{job.title}</div>
              <div className="link-list__description">[m/w/x]</div>
            </a>
          </li>
        ))}
      </ul>
    </div >
  );
};