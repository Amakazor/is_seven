import styled, { ThemeContext } from 'styled-components';
import H1 from '../../reusable/h1';
import device from '../../../utility/device';
import { useContext } from 'react';

const StyledWelcomeTextContainer = styled.div`
    padding: 10rem 5% 5rem 10%;

    @media (max-width: 1650px) {
        padding: 5rem 2% 5rem 10%;
    }

    @media ${device.laptop.max} {
        padding: 3rem 10% 3rem;
    }

    @media ${device.mobileL.max} {
        padding: 2rem 4%;
    }
`;

const StyledWelcomeText = styled.div`
    color: ${(props) => props.theme.colors.colorPrimary};
    margin-top: 0;
    font-size: ${(props) => props.theme.fonts.sizes.standard};
    line-height: 1.3rem;

    & > p {
        margin: 0.5rem 0;
    }

    @media ${device.mobileL.max} {
        font-size: 1rem;
    }

    @media ${device.mobileM.max} {
        font-size: 0.9rem;
    }
`;

export default function WelcomeText() {
    const theme = useContext(ThemeContext);
    return (
        <StyledWelcomeTextContainer>
            <H1 textColor={theme.colors.colorPrimary}>is7API</H1>
            <StyledWelcomeText>
                <p>The API to revolutionize the way you develop the web.</p>
                <p>The solution to your everyday problems.</p>
                <p>Clean and elegant.</p>
                <p>Simply amazing.</p>
            </StyledWelcomeText>
        </StyledWelcomeTextContainer>
    );
}
