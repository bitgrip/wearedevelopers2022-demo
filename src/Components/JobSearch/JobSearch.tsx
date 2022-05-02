import axios from "axios";
import { useRouter } from "next/router";
import React, { FC } from "react";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data.data);

export interface JobSearchProps {}

export const JobSearch: FC<JobSearchProps> = () => {
  const [searchTerm, setSearchTerm] = React.useState(undefined);
  const router = useRouter();

  const handleChange = (event: any) => {
    router.push({
      pathname: router?.query?.slug?.[0],
      query: { country: event.target.value || undefined },
    });
    setSearchTerm(event.target.value);
  };

  const params = new URLSearchParams();
  params.append("country", searchTerm || "*");
  params.append("positon", "*");
  const apiPath: string = "/api/jobs?" + params.toString();

  const { data, error } = useSWR(apiPath, fetcher);

  if (error) return <div>Failed to load</div>;
  // if (!data) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <select id="country" onChange={handleChange}>
          <option value={"germany"}>Germany</option>
          <option value={"france"}>France</option>
        </select>
      </div>
      <hr />
      <p>Jobs found for {searchTerm}:</p>
      {data ? <p>{JSON.stringify(data)}</p> : <p>No Data</p>}
    </div>
  );
};

export default JobSearch;
