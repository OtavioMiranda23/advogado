import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  overflow: hidden;
  background: #1E2027;
  color: #fff;
  padding: 14px 14px 0 14px;

  .containerInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    p:nth-child(1){
      color: #DFAE4F;
    }
  }

  .containerFoto {
    display: none;
  }

  @media (min-width: 768px) {

    display: grid;
    grid-template-columns: 1fr 1fr;

    .containerFoto {
      display: flex;
      justify-content: center;
    }
    img {
      height: calc(791px/1.5);
      width: calc(564px/1.5);
    }

    button {
      margin: 0 10px;
    }
  }
`
