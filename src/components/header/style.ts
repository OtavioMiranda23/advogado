import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color:#212F3C;
    color: #E5E8E8;
    padding: 1rem;
    border-bottom: 1px solid gray;
    h1 {
        font-size: 1.5rem;
        color: #F1C40F;
    }
    ul {
        display: flex;
        justify-content: center;
        gap: 1rem;

        list-style-type: none;        
    }
    a {
        text-decoration: none;
        color: #E5E8E8;
    }
    /* unvisited link */
    a:link {
    color: #E5E8E8;
    }

    /* visited link */
    a:visited {
    color: #E5E8E8;
    }
`;
