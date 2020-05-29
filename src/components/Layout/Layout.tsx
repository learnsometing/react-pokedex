import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  max-height: calc(100% - 3rem - 0.25vh);
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <Container>
    <Frame>
      <Screen>
        <CamAndLights />
        <Content>{children}</Content>
      </Screen>
    </Frame>
  </Container>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
