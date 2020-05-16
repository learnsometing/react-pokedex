import React from 'react';
import SEO from '../components/seo';
import styled, { ThemeProvider } from 'styled-components';

import './index.css';
import theme from '../components/theme';

import {
  FrameOuterLeft,
  FrameInnerLeft,
  FrameInnerLeftPanel,
  FrameInnerLeftPanelInner,
  CamAndLightsWrapper,
  Hinge,
} from '../components/Frame';
import Camera from '../components/Camera';
import {
  LEDOuter,
  LEDInner,
  LEDGlareOuter,
  LEDGlareInner,
} from '../components/LED';

const IndexPage: React.FC = () => (
  <ThemeProvider theme={theme}>
    <div>
      <FrameOuterLeft>
        <FrameInnerLeft>
          <CamAndLightsWrapper>
            <Camera />
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
          </CamAndLightsWrapper>
          <Hinge />
          <FrameInnerLeftPanel>
            <FrameInnerLeftPanelInner></FrameInnerLeftPanelInner>
          </FrameInnerLeftPanel>
        </FrameInnerLeft>
      </FrameOuterLeft>
    </div>
  </ThemeProvider>
);

export default IndexPage;
