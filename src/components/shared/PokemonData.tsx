import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

// Custom PropTypes
import { pokemonWithCry } from '../../shared/propTypes';

// Interfaces
import { PokemonWithCry } from '../../shared/interfaces';

interface TypeProps {
  type: string;
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  color: ${(props): string => props.theme.text};
  margin: 0;
  font-size: 1.25rem;
  font-family: 'montserrat', sans-serif;
  text-transform: uppercase;
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

const Types = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0.75rem 0;
`;

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
  data: PokemonWithCry;
}

const PokemonData: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <Title>{`${data.number.toString().padStart(3, '0')} ${data.name}`}</Title>
      <SpriteWrapper>
        <Img fluid={data.spriteLocal.childImageSharp.fluid} />
      </SpriteWrapper>
      <Figure>
        <FigCaption>Cry:</FigCaption>
        <Audio controls>
          <source src={data.cry.ogg} type="audio/ogg" />
          <source src={data.cry.mp3} type="audio/mpeg" />
        </Audio>
      </Figure>
      <Types>
        {data.types.map(({ type }) => (
          <Type key={`${data.name}-${type.name}`} type={type.name}>
            {type.name}
          </Type>
        ))}
      </Types>
      <Attribute>Weight: {data.weight}</Attribute>
      <Attribute>Height: {data.height}</Attribute>
    </Container>
  );
};

PokemonData.propTypes = {
  data: pokemonWithCry.isRequired,
};

export default PokemonData;
