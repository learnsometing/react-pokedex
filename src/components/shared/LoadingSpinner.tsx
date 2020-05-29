import React from 'react';
import GridLoader from 'react-spinners/GridLoader';
import theme from '../theme';

const LoadingSpinner: React.FC = () => (
  <GridLoader color={theme.id} size={20} margin={4} />
);

export default LoadingSpinner;
