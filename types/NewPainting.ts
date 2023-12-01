import {StaticImageData} from "next/image";

export type NewPainting = {
  name: string,
  image: Blob,
  link?: string
  id?: number
}