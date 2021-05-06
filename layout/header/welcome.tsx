import styled from 'styled-components';
import WelcomeDecoration from '../../components/header/welcome/welcomeDecoration';
import H1 from '../../components/reusable/h1';
import device from '../../utility/device';

const StyledWelcome = styled.div`
    width: 100%;
    background: ${(props) => props.theme.colorAccent};
    margin-top: 5rem;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    position: relative;
`;

const StyledWelcomeTextContainer = styled.div`
    padding: 5rem 10%;

    @media ${device.mobileL.max} {
        padding: 2rem 5%;
    }
`;

const StyledWelcomeText = styled.p`
    color: ${(props) => props.theme.colorPrimary};
    margin-top: 0;
    font-size: 1.5rem;
    line-height: 1.3em;

    @media ${device.mobileL.max} {
        font-size: 1rem;
    }
`;

export default function Welcome() {
    return (
        <StyledWelcome>
            <StyledWelcomeTextContainer>
                <H1>is7API</H1>
                <StyledWelcomeText>
                    The API to revolutionize the way you develop the web. <br />
                    The solution to your everyday problems. <br />
                    Clean and elegant. <br />
                    Simply amazing.
                </StyledWelcomeText>
            </StyledWelcomeTextContainer>
            <WelcomeDecoration />
        </StyledWelcome>
    );
}
