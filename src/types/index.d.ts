export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: Array;
  url: string;
  created: string;
}

export type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: [];
  url; string;
  created: string;
}

export type Origin = {
  name: string;
  url; string;
}