import styled from 'styled-components';
import WelcomeMockWindow, { WelcomeMockWindowProps } from '../../components/header/welcome/welcomeMockWindow';
import WelcomeText from '../../components/header/welcome/welcomeText';
import device from '../../utility/device';

const StyledWelcome = styled.div`
    width: 100%;
    background: ${(props) => props.theme.colors.colorAccent};
    margin-top: 5rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    position: relative;
    scroll-margin-top: 5rem;

    @media ${device.laptop.max} {
        flex-direction: column;
    }
`;

const welcomeMockWindowProps: WelcomeMockWindowProps = {
    lines: [
        { indent: { left: 0, right: 0 }, isMockLine: true },
        { indent: { left: 0, right: 10 }, isMockLine: true },
        { indent: { left: 2, right: 2 }, isMockLine: true },
        { indent: { left: 2, right: 4 }, isMockLine: true },
        { indent: { left: 2, right: 6 }, isMockLine: true },
        { indent: { left: 2, right: 2 }, isMockLine: true },
        { indent: { left: 0, right: 8 }, isMockLine: true },
        { indent: { left: 0, right: 0 }, isMockLine: false, content: <span>{'axios.get(isseven.awrzawinski.xyz/api/7)'}</span> },
        { indent: { left: 2, right: 0 }, isMockLine: false, content: <span>{'.then(() => setSuccessfulDev("ME"));'}</span> },
        { indent: { left: 0, right: 0 }, isMockLine: true },
        { indent: { left: 0, right: 8 }, isMockLine: true },
        { indent: { left: 0, right: 12 }, isMockLine: true },
        { indent: { left: 2, right: 6 }, isMockLine: true },
        { indent: { left: 0, right: 16 }, isMockLine: true },
        { indent: { left: 2, right: 2 }, isMockLine: true },
        { indent: { left: 0, right: 12 }, isMockLine: true },
        { indent: { left: 0, right: 6 }, isMockLine: true },
        { indent: { left: 2, right: 6 }, isMockLine: true },
        { indent: { left: 2, right: 8 }, isMockLine: true },
        { indent: { left: 2, right: 2 }, isMockLine: true },
        { indent: { left: 0, right: 0 }, isMockLine: true },
        { indent: { left: 0, right: 10 }, isMockLine: true },
        { indent: { left: 2, right: 2 }, isMockLine: true },
        { indent: { left: 2, right: 4 }, isMockLine: true },
        { indent: { left: 2, right: 6 }, isMockLine: true },
        { indent: { left: 2, right: 2 }, isMockLine: true },
        { indent: { left: 0, right: 8 }, isMockLine: true },
    ],
    filenames: [
        { name: 'node_modules', isActive: false },
        { name: 'menu.tsx', isActive: false },
        { name: 'masterpiece.png', isActive: false },
        { name: 'blame.css', isActive: false },
        { name: 'checkSeven.ts', isActive: true },
        { name: 'something.ts', isActive: false },
        { name: 'itsajoke.md', isActive: false },
        { name: 'package.json', isActive: false },
    ],
};

export default function Welcome() {
    return (
        <StyledWelcome id="home">
            <WelcomeText headerText="is7API">
                <p>The API to revolutionize the way you develop the web.</p>
                <p>The solution to your everyday problems.</p>
                <p>Clean and elegant.</p>
                <p>Simply amazing.</p>
            </WelcomeText>
            <WelcomeMockWindow {...welcomeMockWindowProps} />
        </StyledWelcome>
    );
}
