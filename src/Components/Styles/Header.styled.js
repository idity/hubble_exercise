import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    padding: 40px 0;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    @media(max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
    }
`;

export const Logo = styled.img`
    @media(max-width:${({ theme }) => theme.mobile}) {
        margin-bottom: 40px;
    }
`;

export const Image = styled.img`
    width: 375px;
    margin-left: 40px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin: 40px 0 30px;
    }
`;

export const ThemeToggler = styled.button`
    border-radius: 50px;
    border: none;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 10px 20px;
    background-color: ${({bg}) => bg || '#fff'};
    color: ${({color}) => color || '#333'};
    margin-left: 20px;

    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }
`;