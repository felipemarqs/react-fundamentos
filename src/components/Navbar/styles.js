import styled from "styled-components";

export const Container = styled.nav`

    background: #333;
    margin: 16px;
    padding: 16px;
    border-radius: 4px;

    a {
        text-decoration: none;
        background: #ccc;
        color: #000;
        margin: 0px 4px;
        padding: 4px;
        border-radius: 4px;
    }
    a:hover {
        background: #000;
        color: #ccc;
    }
`;