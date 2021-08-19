import styled from 'styled-components';
import device from '../../utility/device';
import HeadingBase, {HeadingBaseProps} from './headingBase';

const StyledH1 = styled(HeadingBase)<HeadingBaseProps>`
    font-size: 5rem;

    @media ${device.mobileL.max} {
        font-size: 4rem;
    }
`;

export default function H1(props: HeadingBaseProps) {
    return (
        <StyledH1 as={'h1'} {...props}>
            {props.children}
        </StyledH1>
    );
}
