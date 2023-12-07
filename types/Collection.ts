import { Painting } from "./Painting";

export type Collection = {
  id: string
  name: string,
  author_id: number,
  author_name: string,
  upload_date: string,
  preview_image_url: string,
  tags: string[],
  on_sale: boolean,
  price: number,
  views: number,
  Paintings?: Painting[]
};

