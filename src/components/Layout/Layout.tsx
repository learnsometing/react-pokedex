import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

// Components
import Frame from './Frame';
import Screen from './Screen';
import CamAndLights from './CameraAndLights';

const Container = styled.div`
  max-width: 1280px;
  height: 100vh;
  width: 100%;
  padding: 0.25rem;
  margin: 0 auto;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;

  @media screen and (orientation: landscape) {
    max-height: 100%;
  }
`;

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const [layoutRef, layoutInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <Container ref={layoutRef}>
      <Frame>
        <Screen>
          <CamAndLights />
          <Content>{layoutInView ? children : <></>}</Content>
        </Screen>
      </Frame>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
