export interface Character {
  id?: number;
  name?: string;
  height?: string;
  mass?: string;
  hair_color?: string;
  skin_color?: string;
  eye_color?: string;
  birth_year?: string;
  gender?: string;
  homeworld?: string;
  created?: string;
  edited?: string;
  url?: string;
  films?: Array<string>;
  species?: Array<string>;
  starships?: Array<string>;
  vehicles?: Array<string>;
}
export interface Species {
  type?: string;
}
export interface Vehicles {
  type?: string;
}
export interface StarShips {
  type?: string;
}
export interface Films {
  type?: string;
}
