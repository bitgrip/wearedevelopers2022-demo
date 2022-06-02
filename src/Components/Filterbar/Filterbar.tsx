import { FC } from "react";
import { IFilter } from "../../types/elements/JobSearch";

interface IFilterbar {
  filterList: IFilter[];
  /**
   * Wird nach dem Klick auf den Button aufgerufen.
   *
   * @default () => {}
   */
  onClick?(arg: string): void;
}

export const Filterbar: FC<IFilterbar> = ({
  filterList,
  onClick = () => {},
}) => {
  return (
    <div className="grid">
      <div className="filterbar">
        {filterList.map((filterItem, filterIndex) => (
          <button
            className={`tags filter-btn--${filterItem.type} ${
              filterItem.isChecked ? "filter-btn--active" : ""
            }`}
            onClick={() => onClick(filterItem.type)}
            key={filterIndex}
          >
            {filterItem.label}
          </button>
        ))}
      </div>
    </div>
  );
};
