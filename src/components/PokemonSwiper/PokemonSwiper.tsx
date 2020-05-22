import React, { useContext, useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Swiper from 'react-id-swiper';
import { useInView } from 'react-intersection-observer';

// Styles & Font
import 'swiper/css/swiper.min.css';
import './PokemonSwiper.css';
import 'typeface-montserrat';
import 'typeface-roboto-slab';

// Context
import { PokemonContext } from '../../pages/index';

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

const PokemonSwiper: React.FC = () => {
  const swiperParams = {
    direction: 'vertical',
    containerClass: '.container',
    shouldSwiperUpdate: true,
  };
  const { after, pokemon, load, more } = useContext(PokemonContext);
  const loader = useRef(load);

  useEffect(() => {
    loader.current = load;
  }, [load]);

  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && more) {
          loader.current();
        }
      },
      { threshold: 0.9 }
    )
  );
  const [element, setElement] = useState(null);

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  return (
    <Swiper {...swiperParams}>
      {pokemon.map((node, idx: number) => {
        return (
          <Slide
            key={node.name}
            ref={(idx + 1) % 10 === 0 ? setElement : undefined}
          >
            <Title>
              {`${node.number.toString().padStart(3, '0')} ${node.name}`}
            </Title>
            <SpriteWrapper>
              <Img fluid={node.spriteLocal.childImageSharp.fluid} />
            </SpriteWrapper>
            <Figure>
              <FigCaption>Cry:</FigCaption>
              <Audio controls>
                <source src={node.cry.ogg} type="audio/ogg" />
                <source src={node.cry.mp3} type="audio/mpeg" />
              </Audio>
            </Figure>
            <Types>
              {node.types.map(({ type }) => (
                <Type key={`${node.name}-${type.name}`} type={type.name}>
                  {type.name}
                </Type>
              ))}
            </Types>
            <Attribute>Weight: {node.height}</Attribute>
            <Attribute>Height: {node.weight}</Attribute>
          </Slide>
        );
      })}
    </Swiper>
  );
};

export default PokemonSwiper;
