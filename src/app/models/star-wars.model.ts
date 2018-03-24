export interface Character {
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
  films?: Array<Films>;
  species?: Array<Species>;
  starShips?: Array<StarShips>;
  vehicles?: Array<Vehicles>;
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
