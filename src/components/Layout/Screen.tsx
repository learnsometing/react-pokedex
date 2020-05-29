import React, { ReactNode } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ScreenBezel = styled.div`
  border-radius: 2rem;
  padding: 1rem;
  height: 100%;
  width: 100%;
  background-color: ${(props): string => props.theme.screenMargin};
`;

const ScreenInner = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${(props): string => props.theme.screen};
  display: flex;
  flex-direction: column;

  @media screen and (orientation: landscape) {
    flex-direction: row;
  }
`;

interface Props {
  children: ReactNode;
}

const Screen: React.FC<Props> = ({ children }) => {
  return (
    <ScreenBezel>
      <ScreenInner>{children}</ScreenInner>
    </ScreenBezel>
  );
};

Screen.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Screen;
