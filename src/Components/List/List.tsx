import { FC } from "react";
import { IList } from "../../types/elements/List";

export const List: FC<IList> = ({ list }) => {
  return (
    <div className="list-module grid w-dyn-list">
      <ul id="w-node-_2961950a-26e2-b33e-94f5-2c82399e77c4-a618e4fa" role="list" className="link-list w-dyn-items">
        {list.map((item, index) => (
          <li role="listitem" className="link-list__item w-dyn-item" key={index}>
            <a href={item.link} className="link-list__link w-inline-block">
              <div className="link-list__category">
                <div className={`tags tags--${item.key}`}>{item.tag}</div>
              </div>
              <div className="link-list__title">{item.title}</div>
              <div className="link-list__description">[m/w/x]</div>
            </a>
          </li>
        ))}
      </ul>
    </div >
  );
};