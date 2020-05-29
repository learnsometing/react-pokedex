import { FixedObject } from 'gatsby-image';

interface ChildImageSharp {
  childImageSharp: {
    fixed: FixedObject;
  };
}

interface Type {
  type: {
    name: string;
  };
}

export interface Pokemon {
  number: number;
  name: string;
  height: string;
  weight: string;
  spriteLocal: ChildImageSharp;
  types: Type[];
}

export interface Cry {
  name: string;
  ext: string;
  publicURL: string;
}

export interface GroupedCries {
  [key: string]: {
    [key: string]: string | undefined;
  };
}

export interface PokemonWithCry extends Pokemon {
  cry: {
    [key: string]: string | undefined;
  };
}
