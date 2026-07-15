export interface Research {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  image: any;
  featured: boolean;
  articleLink: string;
}