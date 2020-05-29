import styled from 'styled-components';

interface LEDProps {
  color: string;
}

export const LEDOuter = styled.div<LEDProps>`
  position: relative;
  background-color: ${(props): string => props.color};
  border: 1px solid black;
  border-radius: 50%;
  margin: 0 0.25rem;
  flex-basis: 2vh;
  height: 2vh;
  padding: 0.1vh;

  @media screen and (orientation: landscape) {
    margin: 0.25rem 0;
    flex-basis: 1vw;
    padding: 0.1vw;
  }
`;

export const LEDInner = styled.div<LEDProps>`
  position: relative;
  background-color: ${(props): string => props.color};
  border-radius: 50%;
  height: 1.4vh;
  width: 1.4vh;
  padding: 0.1vh;

  @media screen and (orientation: landscape) {
    height: 1.4vw;
    width: 1.4vw;
    padding: 0.1vw;
  }
`;

export const LEDGlareOuter = styled.div<LEDProps>`
  position: relative;
  border-radius: 50%;
  background-color: ${(props): string => props.color};
  width: 1.15vh;
  height: 1.15vh;
  padding: 0.2vh;

  @media screen and (orientation: landscape) {
    height: 1.15vw;
    width: 1.15vw;
    padding: 0.2vw;
  }
`;

export const LEDGlareInner = styled.div`
  position: relative;
  border-radius: 50%;
  background-color: #fff;
  width: 0.4vh;
  height: 0.4vh;

  @media screen and (orientation: landscape) {
    width: 0.4vw;
    height: 0.4vw;
  }
`;
