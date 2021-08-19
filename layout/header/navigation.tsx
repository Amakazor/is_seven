import styled from 'styled-components';
import Logo from '../../components/header/navigation/logo';
import Menu from '../../components/header/navigation/menu';

const StyledNavigation = styled.nav`
    height: 5rem;
    padding: 1rem 2rem;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 9999;
    background: ${props => props.theme.colors.colorAccent};
    display: flex;
    justify-content: space-between;
    border-bottom: 0.125rem solid ${props => props.theme.colors.colorPrimary};
`;

export default function Navigation() {
    return (
        <StyledNavigation>
            <Logo />
            <Menu />
        </StyledNavigation>
    );
}
