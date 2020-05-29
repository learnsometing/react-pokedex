import PropTypes from 'prop-types';

export const childImageSharpPropType = PropTypes.shape({
  fixed: PropTypes.shape({
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
    base64: PropTypes.string.isRequired,
    aspectRatio: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
}).isRequired;

export const cryPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  ext: PropTypes.string.isRequired,
  publicURL: PropTypes.string.isRequired,
});

export const pokemonPropType = PropTypes.shape({
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  spriteLocal: PropTypes.shape({ childImageSharp: childImageSharpPropType })
    .isRequired,
  types: PropTypes.array.isRequired,
});

export const pokemonWithCry = PropTypes.shape({
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  weight: PropTypes.string.isRequired,
  spriteLocal: PropTypes.shape({ childImageSharp: childImageSharpPropType })
    .isRequired,
  types: PropTypes.array.isRequired,
  cry: PropTypes.shape({
    mp3: PropTypes.string.isRequired,
    ogg: PropTypes.string.isRequired,
  }).isRequired,
});
