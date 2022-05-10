import { AxiosResponse } from "axios";

export type ApiClientResponse = Pick<AxiosResponse, "status" | "data">;
