import styled from 'styled-components';

interface LEDProps {
  color: string;
}

export const LEDOuter = styled.div<LEDProps>`
  background-color: ${(props): string => props.color};
  border: 1px solid black;
  border-radius: 50%;
  margin: 0 0.25rem;
  flex-basis: 0.75rem;
  height: 0.75rem;
`;

export const LEDInner = styled.div<LEDProps>`
  position: relative;
  background-color: ${(props): string => props.color};
  border-radius: 50%;
  padding: 10%;
  height: 85%;
  width: 85%;
`;

export const LEDGlareOuter = styled.div<LEDProps>`
  position: absolute;
  border-radius: 50%;
  background-color: ${(props): string => props.color};
  padding: 10%;
  width: 40%;
  height: 40%;
`;

export const LEDGlareInner = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: #fff;
  width: 40%;
  height: 40%;
`;
