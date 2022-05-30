import { FC, useState } from "react";
import { List } from '../List/List';
import { IJobSearch, IFilter, FilterType } from "../../types/elements/JobSearch";
import { Richtext } from "../Richtext/Richtext";
import { Filterbar } from "../Filterbar/Filterbar";

export const JobSearch: FC<IJobSearch> = ({ list, filterList }) => {

  const [visibleJobList, setVisibleJobList] = useState(list);

  const [filter, updateFilter] = useState<IFilter[]>( filterList ?
    [
      { id: 'all', type: 'all', label: 'all', isChecked: true },
      ...filterList
    ] : []
  );
  const handleFilterClick = (type: FilterType) => {
    updateFilter(state =>
      state.map(f => {
        if (f.type === type) {
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

    if (type == 'all') {
      setVisibleJobList(list);
    } else {
      setVisibleJobList(list.filter(job => job.key == type))
    }
  };

  const noOffersMessage = (
    <div className="grid">
      <Richtext className="no-results" content="No offers at the moment" />
    </div>
  );

  return (
    <div>
      <Filterbar filterList={filter} onClick={(filterItemType: FilterType) => handleFilterClick(filterItemType)} />
      {visibleJobList.length ? <List id={''} type={''} list={visibleJobList}/> : noOffersMessage}
    </div >
  );
};
