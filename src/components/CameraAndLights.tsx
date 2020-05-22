import React from 'react';
import styled from 'styled-components';
import Camera from './Camera';
import { LEDOuter, LEDInner, LEDGlareOuter, LEDGlareInner } from './LED';

const CamAndLightsWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem 0.5rem;
  padding-top: 0;
  background-color: ${(props): string => props.theme.screen};
`;

const CamAndLights: React.FC = () => (
  <CamAndLightsWrapper>
    <LEDOuter color={'#F46036'}>
      <LEDInner color={'#F78255'}>
        <LEDGlareOuter color={'#FCB989'}>
          <LEDGlareInner />
        </LEDGlareOuter>
      </LEDInner>
    </LEDOuter>
    <LEDOuter color={'#FDD349'}>
      <LEDInner color={'#FEDF55'}>
        <LEDGlareOuter color={'#FFF268'}>
          <LEDGlareInner />
        </LEDGlareOuter>
      </LEDInner>
    </LEDOuter>
    <LEDOuter color={'#0CCE6B'}>
      <LEDInner color={'#2FDD81'}>
        <LEDGlareOuter color={'#60F1A4'}>
          <LEDGlareInner />
        </LEDGlareOuter>
      </LEDInner>
    </LEDOuter>
    <Camera />
  </CamAndLightsWrapper>
);

export default CamAndLights;
