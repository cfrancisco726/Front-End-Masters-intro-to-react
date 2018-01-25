// @flow

import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    tranform: rotate(0deg);
  }
  to {
    tranform: rotate(360);
  }
`;

const Image = styled.img`
  animation: ${spin} 4s infinite linear;
`;

const Spinner = () => <Image src="/public/img/loading.png" alt="loading indicator" />;

export default Spinner;
