export interface CardItemModel {
  id: string;
  image: string;
  title: string;
  isActions?: boolean;
  publishedAt: string;
  isCustomCard?: boolean;
  statistics?: StatisticsModel <string>
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
