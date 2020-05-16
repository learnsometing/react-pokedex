import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  max-width: 300px;
  margin-bottom: 1.45rem;
`;

const SignOff = styled.p`
  font-size: 1.38316rem;
`;

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hey Everyone,</h1>
    <p>
      I built this starter to cut down on the boilerplate required to set up a
      modern Gatsby/React development environment. I also wanted to keep the
      starter as minimal as possible.
    </p>
    <p>The main features of this starter are:</p>
    <ul>
      <li>
        ESLint and prettier with recommended rules that don&#39;t interfere.
      </li>
      <li>Stylelint with prettier config</li>
      <li>styled-components with prettier and stylelint config.</li>
      <li>Jest with babel, typescript, and styled-components support.</li>
      <li>Recommended mocks and shims for Gatsby unit testing.</li>
      <li>
        Cypress end to end testing environment separate from unit-testing
        environment.
      </li>
      <li>Typescript, with babel, eslint, and prettier config.</li>
      <li>All necessary Typescript types for installed packages.</li>
    </ul>
    <SignOff>I hope it serves you well!</SignOff>
    <ImageWrapper>
      <Image />
    </ImageWrapper>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
