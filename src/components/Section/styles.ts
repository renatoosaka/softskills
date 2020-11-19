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

  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: stretch;
  padding: 0 32px;

  .background {
    flex: 1;
    background: url(${props => props.background_url}) no-repeat center;
    background-size: cover;
    border-radius: 8px;
    box-shadow: 2px 0 4px rgba(0, 0, 0, 0.25);
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
  }
`;
