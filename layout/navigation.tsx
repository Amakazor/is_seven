import styled from "styled-components"
import Logo from "../components/logo";
import Menu from "../components/menu"
import device from "../utility/device";

const StyledNavigation = styled.nav`
    height: 5rem;
    padding: 1rem 2rem;
    position: fixed;
    width: 100%;
    background: ${props => props.theme.colorAccent};
    display: flex;
    justify-content: space-between;

    @media ${device.mobileL.max} {
        border-bottom: 0.125rem solid ${props => props.theme.colorPrimary};
    }
`

export default function Navigation() {
    return (
        <StyledNavigation>
            <Logo/>
            <Menu/>
        </StyledNavigation>
    )
}