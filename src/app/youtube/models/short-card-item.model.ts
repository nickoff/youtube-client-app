export interface ShortCardItem {
  etag: string;
  id: Id;
  kind: string;
  snippet: Snippet;
}

type Id = {
  kind: string;
  videoId: string;
};

interface Snippet {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: string;
  publishedAt: string;
  thumbnails: Thumbnails;
  title: string;
}


interface ThumbnailProperties {
  url: string;
  width: number;
  height: number;
}

interface Thumbnails<T = ThumbnailProperties> {
  default: T;
  medium: T;
  high: T;
}
