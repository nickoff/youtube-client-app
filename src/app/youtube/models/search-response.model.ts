import { CardItem } from './card-item.model';

export interface SearchResponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  }
  items: CardItem[];
}
