import React from 'react';
import styled from 'styled-components';

export const FrameOuterLeft = styled.div`
  position: relative;
  border: ${(props): string => props.theme.penLine};
  border-top-right-radius: 10px;
  width: 30vw;
  height: 85vh;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  border-right: 0;
  padding-left: 0.25vh;
  background-color: #ad1831;
`;

export const FrameInnerLeft = styled.div`
  border: ${(props): string => props.theme.penLine};
  border-top: 0;
  border-right: ${(props): string => props.theme.penLine};
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  border-top-right-radius: 10px;
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(8, 1fr);
  width: 100%;
  height: 84.25vh;
`;

export const FrameInnerLeftPanel = styled.div`
  border-top: ${(props): string => props.theme.penLine};
  border-bottom-left-radius: 40px;
  margin-top: 0.125rem;
  padding: 0.5rem;
  padding-top: 0;
  grid-row: 2/6;
  grid-column: 1/8;
  background-color: #d62246;
`;

export const FrameInnerLeftPanelInner = styled.div`
  border: ${(props): string => props.theme.penLine};
  border-top: 0;
  border-bottom-left-radius: 40px;
  padding: 1rem;
  width: 100%;
  height: 100%;
  background-color: #da3254;
`;

export const CamAndLightsWrapper = styled.div`
  position: relative;
  display: flex;
  border-top-left-radius: 40px;
  border-top-right-radius: 10px;
  border-bottom: ${(props): string => props.theme.penLine};
  width: 100%;
  padding: 1rem;
  grid-row: 1/2;
  grid-column: 1/9;
  background-color: #da3254;
`;

export const Hinge = styled.div`
  border-top: ${(props): string => props.theme.penLine};
  border-left: ${(props): string => props.theme.penLine};
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  position: relative;
  grid-row: 1/6;
  grid-column: 8/9;
  background-color: #d62246;
  margin-top: 2vh;
`;
