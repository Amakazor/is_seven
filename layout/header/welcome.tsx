import styled from 'styled-components';
import WelcomeDecoration from '../../components/header/welcome/welcomeDecoration';
import WelcomeMockWindow from '../../components/header/welcome/welcomeMockWindow';
import WelcomeText from '../../components/header/welcome/welcomeText';
import device from '../../utility/device';

const StyledWelcome = styled.div`
    width: 100%;
    background: ${(props) => props.theme.colorAccent};
    margin-top: 5rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: relative;

    @media ${device.laptop.max} {
        flex-direction: column;
    }
`;

export default function Welcome() {
    return (
        <StyledWelcome>
            <WelcomeText />
            <WelcomeMockWindow />
            <WelcomeDecoration />
        </StyledWelcome>
    );
}
