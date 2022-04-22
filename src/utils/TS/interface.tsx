export const dima = `DIMA partner | architektur & totalunternehmung`;

export interface ProjectType {
  photo: ImageType;
  photos: ImageType[];
  id: string;
  title: string;
  description: string;
  year: number;
  objektAlter: ObjektAlter;
  objektType: ObjektTypes;
  services: ArrayOfServicesType;
  timeStamp: number;
  region: Regionen;
  phase: ArrayOfPhases;
  client: string;
  gu: Company;
  architect: Company;
  cooperation?: {
    service: Services | string;
    company: Company;
  };
  location: string;
}
export type ProjectsListType = ProjectType[];

export interface PropsProjects {
  projectsList: ProjectsListType;
}

export interface ImageType {
  url: string;
  title: string;
  alt: string;
  author: string;
}
export type ImagesType = ImageType[];

export type Company = string | typeof dima | typeof cadosch | typeof kgpImmobilien | typeof privat;

export const regionenArray = [
  'Glarus',
  'Zürich',
  'Arosa',
  'Innerschweiz',
  'Andere',
  'Alle',
] as const;
export type Regionen = typeof regionenArray[number];

export const objektAlterArray = ['Newbau', 'Sanierung', 'Wettbewerb', 'Alle'] as const;
export type ObjektAlter = typeof objektAlterArray[number];

export const phase = ['Entwicklung', 'Plannung', 'Realisierung', 'Alle'] as const;
export type Phase = typeof phase[number];
export type ArrayOfPhases = Phase[];

export const objektTypeArray = [
  'MFH',
  'Gewerbe',
  'Büro',
  'EFH',
  'Gesundheits',
  'Sport',
  'Multifunktional',
  'Alle',
] as const;

export type ObjektType = typeof objektTypeArray[number];
export type ObjektTypes = ObjektType[];
export const ServicesArray = [
  'TU',
  'Bauleitung',
  'Architektur',
  'GP',
  'Wettbewerb',
  'Käuferbetreuung',
  'Ausführungsplanung',
  'Studien',
  'Mangelmenagement',
  'Kostenmenagement',
  'Submision',
  'Alle',
] as const;
export type Services = typeof ServicesArray[number];
export type ArrayOfServicesType = Services[];

export type FilterParams = {
  objektAlter: ObjektAlter;
  objektType: ObjektType;
  services: Services;
};

export type User = UserData | null;

export interface UserData {
  uid: string;
}

export const cadosch = `cadosch & zimmermann gmbh, zürich`;
export const kgpImmobilien = `kgp immobilien ag, wollerau`;
export const privat = `privat`;
