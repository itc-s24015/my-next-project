import { createClient } from "microcms-js-sdk";
import type{
  MicroCMSQueries,
  MicroCMDImage,
  MicroCMSListContet,
} from "microcms-js-sdk";
export type Member = {
  name: string;
  position: string;
  profile: string;
  image: MicroCMDImage;
} & MicroCMSListContet;

export type category ={
  name: string;
}
export type News = {
  id: string;
  title: string;
  category: {
    name: string;
  };
  publishedAt: string;
  createdeat: string;
};