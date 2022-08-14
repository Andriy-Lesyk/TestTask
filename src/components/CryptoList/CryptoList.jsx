import React from 'react';
import PropTypes from 'prop-types';
import { CryptoSheet, CryptoItem, Information } from './CryptoList.styled';

function CryptoList({ cryptoArrayFiltered }) {
  return (
    <CryptoSheet>
      {cryptoArrayFiltered.map(crypt => (
        <CryptoItem key={crypt.id}>
          <Information>{cryptoArrayFiltered.indexOf(crypt) + 1}.</Information>
          <Information>{crypt.symbol}</Information>
          <Information>
            $
            {(
              crypt.prices.reduce((acc, el) => acc + el, 0) /
              crypt.prices.length
            ).toFixed(3)}
          </Information>
        </CryptoItem>
      ))}
    </CryptoSheet>
  );
}
CryptoList.propTypes = {
  cryptoArrayFiltered: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      symbol: PropTypes.string.isRequired,
      prices: PropTypes.array.isRequired,
    })
  ),
};

export default CryptoList;
