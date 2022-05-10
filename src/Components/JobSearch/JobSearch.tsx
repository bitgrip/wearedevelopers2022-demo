import { FC, useState } from "react";
import { List } from '../List/List';
import { IJobSearch } from "../../types/elements/JobSearch";

export const JobSearch: FC<IJobSearch> = ({ list, filterList }) => {

  const [visibleJobList, setVisibleJobList] = useState(list);
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
      setVisibleJobList(list);
    } else {
      setVisibleJobList(list.filter(job => job.key == id))
    }
  };

  return (
    <div>
      {filterList && filterList.length > 0 && (
        <div className="grid">
          <div className="filterbar">
            <button className="btn" type="button" onClick={() => handleFilterClick('all')}>
              alle
            </button>
            {filterList.map((filterItem, filterIndex) => (
              <button
                className="btn"
                onClick={() => handleFilterClick(filterItem.id)}
                key={filterIndex}
              >
                {filterItem.label}
              </button>
            ))}
          </div>
        </div>
      )}
      <List list={visibleJobList} />
    </div >
  );
};
