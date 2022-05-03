import axios from "axios";
import { FC } from "react";
import useSWR from "swr";
import { Placement } from "../../types/layout/Placement";

const fetcher = (url: string) => axios.get(url).then((res) => res.data.data);

export interface RelatedSectionProps {
  path: string;
}

export const RelatedSection: FC<RelatedSectionProps> = ({ path }) => {
  const params = new URLSearchParams();
  params.append("site", "de-de");
  params.append("path", path);
  params.append("placement", "related");

  const apiPath: string = "/api/placement?" + params.toString();

  const { data, error } = useSWR(apiPath, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data)
    return (
      <div>
        <i>No related placement</i>
      </div>
    );

  const placement: Placement = data;

  return (
    <div>
      <p>{JSON.stringify(placement)}</p>
    </div>
  );
};

export default RelatedSection;
