export interface Talk {
  _id: string;

  title: string;

  type:
    | "Invited"
    | "Oral"
    | "Poster";

  event: string;

  location: string;

  date: string;

  year: number;

  description: string;

  link?: string;
}