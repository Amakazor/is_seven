import styled from 'styled-components';
import device from '../../utility/device';
import HeadingBase, {HeadingBaseProps} from './headingBase';

const StyledH2 = styled(HeadingBase)<HeadingBaseProps>`
    font-size: 3.5rem;

    @media ${device.mobileL.max} {
        font-size: 2.2rem;
    }
`;

export default function H2(props: HeadingBaseProps) {
    return (
        <StyledH2 as={'h2'} {...props}>
            {props.children}
        </StyledH2>
    );
}
