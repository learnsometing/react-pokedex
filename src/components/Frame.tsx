import React, { ReactNode } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const FrameWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 100%;
  height: 100%;
  border-right: 0;
`;

export const BezelOuter = styled.div`
  border: ${(props): string => props.theme.penLine};
  width: inherit;
  height: inherit;
  border-radius: 2rem;
  padding-left: 0.25vh;
  padding-bottom: 0.25vh;
  background-color: ${(props): string => props.theme.bezelOuter};
`;

export const BezelInner = styled.div`
  position: relative;
  border: ${(props): string => props.theme.penLine};
  border-top: 0;
  border-right: 0;
  border-radius: 2rem;
  padding: 0.25rem;
  width: inherit;
  height: inherit;
  background-color: ${(props): string => props.theme.bezel};
`;

interface Props {
  children: ReactNode;
}

const Frame: React.FC<Props> = ({ children }) => (
  <FrameWrapper>
    <BezelOuter>
      <BezelInner>{children}</BezelInner>
    </BezelOuter>
  </FrameWrapper>
);

Frame.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Frame;
