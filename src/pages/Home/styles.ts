import styled from 'styled-components';

export const Container = styled.div`
  scroll-snap-stop: always;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  max-height: 100vh;

  footer {
    scroll-snap-stop: always;
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 80px;
    margin: 32px;

    h5 {
      svg {
        margin-left: 8px;
      }
    }
  }
`;
