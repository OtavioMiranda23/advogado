import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color:#212F3C;
    color:  #DFAE4F;
    padding: 1rem;
    border-bottom: 1px solid gray;
    ul {
        display: flex;
        justify-content: center;
        gap: 1rem;

        list-style-type: none;        
    }
    a {
        text-decoration: none;
        color:  #DFAE4F;
    }
    
`;
