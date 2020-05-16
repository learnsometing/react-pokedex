import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

interface Props {
  siteTitle?: string;
}

const SiteHeader = styled.header`
  margin-bottom: 1.45rem;
  background: rgb(41, 78, 128);
  background: linear-gradient(
    150deg,
    rgba(41, 78, 128, 1) 40%,
    rgba(219, 112, 147, 1) 100%
  );
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const Brand = styled.h1`
  margin: 0;
`;

const BrandLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const Header: React.FC<Props> = ({ siteTitle }) => (
  <SiteHeader>
    <HeaderContainer>
      <Brand>
        <BrandLink to="/">{siteTitle}</BrandLink>
      </Brand>
    </HeaderContainer>
  </SiteHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
