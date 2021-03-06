import React, { useContext, useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Swiper from 'react-id-swiper';
import { useInView } from 'react-intersection-observer';

// components
import LoadingSpinner from '../shared/LoadingSpinner';

// Styles & Font
import 'swiper/css/swiper.min.css';
import './PokemonSwiper.css';

// Context
import { PokemonContext } from '../../pages/index';

// Interfaces
import { PokemonWithCry } from '../../shared/interfaces';

// Animations
import { fadeIn } from '../shared/animations';

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
  const { pokemon, load, loading, more } = useContext(PokemonContext);
  const loader = useRef(load);
  const observer = useRef<IntersectionObserver | null>(null);
  const [element, setElement] = useState<Element | null>(null);
  const [firstSlideRef, firstSlideInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    loader.current = load;
  }, [load]);

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;
    if (!currentObserver) {
      observer.current = new IntersectionObserver(
        (entries) => {
          const first = entries[0];
          if (first.isIntersecting && more) {
            loader.current();
          }
        },
        { threshold: 0.9 }
      );
    }
    if (currentElement && currentObserver) {
      currentObserver.observe(currentElement);
    }
    return (): void => {
      if (currentElement && currentObserver) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  useEffect(() => {
    if (firstSlideInView) {
      fadeIn('.first-slide', 0.5, 0.5);
    }
  }, [firstSlideInView]);

  return (
    <Swiper {...swiperParams}>
      {pokemon.map((node: PokemonWithCry, idx: number) => {
        let ref = undefined;

        if (idx === 0) {
          ref = firstSlideRef;
        } else if ((idx + 1) % 10 === 0) {
          ref = setElement;
        }

        return (
          <Slide
            key={node.name}
            className={idx === 0 ? 'first-slide' : undefined}
            ref={ref}
          >
            {(idx + 1) % 10 === 0 && loading ? (
              <LoadingSpinner />
            ) : (
              <>
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
                <Attribute>Weight: {node.weight}</Attribute>
                <Attribute>Height: {node.height}</Attribute>
              </>
            )}
          </Slide>
        );
      })}
    </Swiper>
  );
};

export default PokemonSwiper;
