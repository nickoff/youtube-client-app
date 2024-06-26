export interface CardItem<T = string> {
  kind: string;
  etag: string;
  id: T;
  snippet: Snippet;
  statistics?: Statistics;
}

export type Id = {
  kind: string;
  videoId: string;
};

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: ThumbnailData;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage?: string;
  localized: {
    title: string;
    description: string;
  }
  defaultAudioLanguage: string;
}

interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}

interface ThumbnailProperties {
  url: string;
  width: number;
  height: number;
}

interface ThumbnailData<T = ThumbnailProperties> {
  default: T;
  medium: T;
  high: T;
  standard: T;
  maxres: T;
}
