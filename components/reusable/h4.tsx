import styled from 'styled-components';
import device from '../../utility/device';
import HeadingBase, {HeadingBaseProps} from './headingBase';

const StyledH4 = styled(HeadingBase)<HeadingBaseProps>`
    font-size: 1.5rem;

    @media ${device.mobileL.max} {
        font-size: 1.2rem;
    }
`;

export default function H4(props: HeadingBaseProps) {
    return (
        <StyledH4 as={'h4'} {...props}>
            {props.children}
        </StyledH4>
    );
}
