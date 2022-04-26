import {
  ProjectsListType,
  ProjectType,
  dima,
  cadosch,
  kgpImmobilien,
  privat,
} from 'src/utils/TS/interface';
import { description } from './description';

export const _mockProjekts: ProjectsListType = [
  //
  // 4 mehrfamilienhäuser ettersbüe
  //
  {
    photo: {
      url: `/cover_1.jpg`,
      title: `4 mehrfamilienhäuser ettersbüe`,
      alt: `4 mehrfamilienhäuser ettersbüe`,
      author: '',
    },
    photos: [],
    id: '1',
    title: `4 mehrfamilienhäuser ettersbüe`,
    description: description[0],
    year: 2016,
    objektAlter: 'Newbau',
    objektType: ['MFH'],
    services: ['TU', 'Bauleitung', 'GP', 'Ausführungsplanung'],
    timeStamp: 1,
    region: 'Zürich',
    phase: ['Realisierung'],
    client: kgpImmobilien,
    gu: dima,
    architect: `zfp architektur ag, bülach`,
    location: 'Bülach',
  },
  //
  // neubau mehrfamilienhaus mettelacher
  //
  {
    photo: {
      url: `/cover_2.jpg`,
      title: `neubau mehrfamilienhaus mettelacher`,
      alt: `neubau mehrfamilienhaus mettelacher`,
      author: '',
    },
    photos: [],
    id: '2',
    title: `neubau mehrfamilienhaus mettelacher`,
    description: description[1],
    year: 2017,
    objektAlter: 'Newbau',
    objektType: ['MFH'],
    services: ['TU', 'Bauleitung', 'GP', 'Architektur'],
    timeStamp: 1,
    region: 'Zürich',
    phase: ['Realisierung'],
    client: 'mettelacher immobilien ag, wollerau',
    gu: dima,
    architect: 'hamburger du pfammatter ferrandiz ag architekten eth sia, zürich',
    location: 'Zumikon',
  },
  //
  // neubau mehrfamilienhaus mettelacher
  //
  {
    photo: {
      url: `/cover_3.jpg`,
      title: `neubau 2 einfamilienhäuser`,
      alt: `neubau 2 einfamilienhäuser`,
      author: '',
    },
    photos: [],
    id: '3',
    title: `neubau 2 einfamilienhäuser`,
    description: description[2],
    year: 2012,
    objektAlter: 'Newbau',
    objektType: ['EFH'],
    services: ['Architektur', 'Bauleitung'],
    timeStamp: 1,
    region: 'Zürich',
    phase: ['Realisierung', 'Plannung'],
    client: privat,
    gu: '',
    architect: dima,
    location: 'Bachenbülach',
  },
  //
  // wohnüberbauung oberer gubel
  //
  {
    photo: {
      url: `/cover_4.jpg`,
      title: `wohnüberbauung oberer gubel`,
      alt: `wohnüberbauung oberer gubel`,
      author: '',
    },
    photos: [],
    id: '4',
    title: `wohnüberbauung oberer gubel`,
    description: description[3],
    year: 2018,
    objektAlter: 'Sanierung',
    objektType: ['MFH', 'EFH'],
    services: ['TU', 'Bauleitung', 'GP'],
    timeStamp: 1,
    region: 'Zürich',
    phase: ['Realisierung'],
    client: kgpImmobilien,
    gu: dima,
    architect: cadosch,
    location: 'Jona',
  },
  //
  // wohnüberbauung schachenmatt 2
  //
  {
    photo: {
      url: `/cover_5.jpg`,
      title: `wohnüberbauung schachenmatt 2`,
      alt: `wohnüberbauung schachenmatt 2`,
      author: '',
    },
    photos: [],
    id: '5',
    title: `wohnüberbauung schachenmatt 2`,
    description: description[4],
    year: 2012,
    objektAlter: 'Newbau',
    objektType: ['MFH'],
    services: ['TU', 'Bauleitung'],
    timeStamp: 1,
    region: 'Zürich',
    phase: ['Realisierung'],
    client: 'siedlungsgenossenschaft eigengrund, zürich',
    gu: dima,
    architect: 'egli rohr partner ag, baden',
    location: 'Dietikon',
  },
  //
  // neubau 4 mfh leisibüelpark
  //
  {
    photo: {
      url: `/cover_6.jpg`,
      title: `neubau 4 mfh leisibüelpark`,
      alt: `neubau 4 mfh leisibüelpark`,
      author: '',
    },
    photos: [],
    id: '6',
    title: 'neubau 4 mfh leisibüelpark',
    description: description[0],
    year: 2013,
    objektAlter: 'Newbau',
    objektType: ['MFH'],
    services: ['TU', 'GP'],
    timeStamp: 1,
    region: 'Zürich',
    phase: ['Realisierung'],
    client: 'leisibüelpark ag, wollerau',
    gu: '',
    architect: '',
    cooperation: { service: 'TU', company: 'implenia schweiz ag, dietlikon' },
    location: 'Männedorf',
  },
  //
  // neubau mehrfamilienhaus obere wallisellerstrasse
  //
  {
    photo: {
      url: `/cover_7.jpg`,
      title: `neubau mehrfamilienhaus obere wallisellerstrasse`,
      alt: `neubau mehrfamilienhaus obere wallisellerstrasse`,
      author: '',
    },
    photos: [],
    id: '7',
    title: 'neubau mehrfamilienhaus obere wallisellerstrasse',
    description: description[1],
    year: 2015,
    objektAlter: 'Newbau',
    objektType: ['MFH'],
    services: ['Architektur', 'Bauleitung'],
    timeStamp: 1,
    region: 'Zürich',
    phase: ['Plannung', 'Realisierung'],
    client: privat,
    gu: '',
    architect: dima,
    location: 'Opfikon',
  },
  //
  // sanierung schwimmbad gründli
  //
  {
    photo: {
      url: `/cover_8.jpg`,
      title: `sanierung schwimmbad gründli`,
      alt: `sanierung schwimmbad gründli`,
      author: '',
    },
    photos: [],
    id: '8',
    title: 'sanierung schwimmbad gründli',
    description: description[2],
    year: 2012,
    objektAlter: 'Sanierung',
    objektType: ['Sport'],
    services: ['Architektur', 'Bauleitung'],
    timeStamp: 1,
    region: 'Glarus',
    phase: ['Realisierung'],
    client: 'gemeinde glarus',
    gu: dima,
    architect: '',
    location: 'Glarus',
  },
  //
  // neubau Kongress- & Kulturzentrum  samsung hall
  //
  {
    photo: {
      url: `/cover_9.jpg`,
      title: `neubau Kongress- & Kulturzentrum  samsung hall`,
      alt: `neubau Kongress- & Kulturzentrum  samsung hall`,
      author: '',
    },
    photos: [],
    id: '9',
    title: 'neubau Kongress- & Kulturzentrum  samsung hall',
    description: description[3],
    year: 2015,
    objektAlter: 'Newbau',
    objektType: ['Multifunktional'],
    services: ['Bauleitung', 'GP'],
    timeStamp: 1,
    region: 'Zürich',
    phase: ['Realisierung'],
    client: '',
    gu: '',
    architect: '',
    location: 'Dübendorf',
  },
  //
  // neubau hauptsitz namics ag
  //
  {
    photo: {
      url: `/cover_10.jpg`,
      title: `neubau hauptsitz namics ag`,
      alt: `neubau hauptsitz namics ag`,
      author: 'roger frei, zürich',
    },
    photos: [],
    id: '10',
    title: 'neubau hauptsitz namics ag',
    description: description[4],
    year: 2013,
    objektAlter: 'Newbau',
    objektType: ['Büro'],
    services: ['GP'],
    timeStamp: 1,
    region: 'Andere',
    phase: ['Realisierung'],
    client: 'asga pensionskasse st. gallen',
    gu: '',
    architect: 'arge menn / ammann',
    location: 'St, Gallen',
  },
  //
  // überbauung feldbreite
  //
  {
    photo: {
      url: `/cover_11.jpg`,
      title: `überbauung feldbreite`,
      alt: `überbauung feldbreite`,
      author: '',
    },
    photos: [],
    id: '11',
    title: 'überbauung feldbreite',
    description: description[0],
    year: 2012,
    objektAlter: 'Newbau',
    objektType: ['Büro'],
    services: ['GP', 'Kostenmenagement'],
    timeStamp: 1,
    region: 'Innerschweiz',
    phase: ['Plannung'],
    client: 'bss & m real estate ag',
    gu: '',
    architect: 'stoffel schneider architekten ag',
    cooperation: { service: 'Bauleitung', company: 'rhyner baumanagement' },
    location: 'Emmenbrücke',
  },
  //
  // neubau zugschleife, Feldpark
  //
  {
    photo: {
      url: `/cover_12.jpg`,
      title: `neubau zugschleife, Feldpark `,
      alt: `neubau zugschleife, Feldpark `,
      author: 'miguel verme, chur',
    },
    photos: [],
    id: '12',
    title: 'neubau zugschleife, Feldpark ',
    description: description[1],
    year: 2010,
    objektAlter: 'Newbau',
    objektType: ['MFH'],
    services: ['TU', 'Bauleitung'],
    timeStamp: 1,
    region: 'Innerschweiz',
    phase: ['Realisierung'],
    client: 'peikert immobilien ag, zug + 4b immobilien ag',
    gu: '',
    architect: 'valerio olgiati flims, axxes ag zug',
    cooperation: { service: 'TU', company: 'toneatti ag, bilten' },
    location: 'Zug',
  },
  //
  // neubau 25 refh, wohnüberbauung pelicano,
  //
  {
    photo: {
      url: `/cover_13.jpg`,
      title: `neubau 25 refh, wohnüberbauung pelicano, `,
      alt: `neubau 25 refh, wohnüberbauung pelicano, `,
      author: '',
    },
    photos: [],
    id: '13',
    title: 'neubau 25 refh, wohnüberbauung pelicano, ',
    description: description[2],
    year: 2010,
    objektAlter: 'Newbau',
    objektType: ['MFH'],
    services: ['Bauleitung'],
    timeStamp: 1,
    region: 'Zürich',
    phase: ['Realisierung'],
    client: 'bss+m real estate ag, zürich',
    gu: '',
    architect: 'hanimann-flückiger ag, egg + naef partner ag, zürich',
    cooperation: {
      service: 'Ausführungsplanung',
      company: 'hanimann-flückiger ag, egg + naef partner ag, zürich',
    },
    location: 'Egg',
  },
  //
  // sanierung & erweiterung multifunktionale sport-und kongressanlage,
  //
  {
    photo: {
      url: `/cover_14.jpg`,
      title: `sanierung & erweiterung multifunktionale sport-und kongressanlage, `,
      alt: `sanierung & erweiterung multifunktionale sport-und kongressanlage, `,
      author: '',
    },
    photos: [],
    id: '14',
    title: 'sanierung & erweiterung multifunktionale sport-und kongressanlage, ',
    description: description[2],
    year: 2011,
    objektAlter: 'Newbau',
    objektType: ['Multifunktional'],
    services: ['Bauleitung', 'GP', 'Architektur'],
    timeStamp: 1,
    region: 'Arosa',
    phase: ['Realisierung', 'Plannung'],
    client: 'gemeinde arosa',
    gu: dima,
    architect: 'hanimann-flückiger ag, egg + naef partner ag, zürich',
    cooperation: {
      service: 'Betrieber',
      company: 'arosa tourismus',
    },
    location: 'Arosa',
  },
  //
  // umbau credit suisse ag, geschäftstelle und 3 stadtwohnungen,
  //
  {
    photo: {
      url: `/cover_15.jpg`,
      title: `umbau credit suisse ag, geschäftstelle und 3 stadtwohnungen`,
      alt: `umbau credit suisse ag, geschäftstelle und 3 stadtwohnungen`,
      author: '',
    },
    photos: [],
    id: '15',
    title: 'umbau credit suisse ag, geschäftstelle und 3 stadtwohnungen',
    description: description[2],
    year: 2010,
    objektAlter: 'Sanierung',
    objektType: ['Multifunktional'],
    services: ['Bauleitung', 'GP', 'Architektur'],
    timeStamp: 1,
    region: 'Glarus',
    phase: ['Realisierung', 'Plannung'],
    client: 'credit suisse ag, zürich',
    gu: dima,
    architect: dima,
    location: 'Glarus',
  },
];
/*
const Beispiel: ProjectType = {
  photo: {
    url: `/cover_8.jpg`,
    title: `Beispiel Projekt`,
    alt: `Beispiel Projekt`,
    author: '',
  },
  photos: [],
  id: '8',
  title: 'Beispiel Projekt',
  description: description[2], // Längerer Text
  year: 2012,
  objektAlter: 'Sanierung', //  eine von: "Newbau" | "Sanierung" | "Wettbewerb"
  objektType: ['MFH'], // mehrere von: 'MFH','Gewerbe','Büro','EFH','Gesundheits','Sport','Multifunktional',
  services: ['Architektur', 'Bauleitung'], // mehrere von:  'TU','Bauleitung','Architektur','GP','Wettbewerb','Käuferbetreuung','Ausführungsplanung','Studien','Mangelmenagement','Kostenmenagement','Submision',
  timeStamp: 1,
  region: 'Glarus', //  eine von:  "Zürich" | "Glarus" | "Arosa" | "Andere"
  phase: ['Realisierung'], // mehrere von: 'Entwicklung', 'Plannung', 'Realisierung'
  client: 'gemeinde glarus', // text
  gu: dima, // text
  architect: '', // text
  cooperation: { service: 'Bauleitung', company: 'rhyner baumanagement' },
  location: 'Glarus', // text
};
console.log(Beispiel);
*/
