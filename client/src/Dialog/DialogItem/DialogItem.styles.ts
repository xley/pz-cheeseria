import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  img {
    max-height: 250px;
    object-fit: cover;
  }

  div {
    padding: 1rem;
    height: 100%;
  }
`;
