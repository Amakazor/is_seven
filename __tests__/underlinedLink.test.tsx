import {mount} from 'enzyme';
import UnderlinedLink, {UnderlinedLinkProps} from '../components/reusable/underlinedLink';

const underlinedLinkProps: UnderlinedLinkProps = {
    colors: {
        normal: {
            textColor: 'white',
            backgroundColor: 'black',
        },
        hover: {
            textColor: 'black',
            backgroundColor: 'white',
        },
        underlineColor: 'red',
    },
    href: '#about',
    transitionTime: '200ms',
    fontWeight: 400,
    onClick: () => {},
};

const testText = 'abcd';

describe('Underlined Link', () => {
    it('renders without crashing', () => {
        mount(<UnderlinedLink {...underlinedLinkProps}>{testText}</UnderlinedLink>);
    });

    it('renders correctly', () => {
        const underlinedLink = mount(<UnderlinedLink {...underlinedLinkProps}>{testText}</UnderlinedLink>);

        expect(underlinedLink.text()).toBe(testText);
        expect(underlinedLink.find('a').hostNodes().length).toBe(1);
    });

    it('has correct link', () => {
        const underlinedLink = mount(<UnderlinedLink {...underlinedLinkProps}>{testText}</UnderlinedLink>);
        expect(underlinedLink.find('a').prop('href')).toEqual(underlinedLinkProps.href);
    });
});
