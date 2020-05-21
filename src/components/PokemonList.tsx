import React from 'react';
import styled from 'styled-components';
import 'typeface-montserrat';

const List = styled.ul`
  height: 100%;
  overflow-y: auto;
  margin: 0;
  padding: 0 1rem;
`;

const ListItem = styled.li`
  list-style: none;
  margin: 0.25em 0;
  color: #0cce6b;
  font-size: 1.5rem;
  font-family: 'montserrat';
  text-transform: uppercase;
`;

interface Props {
  name: string;
}

const PokemonList: React.FC<Props> = ({ pokemons }) => {
  return (
    <List>
      {pokemons.map((pokemon) => (
        <ListItem key={pokemon.name}>
          {`${pokemon.number.toString().padStart(3, '0')} ${pokemon.name}`}
        </ListItem>
      ))}
    </List>
  );
};

export default PokemonList;
