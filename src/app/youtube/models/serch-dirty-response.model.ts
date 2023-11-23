import { ShortCardItem } from "./short-card-item.model";

export interface SearchDirtyResponse {
  kind: string,
  etag: string,
  nextPageToken: string,
  regionCode: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number
  },
  items: ShortCardItem[]
}
