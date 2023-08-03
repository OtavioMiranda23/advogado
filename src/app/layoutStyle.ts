import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  overflow: hidden;
  background-color: #1e2027;
background-image: url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 10 12c1.67 0 3.182-.683 4.27-1.785A5.998 5.998 0 0 0 14 12h2a4 4 0 0 1 4-4V6c-1.67 0-3.182.683-4.27 1.785C15.905 7.22 16 6.622 16 6c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 20 6V4a4 4 0 0 1-4-4h-2c0 .622.095 1.221.27 1.785A5.982 5.982 0 0 0 10 0C8.33 0 6.818.683 5.73 1.785 5.905 1.22 6 .622 6 0H4a4 4 0 0 1-4 4v2c1.67 0 3.182.683 4.27 1.785A5.998 5.998 0 0 1 4 6c0-.622.095-1.221.27-1.785A5.982 5.982 0 0 1 0 6v2a4 4 0 0 1 4 4h2zm-4 0a2 2 0 0 0-2-2v2h2zm16 0a2 2 0 0 1 2-2v2h-2zM0 2a2 2 0 0 0 2-2H0v2zm20 0a2 2 0 0 1-2-2h2v2zm-10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='%23313336' fill-opacity='0.23' fill-rule='evenodd'/%3E%3C/svg%3E");

color: #FFF;

padding: 14px 14px 0 14px;

  .containerInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    h1 {
      font-size: clamp(2.5rem, 3.5vw, 4rem); 
      font-weight: 400;
    }
    
    p:nth-child(1){
      font-size: clamp(1.2rem, 2.5vw, 2rem); 
      color: #DFAE4F;
    }
    p:nth-child(3){
      font-size: clamp(1rem, 1.5vw, 1.2rem); 
    }
  }

  .containerFoto {
    display: none;
  }

  .containerButtons {
    display: flex;
    flex-direction: column; 
    gap: 22px;
    margin: 4rem 0;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .containerFoto {
      display: flex;
      justify-content: center;
    }
    img {
      height: clamp(527px, 100%, 791px);
      width: clamp(431px, 100%, 644px);
    }
  }

  @media (min-width: 1024px) {
    .containerButtons {
      display: flex;
      flex-direction: row;

    }
  }
`
