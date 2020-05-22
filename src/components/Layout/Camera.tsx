import React from 'react';
import styled from 'styled-components';

export const CameraOuter = styled.div`
  border: ${(props): string => props.theme.penLine};
  border-radius: 50%;
  padding: 1px;
  margin-left: 1vw;
  background-color: #fff;
`;

export const CameraLens = styled.div`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  padding: 0.25vh;
  background-color: #0c082c;
`;

export const CameraLensInner = styled.div`
  position: relative;
  border: 2px solid #363537;
  border-radius: 50%;
  padding: 0.25vh;
  width: 100%;
  height: 100%;
`;

export const CameraLensGlare = styled(CameraLensInner)`
  position: absolute;
  top: 0;
  border: 0;
  border-radius: 50%;
  padding: 0;
  width: 4px;
  height: 4px;
  background-color: #fff;
  z-index: 2;
`;

export const CameraLensCenterOuter = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const CameraLensCenter = styled.div`
  position: relative;
  border-radius: 50%;
  width: 2px;
  height: 2px;
  background-color: green;
`;

const Camera: React.FC = () => (
  <CameraOuter>
    <CameraLens>
      <CameraLensInner>
        <CameraLensGlare />
        <CameraLensInner>
          <CameraLensCenterOuter>
            <CameraLensCenter />
          </CameraLensCenterOuter>
        </CameraLensInner>
      </CameraLensInner>
    </CameraLens>
  </CameraOuter>
);

export default Camera;
