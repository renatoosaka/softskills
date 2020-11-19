import styled from 'styled-components';

interface ContentProps {
  background_url: string;
}

export const Container = styled.div`
  padding-bottom: 56px;

  h2 {
    position: relative;
    display: block;

    text-align: center;

    font-size: 36px;
    font-weight: 700;
    line-height: 46px;
    padding: 48px 0;

    &::after {
      content: '';
      position: absolute;
      bottom: 32px;
      left: 50%;
      width: 80px;
      height: 4px;
      border-radius: 8px;
      background-color: #e1e0e6;
      transform: translateX(-50%);
    }
  }
`;

export const Content = styled.div<ContentProps>`
  width: 100%;
  height: 100vh;

  display: flex;
  align-items: stretch;
  padding: 0 32px;

  .background {
    flex: 1;
    background: url(${props => props.background_url}) no-repeat center;
    background-size: cover;
    border-radius: 8px;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);
  }

  .content {
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 600px;

    strong {
      font-size: 16px;
      line-height: 26px;
      font-weight: 600;
      margin-bottom: 16px;
      text-align: left;
      display: block;
    }

    p {
      font-size: 16px;
      line-height: 26px;
      font-weight: 400;
      margin-bottom: 32px;

      & + strong {
        margin-top: 48px;
      }
    }
    a {
      color: #d2c93b;
      text-decoration: none;
    }
  }
`;
