import { FC, useState } from "react";
import { List } from '../List/List';
import { IJobSearch, IFilter } from "../../types/elements/JobSearch";
import {Interweave} from "interweave";

export const JobSearch: FC<IJobSearch> = ({ list, filterList }) => {

  const [visibleJobList, setVisibleJobList] = useState(list);

  const [filter, updateFilter] = useState<IFilter[]>( filterList ?
    [
      { id: 'all', type: 'all', label: 'all', isChecked: true },
      ...filterList
    ] : []
  );
  const [filterId, updateFilterId] = useState<string>('all');

  const handleFilterClick = (type: string) => {
    updateFilter(state =>
      state.map(f => {
        if (f.label === type) {
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
    updateFilterId(type);

    if (type == 'all') {
      setVisibleJobList(list);
    } else {
      setVisibleJobList(list.filter(job => job.key == type))
    }
  };

  // TODO: styles
  const noOffersMessage = (
    <p className="stage__text spacing--top-60">
      <Interweave content="No offers at the moment" />
    </p>
  );

  return (
    <div>
      {filter && filter.length > 0 && (
        <div className="grid">
          <div className="filterbar">
            {filter.map((filterItem, filterIndex) => (
              <button
                className={`tags filter-btn--${filterItem.type} ${filterItem.isChecked ? 'filter-btn--active' : ''}`}
                onClick={() => handleFilterClick(filterItem.type)}
                key={filterIndex}
              >
                {filterItem.label}
              </button>
            ))}
          </div>
        </div>
      )}
      {visibleJobList.length ? <List id={''} type={''} list={visibleJobList}/> : noOffersMessage}
    </div >
  );
};
