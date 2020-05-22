import React from 'react';
import { graphql } from 'gatsby';

// PropTypes
import PropTypes from 'prop-types';
import { pokemonPropType, cryPropType } from '../propTypes';

// Styles
import './index.css';
import theme from '../components/theme';
import styled, { ThemeProvider } from 'styled-components';

// Components
import Frame from '../components/Frame';
import Screen from '../components/Screen';
import CamAndLights from '../components/CameraAndLights';
import MobilePokemonViews from '../components/MobilePokemonViews/MobilePokemonViews';
import { FluidObject } from 'gatsby-image';

const Container = styled.div`
  max-width: 1280px;
  height: 100vh;
  width: 100%;
  padding: 0.5rem;
  margin: 0 auto;
`;

const Content = styled.div`
  max-height: calc(100% - 3rem - 0.25vh);
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

interface ChildImageSharp {
  childImageSharp: {
    fluid: FluidObject;
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

interface Data {
  data: {
    allPokemon: {
      nodes: Pokemon[];
    };

    allCries: {
      nodes: Cry[];
    };
  };
}

export interface GroupedCries {
  [key: string]: {
    [key: string]: string | undefined;
  };
}

const groupCriesByName = (cries: Cry[]): GroupedCries => {
  return cries.reduce((acc: GroupedCries, cry: Cry): GroupedCries => {
    const key = cry.name;
    const ext = cry.ext.slice(1);

    if (!acc[key]) {
      acc[key] = { ogg: undefined, mp3: undefined };
    }

    acc[key][ext] = cry.publicURL;
    return acc;
  }, {});
};

const Pokedex: React.FC<Data> = ({ data: { allPokemon, allCries } }) => {
  const pokemons = allPokemon.nodes;
  const cries = allCries.nodes;
  const criesGroupedByPokemon = groupCriesByName(cries);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Frame>
          <Screen>
            <CamAndLights />
            <Content>
              <MobilePokemonViews
                pokemons={pokemons}
                cries={criesGroupedByPokemon}
              />
            </Content>
          </Screen>
        </Frame>
      </Container>
    </ThemeProvider>
  );
};

Pokedex.propTypes = {
  data: PropTypes.shape({
    allPokemon: PropTypes.shape({
      nodes: PropTypes.arrayOf(pokemonPropType.isRequired).isRequired,
    }).isRequired,
    allCries: PropTypes.shape({
      nodes: PropTypes.arrayOf(cryPropType.isRequired).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Pokedex;

export const query = graphql`
  query {
    allPokemon {
      nodes {
        number
        name
        height
        weight
        spriteLocal {
          childImageSharp {
            fluid(maxWidth: 96) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        types {
          type {
            name
          }
        }
      }
    }

    allCries: allFile(filter: { sourceInstanceName: { eq: "cries" } }) {
      nodes {
        name
        ext
        publicURL
      }
    }
  }
`;
