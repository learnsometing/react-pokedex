import React, { useReducer, createContext, ReactNode } from 'react';
import { graphql } from 'gatsby';

// PropTypes
import PropTypes from 'prop-types';
import { pokemonPropType, cryPropType } from '../shared/propTypes';

// Styles
import './index.css';
import theme from '../components/theme';
import { ThemeProvider } from 'styled-components';

// Interfaces
import { Pokemon, Cry } from '../shared/interfaces';

// Components
import Layout from '../components/Layout/Layout';
import PokemonSwiper from '../components/PokemonSwiper/PokemonSwiper';

// Helpers
import groupPokemonWithCries from '../helpers/groupPokemonWithCries';

const actionTypes = {
  started: 'STARTED',
  loaded: 'LOADED',
};

interface StartedAction {
  type: typeof actionTypes.started;
  payload: [];
}

interface LoadedAction {
  type: typeof actionTypes.loaded;
  payload: Pokemon[];
}

type PokemonActionTypes = StartedAction | LoadedAction;

export const PokemonContext = createContext();

interface ProviderProps {
  allPokemon: Pokemon[];
  children: ReactNode;
}

interface State {
  loading: boolean;
  more: boolean;
  pokemon: Pokemon[];
  after: number;
}

const PokemonProvider: React.FC<ProviderProps> = ({ children, allPokemon }) => {
  const perPage = 10;
  const initialState: State = {
    loading: false,
    more: true,
    pokemon: allPokemon.slice(0, perPage),
    after: 10,
  };
  const reducer = (state: State, action: PokemonActionTypes): State => {
    console.log(state, action);
    switch (action.type) {
      case actionTypes.started:
        return { ...state, loading: true };
      case actionTypes.loaded:
        return {
          ...state,
          loading: false,
          pokemon: [...state.pokemon, ...action.payload],
          more: action.payload.length === perPage,
          after: state.after + action.payload.length,
        };
      default:
        throw new Error('Invalid action.');
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading, pokemon, after, more } = state;
  const load = (): void => {
    dispatch({ type: actionTypes.started, payload: [] });
    setTimeout(() => {
      const newPokemon = allPokemon.slice(after, after + perPage);
      dispatch({ type: actionTypes.loaded, payload: newPokemon });
    }, 500);
  };

  return (
    <PokemonContext.Provider value={{ loading, pokemon, more, load }}>
      {children}
    </PokemonContext.Provider>
  );
};

PokemonProvider.propTypes = {
  children: PropTypes.node.isRequired,
  allPokemon: PropTypes.arrayOf(pokemonPropType.isRequired).isRequired,
};

interface Props {
  data: {
    allPokemon: {
      nodes: Pokemon[];
    };

    allCries: {
      nodes: Cry[];
    };
  };
}

const Index: React.FC<Props> = ({ data }) => {
  const allPokemon = data.allPokemon.nodes;
  const cries = data.allCries.nodes;

  const allPokemonWithCries = groupPokemonWithCries(cries, allPokemon);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <PokemonProvider allPokemon={allPokemonWithCries}>
          <PokemonSwiper />
        </PokemonProvider>
      </Layout>
    </ThemeProvider>
  );
};

Index.propTypes = {
  data: PropTypes.shape({
    allPokemon: PropTypes.shape({
      nodes: PropTypes.arrayOf(pokemonPropType.isRequired).isRequired,
    }).isRequired,
    allCries: PropTypes.shape({
      nodes: PropTypes.arrayOf(cryPropType.isRequired).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Index;

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
            fixed(width: 96) {
              ...GatsbyImageSharpFixed_withWebp
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
