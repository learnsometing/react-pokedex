import React, { useContext, useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import Swiper from 'react-id-swiper';
import { useInView } from 'react-intersection-observer';

// components
import LoadingSpinner from '../shared/LoadingSpinner';
import PokemonData from '../shared/PokemonData';

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
  height: 100%;
  width: 100%;

  @media screen and (orientation: landscape) {
    flex-direction: row;
  }
`;

const PokemonSwiper: React.FC = () => {
  const swiperParams = {
    direction: 'vertical',
    containerClass: 'container',
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
      fadeIn('.first-slide', 0.5, 0.1);
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
              <PokemonData data={node} />
            )}
          </Slide>
        );
      })}
    </Swiper>
  );
};

export default PokemonSwiper;
