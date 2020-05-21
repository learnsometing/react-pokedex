import React from 'react';
import { graphql } from 'gatsby';

// Styles
import './index.css';
import theme from '../components/theme';
import styled, { ThemeProvider } from 'styled-components';

import Frame from '../components/Frame';
import Screen from '../components/Screen';
import CamAndLights from '../components/CameraAndLights';
import PokemonList from '../components/PokemonList';
const Container = styled.div`
  max-width: 1280px;
  height: 100vh;
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
`;

const ScreenContent = styled.div`
  max-height: calc(100% - 3rem - 0.25vh);
  overflow-y: scroll;
`;

const Pokedex: React.FC = ({ data }) => {
  console.log(data);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Frame>
          <Screen>
            <CamAndLights />
            <ScreenContent>
              <PokemonList pokemons={data.allPokemon.nodes} />
            </ScreenContent>
          </Screen>
        </Frame>
      </Container>
    </ThemeProvider>
  );
};

export default Pokedex;

export const query = graphql`
  query {
    allPokemon {
      nodes {
        name
        number
        spriteLocal {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }

    allCries: allFile(filter: { sourceInstanceName: { eq: "cries" } }) {
      nodes {
        publicURL
        name
      }
    }
  }
`;
