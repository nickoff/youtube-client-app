export interface CardItemModel {
  id: string;
  image: string;
  title: string;
  isActions?: boolean;
  description?: string;
  publishedAt: string;
  isCustomCard: boolean;
  statistics?: StatisticsModel <string>;
  isFavorite?: boolean;
}

export type ActionModel = {
  name: string;
  count: string;
};

interface StatisticsModel <T> {
  viewCount: T;
  likeCount: T;
  dislikeCount: T;
  favoriteCount: T;
  commentCount: T;
}
