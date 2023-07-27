import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  color:#E5E8E8;
  background-color: #212F3C;
  justify-content: center;

  padding: 1rem;
  gap: 2rem;

  p {
    font-weight: 200;
  }
  button {
    margin: 6rem 0;
    display: flex;
    
    height: 4rem;
    font-size: 1.2rem;
    font-weight: 600;
    background-color: #F1C40F;
    

    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.h1`
    display: flex;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 500;
`;

export const Marcador = styled.strong`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    font-weight: 500;
    div {
        height: 1px;
        width: 36px;
        border: 1px solid #F1C40F;
    }

`;
