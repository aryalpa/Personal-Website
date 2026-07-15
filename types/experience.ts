export interface Experience {
  _id: string;

  position: string;

  institution: string;

  category:
    | "Research"
    | "Teaching"
    | "Professional";

  duration: string;

  highlights: string[];

  skills: string[];
}