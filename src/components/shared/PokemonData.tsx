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

const PokemonIDWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  padding: 2rem;
  height: 100%;
  width: 100%;
  background-color: #ebebeb;
  border-top-right-radius: 30px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 30px;

  @media screen and (orientation: landscape) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const Title = styled.h1`
  position: absolute;
  margin-top: -0.75rem;
  padding: 0.25rem 0.75rem;
  top: 0;
  text-align: center;
  color: ${(props): string => props.theme.id};
  font-size: 1.25rem;
  font-family: 'montserrat', sans-serif;
  text-transform: uppercase;
  background-color: #5c5d5b;
  border-radius: 5px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.75);
`;

const SpriteWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Details = styled.div`
  width: 100%;
  background-color: #ebebeb;
  margin: 1rem;
  padding: 1rem;
`;

const Figure = styled.figure`
  display: block;
  margin: 0;
  width: 100%;
`;

const FigCaption = styled.figcaption`
  color: ${(props): string => props.theme.text};
  font-family: 'montserrat', serif;
  font-weight: 500;
  margin: 1rem 0;
`;

const Audio = styled.audio`
  display: block;
  width: 100%;
`;

const Types = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

const Type = styled.div<TypeProps>`
  border-radius: 1rem;
  padding: 0.25rem 0.75rem;
  margin: 0 0.25rem;
  background-color: ${(props): string => props.theme.typeColors[props.type]};
  text-align: center;
  font-family: 'montserrat', serif;
  font-weight: 500;
  text-transform: capitalize;
`;

const Attribute = styled.p`
  color: ${(props): string => props.theme.text};
  text-align: center;
  font-family: 'montserrat', serif;
  font-weight: 500;
  margin: 1rem 0;
`;

interface Props {
  data: PokemonWithCry;
}

const PokemonData: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <PokemonIDWrapper>
        <Title>{`${data.number.toString().padStart(3, '0')} ${
          data.name
        }`}</Title>
        <SpriteWrapper>
          <Img fixed={data.spriteLocal.childImageSharp.fixed} />
          <Figure>
            <FigCaption>Cry:</FigCaption>
            <Audio controls>
              <source src={data.cry.ogg} type="audio/ogg" />
              <source src={data.cry.mp3} type="audio/mpeg" />
            </Audio>
          </Figure>
        </SpriteWrapper>
        <Details>
          <Types>
            {data.types.map(({ type }) => (
              <Type key={`${data.name}-${type.name}`} type={type.name}>
                {type.name}
              </Type>
            ))}
          </Types>
          <Attribute>Weight: {data.weight}</Attribute>
          <Attribute>Height: {data.height}</Attribute>
        </Details>
      </PokemonIDWrapper>
    </Container>
  );
};

PokemonData.propTypes = {
  data: pokemonWithCry.isRequired,
};

export default PokemonData;
