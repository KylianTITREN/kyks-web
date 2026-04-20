import { groq } from "next-sanity";

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  tagline, pitch, contactEmail, openGraphImage, kylianPortrait
}`;

export const collaborationsQuery = groq`*[_type == "collaboration"] | order(order asc){
  _id, name, "slug": slug.current, logo, url, role, summary, contributions, period, featured
}`;

export const projectsQuery = groq`*[_type == "project"] | order(order asc){
  _id, name, "slug": slug.current, url, cover, tagline, summary, highlights, stack, category, status, year, featured
}`;

export const experiencesQuery = groq`*[_type == "experience"] | order(startDate desc){
  _id, company, role, startDate, endDate, location, summary, achievements, stack, url
}`;

export const skillGroupsQuery = groq`*[_type == "skillGroup"] | order(order asc){
  _id, title, skills
}`;

export const educationQuery = groq`*[_type == "education"] | order(startDate desc){
  _id, school, degree, summary, startDate, endDate, location, url
}`;

export const socialLinksQuery = (scope: "kyks" | "kylian") => groq`*[
  _type == "socialLink" && (scope == "${scope}" || scope == "both")
] | order(order asc){
  _id, label, url, platform, scope
}`;
