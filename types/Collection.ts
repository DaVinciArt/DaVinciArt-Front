import {StaticImageData} from "next/image";

export type Collection = {
  name: string,
  authorID: number,
  previewImage: StaticImageData,
  creationDate: number,
  price: number,
  status: CollectionStatus,
};

export enum CollectionStatus  {
  FOR_SALE = 'For sale',
  PRIVATE= 'Private',
}

