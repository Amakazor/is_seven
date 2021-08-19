import styled from 'styled-components';
import device from '../../utility/device';
import HeadingBase, {HeadingBaseProps} from './headingBase';

const StyledH3 = styled(HeadingBase)<HeadingBaseProps>`
    font-size: 2rem;

    @media ${device.mobileL.max} {
        font-size: 1.5rem;
    }
`;

export default function H3(props: HeadingBaseProps) {
    return (
        <StyledH3 as={'h3'} {...props}>
            {props.children}
        </StyledH3>
    );
}
