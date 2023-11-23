export interface CustomCard {
  title: string;
  description: string;
  img: string;
  linkVideo: string;
  creationDate: string;
  tags: string[];
}

export interface CustomCardStateModel {
  id: string;
  customCard: CustomCard;
}

export const CustomCardState: CustomCardStateModel[] = [];
