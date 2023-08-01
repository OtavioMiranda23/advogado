import styled, { css } from 'styled-components';

export const Container = styled.button<{ $primary?: boolean }>`
    padding: 14px;
    margin: 6rem 0;
    font-size: 1.2rem;
    font-weight: 600;
    background-color: ${props => props.$primary ? "green" : "gray"};
    color: ${props => props.$primary ? "green" : "gray"};
    border-radius: 4px;
`;
