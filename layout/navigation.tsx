import styled from "styled-components"
import Logo from "../components/logo";
import Menu from "../components/menu"

const StyledNavigation = styled.nav`
    height: 5rem;
    padding: 1rem 2rem;
    position: fixed;
    width: 100%;
    background: ${props => props.theme.colorAccent};
    display: flex;
    justify-content: space-between;
`

export default function Navigation() {
    return (
        <StyledNavigation>
            <Logo/>
            <Menu/>
        </StyledNavigation>
    )
}