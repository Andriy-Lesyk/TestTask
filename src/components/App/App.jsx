import React, { useState } from 'react';
import cryptoArray from './crypto.json';
import CryptoList from 'components/CryptoList/CryptoList';
import CryptoLogo from '../../images/cryptocurrency.png';
import { Input, Logo, Container } from './App.styled';

export const App = () => {
  const [filter, setFilter] = useState('');

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  let cryptoArrayFiltered = cryptoArray.data;
  filter &&
    (cryptoArrayFiltered = cryptoArray.data.filter(
      crypt => crypt.symbol[0] === filter.toUpperCase()
    ));

  return (
    <Container>
      <Logo src={CryptoLogo} />
      <Input
        value={filter}
        onChange={changeFilter}
        type="text"
        placeholder="Search..."
      />
      {cryptoArrayFiltered.length > 0 ? (
        <CryptoList cryptoArrayFiltered={cryptoArrayFiltered} />
      ) : (
        <p>Try another letter</p>
      )}
    </Container>
  );
};
