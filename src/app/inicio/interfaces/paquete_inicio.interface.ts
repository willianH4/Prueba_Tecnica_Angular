export interface Paquete {
  summary: Summary;
  results: Result[];
  address: Address;
}

export interface Result {
  type:         string;
  id:           string;
  score:        number;
  dist:         number;
  address:      Address;
  position:     GeoBias;
  viewport:     Viewport;
  info?:        string;
  poi?:         Poi;
  entryPoints?: EntryPoint[];
  dataSources?: DataSources;
}

export interface Address {
  streetName?:                  string;
  municipality:                 string;
  countrySubdivision:           string;
  countryCode:                  string;
  country:                      string;
  countryCodeISO3:              string;
  freeformAddress:              string;
  localName:                    string;
  streetNumber?:                string;
  municipalitySubdivision?:     string;
  countrySecondarySubdivision?: string;
  countrySubdivisionName?:      string;
  postalCode?:                  string;
  extendedPostalCode?:          string;
}

export interface DataSources {
  poiDetails: PoiDetail[];
}

export interface PoiDetail {
  id:         string;
  sourceName: string;
}

export interface EntryPoint {
  type:     string;
  position: GeoBias;
}

export interface GeoBias {
  lat: number;
  lon: number;
}

export interface Poi {
  name:            string;
  phone?:          string;
  categorySet:     CategorySet[];
  categories:      string[];
  classifications: Classification[];
}

export interface CategorySet {
  id: number;
}

export interface Classification {
  code:  string;
  names: Name[];
}

export interface Name {
  nameLocale: NameLocale;
  name:       string;
}

export enum NameLocale {
  EnUS = "en-US",
}

export interface Viewport {
  topLeftPoint:  GeoBias;
  btmRightPoint: GeoBias;
}

export interface Summary {
  query:        string;
  queryType:    string;
  queryTime:    number;
  numResults:   number;
  offset:       number;
  totalResults: number;
  fuzzyLevel:   number;
  geoBias:      GeoBias;
}
