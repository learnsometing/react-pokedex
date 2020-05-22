import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Swiper from 'react-id-swiper';

// Styles & Font
import 'swiper/css/swiper.min.css';
import './MobilePokemonViews.css';
import 'typeface-montserrat';
import 'typeface-roboto-slab';

// Interface & PropTypes
import { pokemonPropType } from '../../propTypes';
import { Pokemon, GroupedCries } from '../../pages/index';

const Slide = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const SpriteWrapper = styled.div`
  max-width: 120px;
  width: 100%;
`;

const Figure = styled.figure`
  display: block;
  width: 100%;
  margin: 0;
  margin-bottom: 1rem;
`;

const FigCaption = styled.figcaption`
  color: ${(props): string => props.theme.text};
  font-family: 'Roboto Slab', serif;
  margin: 1rem;
`;

const Audio = styled.audio`
  display: block;
  width: 100%;
`;

const Title = styled.h1`
  text-align: center;
  color: ${(props): string => props.theme.text};
  margin: 0;
  font-size: 1.25rem;
  font-family: 'montserrat', sans-serif;
  text-transform: uppercase;
`;

const Types = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0.75rem 0;
`;

interface TypeProps {
  type: string;
}

const Type = styled.div<TypeProps>`
  border-radius: 1rem;
  padding: 0.25rem 0.75rem;
  margin: 0 0.5rem;
  background-color: ${(props): string => props.theme.typeColors[props.type]};
  text-align: center;
  font-family: 'Roboto Slab', serif;
  text-transform: capitalize;
`;

const Attribute = styled.p`
  color: ${(props): string => props.theme.text};
  text-align: center;
  font-family: 'Roboto Slab', serif;
  margin: 0.75rem;
`;

interface Props {
  pokemons: Pokemon[];
  cries: GroupedCries;
}

const MobilePokemonViews: React.FC<Props> = ({ pokemons, cries }) => {
  const params = {
    direction: 'vertical',
    containerClass: '.container',
  };

  return (
    <Swiper {...params}>
      {pokemons.map((pokemon) => (
        <Slide key={pokemon.name}>
          <Title>
            {`${pokemon.number.toString().padStart(3, '0')} ${pokemon.name}`}
          </Title>
          <SpriteWrapper>
            <Img fluid={pokemon.spriteLocal.childImageSharp.fluid} />
          </SpriteWrapper>
          <Figure>
            <FigCaption>Cry:</FigCaption>
            <Audio controls>
              <source src={cries[pokemon.number].ogg} type="audio/ogg" />
              <source src={cries[pokemon.number].mp3} type="audio/mpeg" />
            </Audio>
          </Figure>
          <Types>
            {pokemon.types.map(({ type }) => (
              <Type key={`${pokemon.name}-${type.name}`} type={type.name}>
                {type.name}
              </Type>
            ))}
          </Types>
          <Attribute>Weight: {pokemon.height}</Attribute>
          <Attribute>Height: {pokemon.weight}</Attribute>
        </Slide>
      ))}
    </Swiper>
  );
};

const groupedCryPropType = PropTypes.objectOf(
  PropTypes.shape({
    ogg: PropTypes.string.isRequired,
    mp3: PropTypes.string.isRequired,
  }).isRequired
).isRequired;

MobilePokemonViews.propTypes = {
  pokemons: PropTypes.arrayOf(pokemonPropType.isRequired).isRequired,
  cries: groupedCryPropType,
};

export default MobilePokemonViews;
