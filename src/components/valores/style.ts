import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 8px;
    .title {
        font-size: 1.1rem;
        font-weight: 600;
    }
    h1 {
        text-align: center;
        margin: 24px;
    }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 4px;
    div {
        border-bottom: 1px solid gray;
    }
  }
`;
