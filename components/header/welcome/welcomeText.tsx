import styled, {ThemeContext} from 'styled-components';
import H1 from '../../reusable/h1';
import device from '../../../utility/device';
import {ReactChild, useContext} from 'react';

interface WelcomeTextProps {
    children: ReactChild | ReactChild[];
    headerText: string;
}

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
    color: ${props => props.theme.colors.colorPrimary};
    margin-top: 0;
    font-size: ${props => props.theme.fonts.size.standard};
    font-weight: ${props => props.theme.fonts.weight.standard};
    line-height: 1.3rem;

    & > p {
        margin: 0.75rem 0;

        @media ${device.mobileL.max} {
            margin: 0.3rem 0;
        }
    }

    @media ${device.mobileL.max} {
        font-size: 1rem;
    }

    @media ${device.mobileM.max} {
        font-size: 0.8rem;
    }
`;

export default function WelcomeText(props: WelcomeTextProps) {
    const theme = useContext(ThemeContext);
    return (
        <StyledWelcomeTextContainer>
            <H1 textColor={theme.colors.colorPrimary}>{props.headerText}</H1>
            <StyledWelcomeText>{props.children}</StyledWelcomeText>
        </StyledWelcomeTextContainer>
    );
}
