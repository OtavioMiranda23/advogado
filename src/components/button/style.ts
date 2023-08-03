import styled, { css } from 'styled-components';

export const Container = styled.button<{ $primary?: boolean }>`
    padding:  22px clamp(12px, 5vw, 24px);
    width: 100%;
    font-size: 1.2rem;
    font-weight: 600;
    color: ${props => props.$primary ?  "#1E2027" : "gray"};
    background-color: ${props => props.$primary ? "#DFAE4F" : "#1E2027"};
    border: ${props => props.$primary ? "1px solid #DFAE4F" : "1px solid gray"};
    border-radius: 4px;
`;
