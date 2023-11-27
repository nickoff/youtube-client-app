import { CardItem } from './card-item.model';

export interface SearchResponse<T = CardItem[]> {
  kind: string;
  etag: string;
  nextPageToken?: string,
  regionCode?: string,
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  }
  items: T;
}
