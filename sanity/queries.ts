export const HOME_QUERY = `
*[_type == "home"][0]{
  firstName,
  lastName,
  degree,
  description,
  profileImage,
  profileVideo,
  backgroundVideo,
  "cv": cv.asset->url,
  googleScholar,
  orcid,
  linkedin,
  email
}
`;

export const RESEARCH_QUERY = `
*[_type=="research"] | order(order asc){
  _id,
  title,
  slug,
  image,
  featured,
  articleLink
}
`;

export const NEWS_QUERY = `
*[_type == "news"] | order(_createdAt asc) {
  _id,
  title,
  subtitle,
  source,
  image,
  url
}
`;

export const PUBLICATION_QUERY = `
*[_type=="publication"] | order(order asc){
  _id,
  title,
  authors,
  journal,
  image,
  year,
  type,
  link,
  keywords
}
`;

export const PUBLICATION_PAGE_SETTINGS_QUERY = `
*[_id == "publicationPageSettings"][0]{
  citationCount
}
`;

export const TALKS_QUERY = `
*[_type=="talk"] | order(order asc){
  _id,
  title,
  type,
  event,
  location,
  date,
  year,
  description,
  link
}
`;

export const CONFERENCE_PHOTOS_QUERY = `
*[_type=="conferencePhoto"] | order(order asc){
  _id,
  title,
  image
}
`;

export const EXPERIENCE_QUERY = `
*[_type=="experience"] | order(order asc){
  _id,
  position,
  institution,
  category,
  duration,
  highlights,
  skills
}
`;

export const AWARDS_QUERY = `
*[_type=="award"] | order(order asc){
  _id,
  title,
  organization,
  period,
  description,
  link
}
`;

export const INNOVATIONS_QUERY = `
*[_type=="innovation"] | order(order asc){
  _id,
  title,
  video,
  link
}
`;

export const INNOVATION_IMAGES_QUERY = `
*[_type=="innovationImage"] | order(order asc){
  _id,
  title,
  image,
  link
}
`;

export const CONTACT_QUERY = `
*[_type=="contact"][0]{
  _id,
  email,
  department,
  university,
  location,
  departmentLink,
  collaborationTitle,
  collaborationDescription
}
`;
