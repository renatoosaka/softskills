import styled from 'styled-components';

import headerImg from '../../assets/header-image.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #121214 url(${headerImg}) no-repeat center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 32px;

  h1 {
    font-size: 54px;
    font-weight: 800;
    line-height: 64px;
    color: #383a48;
    width: 360px;
    text-shadow: 2px 0 4px rgba(255, 255, 255, 0.5);
  }
  h3 {
    font-size: 24px;
    font-weight: 500;
    line-height: 34px;
    color: #383a48;
    width: 360px;
    text-shadow: 2px 0 4px rgba(255, 255, 255, 0.5);
  }
`;
