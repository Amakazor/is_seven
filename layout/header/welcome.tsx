import styled from 'styled-components';
import WelcomeDecoration from '../../components/header/welcome/welcomeDecoration';
const StyledWelcome = styled.div`
    width: 100%;
    background: ${(props) => props.theme.colorAccent};
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: baseline;
`;
export default function Welcome() {
    return (
        <StyledWelcome>
            <WelcomeDecoration />
        </StyledWelcome>
    );
}
