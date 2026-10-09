import {
  DUMMY_EXPERIENCES,
  DUMMY_EDUCATION,
  DUMMY_CERTIFICATES,
  type ExperienceItem,
  type EducationItem,
  type CertificateItem,
} from "@/shared/constants/dummyData";

export async function getExperiences(): Promise<ExperienceItem[]> {
  return DUMMY_EXPERIENCES;
}

export async function getEducation(): Promise<EducationItem[]> {
  return DUMMY_EDUCATION;
}

export async function getCertificates(): Promise<CertificateItem[]> {
  return DUMMY_CERTIFICATES;
}
