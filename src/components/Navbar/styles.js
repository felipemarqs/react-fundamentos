import styled from "styled-components";

export const Container = styled.nav`

    background: ${({ theme }) => theme.colors.background};
    margin: 16px;
    display: flex;
    justify-content: center;
    gap: 32px;
    align-items: center;

    a {
        text-decoration: none;
        padding:  4px 16px;
        border: none;
        background: transparent;
        font-size: 16px;
        font-weight: bold;
        color: #fff;
        box-shadow: 8px 4px 18px rgba(0,0,0, 0.14);
        border-radius: 8px;
        transition: background 0.1s ease-in;

        &:hover {
        background:${({ theme }) => theme.colors.gray[300]};
        }

        &:active {
            background: ${({ theme }) => theme.colors.primary[600]};
        }
    }

    
`;