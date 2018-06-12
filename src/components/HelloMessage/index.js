import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledHelloMessage = styled.h1`
  font-size: 48px;
`;

const HelloMessage = ({ message }) => (
  <StyledHelloMessage>
    {message}
  </StyledHelloMessage>
);

HelloMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default HelloMessage;
