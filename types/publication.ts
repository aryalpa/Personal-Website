export interface Publication {
  _id: string;

  title: string;

  authors: string;

  journal: string;

  image?: any;

  year: number;

  type: "Journal" | "Conference" | "Review" | "Book Chapter" | "Research Article";

  link: string;

  keywords: string[];
}